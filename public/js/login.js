/**
 * Created by Administrator on 2017/8/30.
 */

define(['jquery','cookie'],function($){
    $('#loginBtn').click(function () {
        //console.log(document.cookie);

        $.ajax({
            type:'post',
            url:'/api/login',
            data: $('#lognForm').serialize(),
            dataType:'json',
            success: function (data) {
                if(data.code==200){
                    $.cookie('loginInfo',JSON.stringify(data.result),{path : '/'});
                    location.href='/main/index';
                }else {
                    alert('用户名或密码错误')
                }
            }
        })
        return false;
    })
})



