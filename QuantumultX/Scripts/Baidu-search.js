/*
https://github.com/RuCu6/QuanX/blob/main/Scripts/webpage/baidu.js
百度_搜索结果广告 //www.baidu.com, m.baidu.com
^https?:\/\/(www|m)\.baidu\.com\/.*word=.* url script-response-body https://raw.githubusercontent.com/ZY714IU/ZY/main/QuantumultX/Scripts/Baidu-search.js
*/


let rHead = "";
let newStyle =
  "";
let body = $response.body.replace(rHead, newStyle);
$done({ body });
