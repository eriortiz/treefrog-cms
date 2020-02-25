$(document).ready(() => 
{
    initButtons();
})

function initButtons()
{
    $(".get-started").click(() => 
    {
        $("#home div").removeClass("active");
        $("#addNav div").addClass("active");

        $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
        $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());

        initButtons();
    });

    $("#home").click(() => 
    {
        $("#addNav div").removeClass("active");
        $("#home div").addClass("active");

        $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
        $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());

        initButtons();
    });

    $(".main-nav").click(()=>
    {
        $(".modal").css("display","block");
        $(".alert-box").html(TREEFROG_SERVICE.getCreateMainNavContent());

        createMainNavContent();
        

        initButtons();

        
    });

    $(".sub-nav").click(()=>
    {
        $(".modal").css("display","block");
        $(".alert-box").html(TREEFROG_SERVICE.getCreateSubNavContent());

        createSubNavContent();

        initButtons();
    });
}

function createMainNavContent() {

    $(".create-main-nav").click(() =>
{
    let checker = $("#checker").val();
    if( checker == "")
    {
        alert("Need Navigation Name")
        
    }
    else {
        $(".modal").css("display","none"); 

        $(".text-wrapper").html(TREEFROG_SERVICE.getCreateMainNavEditor());
        $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavEditorButton());
        startQuill();
        
    }

});
}

function createSubNavContent() {

    $(".create-sub-nav").click(() =>
{
    let checker = $("#checker").val();
    if( checker == "")
    {
        alert("Need Navigation Name")
        
    }
    else {
        $(".modal").css("display","none"); 

        $(".text-wrapper").html(TREEFROG_SERVICE.getCreateSubNavEditor());
        $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavEditorButton());
        startQuill();
        
    }

});
}

function startQuill()
{
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      
        [{ 'indent': '-1'}, { 'indent': '+1' }],          
        [{ 'direction': 'rtl' }],                         
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         
      ];

      var quill = new Quill('#editor', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });
}