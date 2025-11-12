/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/ktx\.cn\/v3\/api\/my\/home\/get_home_center url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/ktx.js
[mitm] 
hostname = ktx.cn

*
*
*/

var body = $request.body; 
var obj = JSON.parse($request.body);
obj.subscriptionVip.endTime = 1999999999999,
obj. subscriptionVip.createTimeFormat = "2099-11-12 16:15:13",
obj.isVip = 1,
obj.level = 1,
$done({body: JSON.stringify(obj)});
