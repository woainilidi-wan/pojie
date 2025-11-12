/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/ktx\.cn\/v3\/api\/my\/home\/get_home_center?ktxToken=f6b4d59da988d43afb110fee5215a245 url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/ktx.js
[mitm] 
hostname = ktx.cn

*
*
*/

var body = $request.body; 
var obj = JSON.parse($request.body);
obj = /*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/ktx\.cn\/v3\/api\/my\/home\/get_home_center?ktxToken=f6b4d59da988d43afb110fee5215a245 url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/ktx.js
[mitm] 
hostname = ktx.cn

*
*
*/

var body = $request.body; 
var obj = JSON.parse($request.body);
obj = {
  "couponCountUsed" : 2,
  "checkInStatus" : 0,
  "point" : 0,
  "exp" : 0,
  "subscriptionVip" : {
    "userId" : 795001,
    "beginTime" : 1762935313287,
    "id" : 256145,
    "endTime" : 1999999999999,
    "createTimeFormat" : "2025-11-12 16:15:13",
    "createTime" : 1762935313287,
    "isActive" : 1
  },
  "isVip" : 1,
  "feedbackCount" : 0,
  "level" : 1,
  "waitPayOrder" : 0,
  "subscription" : null,
  "askEditorCardCount" : 0,
  "couponCountAboutToExpire" : 0,
  "info" : "最高得#50元代金券+5000积分",
  "msg" : "success",
  "status" : 1,
  "user" : {
    "phone" : "150****1939",
    "nick" : "手机用户",
    "hasBindPhone" : 1,
    "id" : 795001,
    "image" : "",
    "avatarUrl" : "https://vktx.oss-cn-hangzhou.aliyuncs.com/avatar/user.png",
    "isOffical" : null,
    "sex" : 0,
    "pendantIconUrl" : null
  }
}

$done({body: JSON.stringify(obj)});


$done({body: JSON.stringify(obj)});
