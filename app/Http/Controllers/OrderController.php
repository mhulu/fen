<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthCodeRequest;
use App\Http\Requests\OrderRequest;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function saveOrder(OrderRequest $request)
    {
      return $request->fire();
    }
}
