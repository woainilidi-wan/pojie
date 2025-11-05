/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/api\.babigame\.cn\/game\/heartbeat\/mdcl\/c459\/mdgid\/160\/env\/prod url script-request-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/hua.js
[mitm] 
hostname = api.babigame.cn

*
*
*/

var body = $request.body; 
let obj = JSON.parse($request.body);
obj = {
  "packageId" : "494",
  "_role_lvl" : 40,
  "_openid" : "176224032965689110537260",
  "_role_vip" : 1,
  "timeStep" : 0.5,
  "_server_id" : 1196,
  "token" : "296e9906d630d3d1c4ae6e5d154172cd-160-459",
  "serverIndex" : 1196,
  "_account_id" : 20510599,
  "_role_id" : 20510599101196,
  "lang" : "zh",
  "env" : "prod",
  "_role_did" : "ys079qft4xe4",
  "_role_name" : "s1196.陶南琴"
}

$done({body: JSON.stringify(obj)});
