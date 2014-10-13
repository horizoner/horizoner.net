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

        $("homeAboutus").click(function{
            var 
        })
    })()
})