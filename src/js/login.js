$(function(){
    $('#login').click(function(){
        $('.ban_r p').css('display','block');
        $('#login').css('color','red');
        $('#saoMa').css('color','black');
        $('#mob,#one,#sao').css('display','none');
    })
    $('#saoMa').click(function(){
        $('.ban_r p').css('display','none');
        $('#saoMa').css('color','red');
        $('#login').css('color','black');
        $('#mob,#one,#sao').css('display','block');
    })

    $('#go').click(function(){
        var uname = $('#username').val();
        var upwd = $('#pwd').val();
        var cookie_str = $.cookie('users') ? $.cookie('users') : '';
        var cookie_obj = $toObj(cookie_str);
        if(uname in cookie_obj){
            if(upwd === cookie_obj[uname]){
                alert('登录成功');
                location.href = '../index.html';
            }else{
                alert('密码错误！');
            }
        }else{
            alert('用户名不存在');
        }
    })
})
//将字符串转为对象
function $toObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}