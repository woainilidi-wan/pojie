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


let body = $response.body;
let obj = JSON.parse(body);

if (obj.cmdID === "9002" && obj.msgType === 1 && obj.code === "9914") {
    // 修改用户信息
    if (obj.data) {
        // 修改用户名
        obj.data.name = "修改后的用户名";
        
        // 修改头像URL（可选）
        // obj.data.avatar = "https://new-avatar-url.com/avatar.png";
        
        // 修改其他字段
        // obj.data.type = 1;
    }
    
    // 确保成功状态
    obj.success = true;
    obj.fail = false;
    obj.messsage = "修改成功";
    
    // 重新序列化并返回
    body = JSON.stringify(obj);
}

$done({body});