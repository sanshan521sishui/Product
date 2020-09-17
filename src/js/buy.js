$(function(){
    //减号
    var $minus = $('.minus');
    $minus.each(function(i,value){
        $(value).click(()=>{
            //获取cookie
            var cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            //转对象
            var cookie_obj = $toObj(cookie_str);
            //改变数量
            if(cookie_obj[id].num > 0){
                cookie_obj[id].num --;
            }
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            //修改数量文本框
            $(this).next().val(cookie_obj[id].num);
            //修改合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //加号
    $('.plus').each(function(i,value){
        $(value).click(()=>{
            //获取cookie
            var cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            //转对象
            var cookie_obj = $toObj(cookie_str);
            //数量增加
            cookie_obj[id].num ++;
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            //修改数量文本框
            $(this).prev().val(cookie_obj[id].num);
            //合计
            //修改合计
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //数量框
    $('.choose .txt').each(function(index,value){
            
            //获取cookie
            var cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            //转对象
            var cookie_obj = $toObj(cookie_str);
            //文本框数量
            //非数字   正整数
            var num = $(this).val();
            if(!/^\d+$/.test(num)){
                num = 0;
            }
            cookie_obj[id].num = num;
            
            //存入cookie
            $.cookie('carts',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            $(this).val(cookie_obj[id].num);
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
    })
})
//将字符串转为对象
function $toObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}