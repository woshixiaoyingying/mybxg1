/**
 * Created by Administrator on 2017/8/31.
 */

define(['jquery','template','util','validate','form','datepicker','language'],function($,template,util){
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


    //定义一个表单提交的方法
    function submitForm(url) {
        $('#formId').validate({//form表单验证插件
            sendForm: false,//阻止表单提交
            valid: function () {//所有验证都通过时，触发的回调函数
                console.log('验证都通过');
                //jQuery.form提交插件
                $(this).ajaxSubmit({//默认将表单的全部数据都提交过去，PS：data:{这里可以添加除表单内的额外参数}
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
            invalid:function(){//所有验证都不通过时，触发的回调函数
                console.log('验证都不通过');
            },
            description : {//验证描述
              tc_name : {
                  required : '用户名不能为空',//验证不通过时描述
                  valid : '用户名可以使用'//验证通过描述
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



});


