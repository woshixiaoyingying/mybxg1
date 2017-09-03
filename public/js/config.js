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
        echarts:'echarts/echarts.min',
        validate:'validate/jquery-validate.min',
        form:'jquery-form/jquery.form',
        common: '../js/common',
        login:'../js/login',
        util:'../js/util',
        teacheradd: '../js/teacher-add',
        teacherlist: '../js/teacher-list'
    },
    shim : { // 把非标准模块转化为标准模块
        bootstrap : {
            deps : ['jquery']
        },
        validate : {
            deps : ['jquery']
        }
    }
})
