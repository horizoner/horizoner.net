define(function (require, exports, module) {
    var action = require('action');

    (function(){
        $(".homeNav .homeAboutus,.homeContact").mouseenter(function()
        {
            $(this).stop().animate({ top: '195px' }, 100);
        }).mouseleave(function()
        {
            $(this).stop().animate({ top: '165px' }, 100);
        });

        $(".homeNav .homeOurwork").mouseenter(function()
        {
            $(this).stop().animate({ top: '178px' }, 100);
        }).mouseleave(function()
        {
            $(this).stop().animate({ top: '148px' }, 100);
        });

        $(".homeAboutus").click(function(){
            action.clickScroll(40);
        })

        $(".homeOurwork").click(function(){
            action.clickScroll(40);
            action.clickScroll(40);
        })

        $(".homeContact").click(function(){
            action.clickScroll(38);
        })
    })()
})