/********
https://github.com/ddgksf2013/Scripts/blob/master/stay.js
ScriptName stay
2022-10-17
********/

let ZY = JSON.parse($response.body);
if (ZY.biz) {
    ZY.biz = Object.values(ZY.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(ZY) });
