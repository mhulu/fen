<?php
header('Access-Control-Allow-Origin: http://fen.wemesh.cn');
header('Access-Control-Allow-Headers: Authorization, Content-Type');
header('Content-Type: application/x-www-form-urlencoded; charset=UTF-8');
header('Access-Control-Allow-Methods:  POST, GET, PUT, DELETE');


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::post('/getsms', function () {
//   return 'aa';
// });
Route::post('getsms', 'SmsController@sendAuthCode')->middleware('api');
Route::post('submit', 'OrderController@saveOrder')->middleware('api');

