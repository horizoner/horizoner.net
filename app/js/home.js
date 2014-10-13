define(function (require, exports, module) {
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
            var a = $.Event("keydown");
            a.which = 40;
            $(".page2").trigger(a);
        })

        $(".homeOurwork").click(function(){
            var c = $.Event("keydown");
            c.which = 40;
            $(".main").trigger(c);
        })

        $(".homeContact").click(function(){
            var b = $.Event("keydown");
            b.which = 38;
            $(".contactPage").trigger(b);
        })
    })()
})