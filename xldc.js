/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/www\.wordvector\.com\/api\/ap\/en\/mine_index\/ url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/xldc.js
[mitm] 
hostname = www.wordvector.com

*
*
*/

let body = $response.body;
let obj = JSON.parse(body);

// 直接替换整个 can 对象
obj.data.can = {"content": true, "trade": true, "edit": true};
// 替换 VIP 信息
obj.data.user_info.vip_info = {"is_vip": true, "vip_end_time": "2026-12-31", "have_days": 365};
obj.data.user_info.role = obj.data.user_info.role_name = "VIP用户";
obj.data.tip_list = ["VIP特权已激活"];

$done({body: JSON.stringify(obj)});