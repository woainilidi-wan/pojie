/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/api\.yfsp\.tv\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/ayf.js
[mitm] 
hostname = api.yfsp.tv

*
*
*/

var body = $response.body; 
var obj = JSON.parse($response.body);
obj = {
  "ret" : 200,
  "data" : {
    "isOnlyAcceptFriend" : false,
    "areacode" : "",
    "nickName" : "男安居客",
    "userExtension" : {
      "currentLevel" : 8,
      "uid" : 129229161,
      "gold" : 9999,
      "experience" : 9999,
      "nextLevel" : 200,
      "levelTitle" : "LV8",
      "lastRenewTime" : "2025-11-04T04:07:06.393Z"
    },
    "vipCategoryId" : 0,
    "vipRegion" : "",
    "status" : true,
    "sex" : 1,
    "fansCount" : 0,
    "eDate" : "2099-10-13T02:44:00Z",
    "sDate" : "2099-10-13T02:44:00Z",
    "userNameRaw" : "if_231012a72tx3",
    "id" : 129229161,
    "backgroundImage" : "https://static.yfsp.tv/Content/background/bg-8.jpg",
    "lastCountry" : "SG",
    "email" : "2720566638@qq.com",
    "userKey" : "ouVPvQO9M9g2l05UBLwrJ3",
    "attentionCount" : 0,
    "phone" : "",
    "bigV" : true,
    "bigVEndTime" : "2099-01-01T00:00:00Z",
    "avatar" : "https://static.yfsp.tv/upload/user/202310130544204463322.jpeg",
    "role" : 1,
    "vipTypeName" : "情侣会员",
    "bigVBeginTime" : "2099-01-01T00:00:00Z",
    "clockIn" : 1,
    "vipCategoryName" : "情侣会员",
    "isOfficalSpeakerw" : true,
    "vipLevel" : 8,
    "introduce" : ""
  },
  "msg" : "ok"
}

$done({body: JSON.stringify(obj)});
