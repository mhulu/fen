<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthCodeRequest;
use Illuminate\Http\Request;

class SmsController extends Controller
{
    public function sendAuthCode(AuthCodeRequest $request)
    {
      return $request->fire();
    }
}
