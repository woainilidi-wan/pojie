/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/php\.srsq\.club\/JavanUser\/otherLogin url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/bcsc.js
[mitm] 
hostname = php.srsq.club

*
*
*/

let body = $response.body;
let obj = JSON.parse(body);

// 修改 VIP 状态
obj.data.isVip = true;
obj.data.vipOutDate = 4070880000; // 2099-01-01

$done({body: JSON.stringify(obj)});