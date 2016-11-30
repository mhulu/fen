<?php
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

