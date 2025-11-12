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
          let obj = JSON.parse($response.body);
          
          // 修改 VIP 状态
          obj.isVip = 1;
          
          // 修改用户积分和经验值
          obj.point = 9999;
          obj.exp = 8888;
          
          // 修改用户等级
          obj.level = 5;
          
          // 添加或修改 VIP 订阅信息
          const now = Date.now();
          obj.subscriptionVip = {
            "userId": obj.user.id,
            "beginTime": now,
            "id": 256145,
            "endTime": now + 365 * 24 * 60 * 60 * 1000, // 一年后
            "createTimeFormat": new Date().toLocaleString("zh-CN").replace(/\//g, '-'),
            "createTime": now,
            "isActive": 1
          };
          
          // 修改提示信息
          obj.info = "尊享VIP特权，畅享无限福利";
          
          // 确保状态成功
          obj.status = 1;
          obj.msg = "success";
          
          // 返回修改后的内容
          $done({body: JSON.stringify(obj)});
        `
      }
    }
  ]
}