<?php

namespace App\Http\Requests;

use App\Order;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Star\utils\CreateJson;

class OrderRequest extends FormRequest
{
    protected $order;
    function __construct(Order $order)
    {
        $this->order = $order;
    }
    public function wantsJson()
    {
        return true;
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mobile' => 'required|unique:orders',
            'detail' => 'required',
            'address' => 'required'
        ];
    }
    public function messages()
    {
        return [
            'mobile.required' => '手机号码必须填写',
            'mobile.unique' => '您的手机号码已经预约过了，我们会在发货前与您进一步确认'
        ];
    }
    public function fire()
    {
        $data = Request::all();

        if (\Cache::get($data['mobile']) != $data['authcode']) {
            return CreateJson::create(403, '您输入的验证码不正确');
        }

        $save = $this->order->create([
                'mobile' => $data['mobile'],
                'detail' => $data['detail'],
                'address' => $data['address'],
                'device' => $data['device']
            ]);
        if ($save) {
            return CreateJson::create(200, '恭喜，您已经成功预订');
        }
        return CreateJson::create(403, '出现错误，请检查网络');
    }
}
