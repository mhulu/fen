<?php

namespace App\Http\Requests;

use App\Order;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Star\sms\MakeSMS;
use Star\sms\proxy\BechSmsProxy;
use Star\utils\CreateJson;

class AuthCodeRequest extends FormRequest
{
    protected $order;
    function __construct(Order $order)
    {
        $this->order = $order;
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

    public function wantsJson()
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
            'mobile' => 'required|min:11|max:11'
        ];
    }
    public function messages()
    {
        return [
            'mobile.required' => '手机号码必须填写',
            'mobile.min' => '手机格式不对',
            'mobile.max' => '手机格式不对'
        ];
    }
    public function fire()
    {
        $mobile = Request::input('mobile');
        if ($this->order->where('mobile', $mobile)->first()) {
            return CreateJson::create(403, '该手机号已经预约过了');
        }
        $proxy = new BechSmsProxy($mobile, MakeSMS::makeCode($mobile, 4));
        return $proxy->fire();
    }
}
