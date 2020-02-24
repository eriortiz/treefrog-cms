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

        initButtons();

        createMainNavContent();
    });

    $(".sub-nav").click(()=>
    {
        $(".modal").css("display","block");
        $(".alert-box").html(TREEFROG_SERVICE.getCreateSubNavContent());

        initButtons();
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


      function createMainNavContent() {
        $(".modal").css("display","none"); 

     $(".text-wrapper").html(TREEFROG_SERVICE.getCreateMainNavContent());
     $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavEditorButton());

    }

      var quill = new Quill('#editor', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });
}