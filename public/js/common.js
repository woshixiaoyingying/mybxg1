define(['jquery'],function($){

	//NProgress.start();
	//NProgress.done();

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

})


