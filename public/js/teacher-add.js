/**
 * Created by Administrator on 2017/8/31.
 */

define(['jquery','template','util','validate','form'],function($,template,util){
    util.setMenu('/teacher/list');

    var tcId=util.qs('tc_id');
    //如果有tcId，就是讲师编辑
    if(tcId){
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
                console.log(data);
                //手动添加operate属性，设置讲师编辑/添加状态；
                data.result.operate='讲师编辑';
                var html=template('teacher-tpl',data.result);
                $('#teacher-info').html(html);

                submitForm('/api/teacher/update')
            }
        })
    }//如果没有tcId，就是讲师添加
    else {
        //手动添加operate和tc_gender默认属性
        var html=template('teacher-tpl',{operate : '讲师添加',tc_gender : 1});
        $('#teacher-info').html(html);
        submitForm('/api/teacher/add')
    }


    function submitForm(url) {
        $('#formId').validate({
            sendForm: false,
            valid: function () {
                console.log(11);
                //jQuery.form提交插件
                $(this).ajaxSubmit({
                    type: 'post',
                    url: url,
                    success: function (data) {
                        console.log(data);
                        if (data.code == 200) {
                            location.href = '/teacher/list';
                        }
                    }
                })
            },
            description : {
              tc_name : {
                  required : '用户名不能为空',
                  valid : '用户名可以使用'
              },
              tc_pass : {
                  required : '密码不能为空',
                  pattern : '必须是6位数字',
                  valid : '密码有效'
              },
              tc_join_date : {
                  required : '入职日期不能为空',
                  valid : '日期有效'
              }
            }
        })
    }


    //function submitFrom(url){
    //    $('#formBtn').click(function(){
    //        console.log(11);
    //        $.ajax({
    //            type:'post',
    //            url:url,
    //            data:$('#formId').serialize(),
    //            dataType:'json',
    //            success:function(data){
    //                console.log(data);
    //                if(data.code == 200) {
    //                    location.href = '/teacher/list';
    //                }
    //            },
                //error:function(data){
                //    console.log(data);
                //}
//            })
//        })
//    }
//
});


