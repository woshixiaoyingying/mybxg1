define(['jquery','template','cookie'],function($,template){

	//NProgress.start();
	//NProgress.done();

	// 控制左侧导航菜单折叠展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//退出
	$('#lognout').click(function () {
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success: function (data) {
				if(data.code==200){
					location.href='/main/login';
				}
			}
		})
	})


	//验证登录时是否携带cookie用户名
	var sessionId = $.cookie('PHPSESSID');
	if (!sessionId && location.pathname != '/main/login') {
		location.href = '/main/login';
	}

	//将用户信息渲染到页面
	var cookie= $.cookie('loginInfo');
	var loginInfo=cookie?JSON.parse(cookie):{};
	var tpl='<div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> <h4>{{tc_name}}</h4>'
	var html=template.render(tpl,loginInfo);
	$('#profileId').html(html);



})


