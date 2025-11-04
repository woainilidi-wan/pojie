/*
 *
 *
*******************************
[rewrite_local]
^https?:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo?token=ecdaf40fddf1ce517bce0d0795f45774&uid=1137065&version=4\.27\.1 url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/hb.js
[mitm] 
hostname = h5.hunbei.com
*
*
*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.end_time = 1999999999,
obj.data.level = 5,
obj.data.state = 1,
$done({body: JSON.stringify(obj)});
