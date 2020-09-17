//创建cookie
function createCookie(key,value,json){
    json = json || {};
    var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if(!isNaN(json.expires)){
        var date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookieText += ';expires=' + date;
    }
    if(json.path){
        cookieText += ';path=' + json.path;
    }
    document.cookie = cookieText;
}
//获取cookie
function getCookie(key){
    var arr = document.cookie.split('; ');
    for(var i = 0,len = arr.length;i < len;i ++){
        var list = arr[i].split('=');
        if(list[0] === encodeURIComponent(key)){
            return decodeURIComponent(list[1]);
        }
    }
}