/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/www\.wordvector\.com\/api\/ap\/en\/mine_index\/ url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/xldc.js
^https?:\/\/www\.wordvector\.com\/api\/ap\/en\/log_come\/ url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/xldc.js
[mitm] 
hostname = www.wordvector.com

*
*
*/

let body = $response.body;
let obj = JSON.parse(body);

// 解锁所有权限
obj.data.can = {
  "content": true,
  "trade": true,
  "edit": true
};

// 添加 VIP 特权
obj.data.user_info.vip_info = {
  "is_vip": true,
  "vip_end_time": "1999999999,
  "have_days": 36500,
};

// 升级用户角色
obj.data.user_info.role = "VIP用户";
obj.data.user_info.role_name = "VIP用户";

// 添加欢迎提示
obj.data.tip_list = ["欢迎使用VIP特权！", "尊享会员权益已开启"];

$done({body: JSON.stringify(obj)});