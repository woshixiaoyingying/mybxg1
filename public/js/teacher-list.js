/**
 * Created by Administrator on 2017/8/31.
 */

define(['jquery','util','template','bootstrap'],function($,util,template){
    util.setMenu(location.pathname);
    console.log(location.pathname);
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            //得到数据，渲染教师列表
           var html=template('tc-info-tpl',data);
            $('#teacher-Info').html(html);

            //点击查看，弹出模态框
            $('.preveiw').click(function(){
                var tcId=$(this).closest('td').attr('data-tcId');
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function(data){
                        //console.log(data.result);
                        var html = template('modal-tpl', data.result);
                        $('#modalInfo').html(html);
                        $('#teacherModal').modal();
                    }
                })
            })

            //点击按钮，启用或注销讲师
            $('.eod').click(function(){
                var tcId=$(this).closest('td').attr('data-tcId');
                var tcStatus=$(this).closest('td').attr('data-status');
                var $that=$(this);
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{
                        tc_id:tcId,
                        tc_status:tcStatus
                    },
                    dataType:'json',
                    success:function(data){
                        //console.log(data.result.tc_status);
                        $that.closest('td').attr('data-status',data.result.tc_status);
                        if(data.result.tc_status==0){
                            $that.html('注 销');
                        }else {
                            $that.html('启 用');
                        }
                    }
                })
            })






        }

    });






});

