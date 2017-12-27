define("app", ["jquery"], function($, bootstrap, cssua){

    var app = {};

    /**
     * 公共action
     * @type {{app/action/base: Function}}
     * @private
     */
    var _actions = {
        "app/action/base" : function(ele, options) {

        }
    };
    /**
     * 调用action
     */
    app.render_action = function(){
        //parse action
        $("*[data-action]").each(function(index, ele){
            var $ele = $(ele),
                alias =  "app/action" + "/" + $ele.data("action"),
                options = $ele.data("options");

            if (_actions[alias]) {
                _actions[alias](ele, options)
            } else {
                if ($ele.data("inited")) {
                    return;
                }

                require([alias], function(action){
                    var a = new action(ele);
                    a.doAction(options);
                    $ele.data("inited", 1);
                });
            }
        });
    }
    /**
     * 调用Page script
     * @type {boolean}
     */
    app.page_inited = false;
    app.render_page = function() {
        if (app.page_inited)
            return;
        //parse page
        $("*[data-page]").each(function(index, ele){
            var $ele = $(ele),
                alias =  "page" + "/" + $ele.data("page");
                // console.log(alias);
            require([alias]);
        });

        app.page_inited = true;
    }

    app.render = function() {
        app.render_action();
        app.render_page();

    }

    app.render();

    return app;
});