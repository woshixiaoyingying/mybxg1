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
        //日期插件
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        //图表插件
        echarts:'echarts/echarts.min',
        //表单验证插件
        validate:'validate/jquery-validate.min',
        //进度条插件
        nprogress:'nprogress/nprogress',
        //基于jquery的form提交插件
        form:'jquery-form/jquery.form',
        //基于bootstrap的日期选择插件
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        //省市县联动插件
        region:'jquery-region/jquery.region',
        //富文本插件
        ckeditor:'ckeditor/ckeditor',
        //文件上传插件
        uploadify:'uploadify/jquery.uploadify.min',
        index:'../js/index',
        common: '../js/common',
        login:'../js/login',
        util:'../js/util',
        teacheradd: '../js/teacher-add',
        teacherlist: '../js/teacher-list',
        settings:'../js/settings'
    },
    shim : { // 把非标准模块转化为标准模块
        bootstrap : {
            deps : ['jquery']//bootstrap基于jquery
        },
        validate : {
            deps : ['jquery']//表单验证基于jquery
        },
        language:{
            deps:['jquery','datepicker']//日期语言插件，基于jquery和datepicker
        },
        ckeditor:{
            exports:'CKEDITOR'
        },
        uploadify:{
            deps:['jquery']
        }
    }
})
