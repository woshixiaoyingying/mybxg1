/**
 * Created by Administrator on 2017/9/3.
 */
define(['jquery','template','util','ckeditor','datepicker','language','region','uploadify','validate','form'],function($,template,util,CKEDITOR){
    util.setMenu('/main/index');
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            //console.log(data);
            //获取数据，渲染页面
            var html=template('settingTpl',data.result);
            $('#settingInfo').html(html);

            //头像上传
            $('#upfile').uploadify({
                width:120,
                height:120,
                buttonText:'',
                itemTemplate:'<span></span>',
                fileObjName:'tc_avatar',
                swf:'/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/avatar',
                onUploadSuccess:function(f,data){
                    console.log(data);
                    var data = JSON.parse(data.trim());
                    // 修改图片的URL地址
                    $('.preview img').attr('src',data.result.path);
                }
            })

            //省市县三级联动
            $('#pcd').region({
                url:'/public/assets/jquery-region/region.json'
            })
            //富文本插件使用
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
                ]
            })

            //表单提交插件
            $('#settingForm').validate({
                sendForm: false,
                valid: function () {
                    // 同步富文本信息到textarea中
                    for (var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                    //获取tc_hometown的值
                    var p = $('#p').find('option:selected').text();
                    var c = $('#c').find('option:selected').text();
                    var d = $('#d').find('option:selected').text();
                    var hometown = p + '|' + c + '|' + d ;
                    console.log(hometown);
                    //通过form插件提交表单
                    $(this).ajaxSubmit({
                        type: 'post',
                        url: '/api/teacher/modify',
                        data: {tc_hometown: hometown},
                        dataType: 'json',
                        success: function (data) {
                            console.log(data);
                            if (data.code == 200) {
                                location.reload();//重新加载当前页面
                            }
                        }
                    })
                }
            })


        }
    })









})



