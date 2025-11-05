/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/api\.babigame\.cn\/game\/enthrall\/mdcl\/c459\/mdgid\/160\/env\/prod url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/hua.js
[mitm] 
hostname = api.babigame.cn

*
*
*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj = {
  "status" : "success",
  "todayMin" : 199999,
  "force" : true,
  "level" : 103,
  "msg" : "该用户已成年，不受限制",
  "dateFlag" : "2026-11-05",
  "callback" : "success",
  "msgCode" : 10000,
  "userAge" : 25
}
$done({body: JSON.stringify(obj)});
