/*
 *
 *
*******************************

[rewrite_local]
http:\/\/api2\.microwear\.com\/api\/ url script-response-body https://raw.githubusercontent.com/woainilidi-wan/pojie/refs/heads/main/mac.js
[mitm] 
hostname = api2.microwear.com

*
*
*/


// 通用用户信息修改
let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {
  // 修改用户数据
  obj.data = {
    "email": "176340579030150@microwear.com",
    "uid": 25765818, 
    "name": "南安",
    "type": 1,
    "avatar": "http://download.microwear.com/imagesapp/176340579286323.png"
  };
  
  // 确保其他必要字段
  obj.success = true;
  obj.fail = false;
  obj.messsage = "请求成功";
}

$done({body: JSON.stringify(obj)});