function initButtons () {
    $('.get-started').click(function (e) {
        $('#home div').removeClass('active');
        $('#addNav div').addClass('active');

        $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getGetStartedContent());
    });
}

$(document).ready(function() {
    initButtons();
});