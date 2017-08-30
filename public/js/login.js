/**
 * Created by Administrator on 2017/8/30.
 */

define(['jquery'],function($){
    $('#loginBtn').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data: $('#lognForm').serialize(),
            dataType:'json',
            success: function (data) {
                if(data.code==200){
                    location.href='/main/index';
                }else {
                    alert('用户名或密码错误')
                }
            }
        })
        return false;
    })
})



