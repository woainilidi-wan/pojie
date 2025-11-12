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

{
  "rewrite": [
    {
      "matches": "^https?://ktx\\.cn/v3/api/my/home/get_home_center\\?ktxToken=[a-fA-F0-9]+",
      "name": "我是大帅哥",
      "script": {
        "type": "response",
        "body": `
          let obj = JSON.parse($response.body);
          obj.isVip = 1;
          obj.point = 9999;
          obj.exp = 8888;
          obj.level = 5;
          $done({body: JSON.stringify(obj)});
        `
      }
    }
  ]
}