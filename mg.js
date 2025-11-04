/*
 *
 *
*******************************
[rewrite_local]
^https?:\/\/api-wood\.kaying\.cc\/rest\/user url script-response-body mg.js
[mitm] 
hostname = api-wood.kaying.cc
*
*
*/

var body = $response.body; 
var obj = JSON.parse($response.body);
obj.data.remainDay = "9999",
obj.data.vip.desc = "会员",
$done({body: JSON.stringify(obj)});

