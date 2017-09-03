/**
 * Created by Administrator on 2017/8/31.
 */
define(['jquery'],function($){
    return {
        setMenu: function (path) {
            $('.nav a[href="' + path + '"]').addClass('active')
        },
        qs: function (key) {//?uname=lisi&age=12
            var param = location.search.substring(1);
            var result = null;
            if (param) {
                var kvs = param.split("&");
                $.each(kvs, function (i, item) {
                    var kv = item.split('=');
                    if (key == kv[0]) {
                        result = kv[1];
                        return false;
                    }
                })
            }
            return result;
        }
    }
})

