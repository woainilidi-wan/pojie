/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/api\.boboxia\.cn\/game\/heartbeat\/mdcl\/c459\/mdgid\/160\/env\/prod url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/hua.js
[mitm] 
hostname = api.boboxia.cn

*
*
*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj = {
  "packageId" : "494",
  "_role_lvl" : 50,
  "_openid" : "176224032965689110537260",
  "_role_vip" : 1,
  "timeStep" : 0.5,
  "_server_id" : 1196,
  "token" : "c20207ecf764d1e70bfbefc5bb57f151-160-459",
  "serverIndex" : 1196,
  "_account_id" : 20510599,
  "_role_id" : 20510599101196,
  "lang" : "zh",
  "env" : "prod",
  "_role_did" : "ys079qft4xe4",
  "_role_name" : "花艺师"
}

$done({body: JSON.stringify(obj)});
