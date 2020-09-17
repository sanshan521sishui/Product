$(function(){
  $('.red_button').click(function(){
    var uname = $('.reg_user').val();
    var upwd = $('.reg_password').val();
    //获取cookie
    var cookie_str = $.cookie('users') ? $.cookie('users') : '';
    //转对象
    var cookie_obj = $toObj(cookie_str);
    //判断用户是否存在 
    if(uname in cookie_obj){
      alert('用户已存在！');
      return;
    }else{
      cookie_obj[uname] = upwd;
    }
    
    //存入cookie
    $.cookie('users',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
    alert('注册成功！');
  })
  $('#go').click(function(){
    location.href = 'login.html';
  

  })
})
//将字符串转为对象
function $toObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}