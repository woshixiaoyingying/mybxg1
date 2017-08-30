/**
 * Created by Administrator on 2017/8/30.
 */

require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery : 'jquery/jquery.min',
        cookie : 'jquery-cookie/jquery.cookie',
        template : 'artTemplate/template-web',
        bootstrap : 'bootstrap/js/bootstrap.min',
        common: '../js/common',
        echarts:'echarts/echarts.min',
        login:'../js/login'
    }
    //shim : { // 把非标准模块转化为标准模块
    //    bootstrap : {
    //        deps : ['jquery']
    //    }
    //}
})
