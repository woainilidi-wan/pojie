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
      "matches": "^https?://.*\\.(https://ktx.cn/v3/api/my/home/get_home_center?ktxToken=f6b4d59da988d43afb110fee5215a245)\\.com/api/user/info", // 请替换为实际的 API 域名
      "name": "VIP 信息修改",
      "script": {
        "type": "response",
        "body": `
          let obj = JSON.parse($response.body);
          
          // 修改 VIP 状态
          obj.isVip = 1;
          
          // 修改用户积分和经验值
          obj.point = 9999;
          obj.exp = 8888;
          
          // 修改用户等级
          obj.level = 5;
          
          // 修改优惠券数量
          obj.couponCountUsed = 0;
          obj.couponCountAboutToExpire = 5;
          obj.askEditorCardCount = 3;
          
          // 添加或修改 VIP 订阅信息
          obj.subscriptionVip = {
            "userId": obj.user.id,
            "beginTime": Date.now(),
            "id": 256145,
            "endTime": Date.now() + 365 * 24 * 60 * 60 * 1000, // 一年后
            "createTimeFormat": new Date().toLocaleString("zh-CN"),
            "createTime": Date.now(),
            "isActive": 1
          };
          
          // 修改提示信息
          obj.info = "尊享VIP特权，畅享无限福利";
          
          // 返回修改后的内容
          $done({body: JSON.stringify(obj)});
        `
      }
    }
  ]
}
