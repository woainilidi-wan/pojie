/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/www\.ldjsf\.site\/api\/LDisvip url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/fy.js
[mitm] 
hostname = www.ldjsf.site

*
*
*/

var body = $request.body; 
let obj = JSON.parse($request.body);
obj = {
  "msg" : "查询成功",
  "data" : {
    "id" : 58589,
    "uuid" : "MHBJFSXESJCEFJGINMVDTTYUU",
    "vip" : 1,
    "viptime" : "1999999999",
    "ispingjia" : 0,
    "area" : "",
    "isnew" : 0,
    "expiration" : "到期时间：2025-11-06 02:57:11",
    "token" : "9ae1a065dfa37102ebc42969061b2d7d",
    "del" : 1,
    "username" : "68856855",
    "email" : "2720566638@qq.com",
    "score" : 0
  },
  "code" : "200"
}

$done({body: JSON.stringify(obj)});
