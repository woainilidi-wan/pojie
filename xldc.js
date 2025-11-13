/*
 *
 *
*******************************

[rewrite_local]
^https?:\/\/www\.wordvector\.com\/api\/ap\/en\/mine_index\/ url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/xldc.js
^https?://.*wordvector\.com.*(user|info) url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/xldc.js
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

// 直接替换VIP信息
const vipData = {
  "is_vip": true,
  "vip_end_time": "2026-12-31 23:59:59", 
  "have_days": 399
};

// 修改所有VIP相关字段
obj.data.user_info.vip_info = vipData;
obj.data.user_info.role = "VIP用户";
obj.data.user_info.role_name = "VIP用户";

// 递归修改嵌套的VIP信息
function updateVipInfo(data) {
  if (typeof data !== 'object') return;
  
  for (let key in data) {
    if (key === 'vip_info') {
      data[key] = vipData;
    } else if (typeof data[key] === 'object') {
      updateVipInfo(data[key]);
    }
  }
}

// 更新所有嵌套的VIP信息
updateVipInfo(obj.data);

$done({body: JSON.stringify(obj)});