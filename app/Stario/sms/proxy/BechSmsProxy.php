<?php 
namespace Star\sms\proxy;

use Illuminate\Support\Facades\Config;
use Star\Utils\CreateJson;
use Star\sms\BaseFireSms;

/**
 * sms.bechtech.cn 短信代理
 */
class BechSmsProxy extends BaseFireSms
{

    /**
     * 抽象方法实现，生成特定的HTTP参数
     * 
     */
    public function makeParams()
    {
        $params = [
          'accesskey' => config('sms.Settings.akey'),
          'secretkey' => config('sms.Settings.skey'),
          'mobile' => $this->to,
          'content' => $this->content
        ];

        return $this->params = $params;
    }

    /**
     * 抽象方法实现，格式化输出
     */
    protected function formatResponse($response)
    {
        $statusCode = $response['statusCode'];
        $content = $response['content'];
        $errCode = config('sms.ErrorCode');
        $result = json_decode($content)->result;

        if ($statusCode == '200') {
            if ($result == '01') {
              $desc = '短信已发送，请注意查收';
              return CreateJson::create(200, $desc);
            }
            $desc = $errCode[$result];
            return CreateJson::create(403, $desc);
        } else {
          return CreateJson::create(500);
        }
    }
}
