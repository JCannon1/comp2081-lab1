$(document).ready(function() {

    var toggleButton = $( "<p><button>Show/Hide Contents</button></p>");

    toggleButton.appendTo( "main p:first-child" );

    $("button").click(function(event) {

    $("main > section:nth-of-type(1)").toggleClass("visuallyhidden");
    })
});