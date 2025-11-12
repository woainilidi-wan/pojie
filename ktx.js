/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/ktx\.cn\/v3\/api\/my\/home\/get_home_center?ktxToken=f6b4d59da988d43afb110fee5215a245 url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/ktx.js
[mitm] 
hostname = ktx.cn

*
*
*/

let body = $response.body;
let obj = JSON.parse(body);

// 修改 VIP 状态
obj.isVip = 1;

// 修改订阅信息
obj.subscriptionVip = {
    "userId": obj.user.id,
    "beginTime": 1762935313000,
    "id": 256145,
    "endTime": 4070880000000, // 2099年
    "createTimeFormat": "2025-11-12 16:15:13",
    "createTime": 1762935313000,
    "isActive": 1
};

// 修改其他信息
obj.point = 9999; // 积分
obj.level = 10; // 等级
obj.exp = 8888; // 经验值

$done({body: JSON.stringify(obj)});