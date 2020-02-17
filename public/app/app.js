$(document).ready(function()  
{
    initButtons();
})

function initButtons()
{
    $(".get-started").click(function()
    {
        $("#home div").removeClass("active");
        $("#addNav div").addClass("active");

        $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
        $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());

        mainNavButtonClick();
        subNavButtonClick();

        initButtons();
    });
    
    $("#home").click(function() 
    {
        $("#addNav div").removeClass("active");
        $("#home div").addClass("active");

        $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
        $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());

        initButtons();
    });
}