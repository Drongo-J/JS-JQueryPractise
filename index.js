// $(document).ready(function () {

//     $("#myarea").val($("section").html())

//     $("#btn1").click(function () {
//         // alert($("#test").text());
//         // alert($("#test").html());
//         // $("#test").text("Salam Dunya");
//         // alert($("#name").val());
//         $("section").html($("#myarea").val());
//         $("#myarea").val($("section").html());
//     });


// }); 

// $(document).ready(function () {
//     $("#btn1").click(function () {
//         // $("#list").prepend(
//         //     `<li>${$("#add").val()}</li>`
//         // );
//         // $("#list").prepend(
//         //     `<li>${$("#add").val()}</li>`
//         // );
//         // $("#list").before(`<h1>${$("#add").val()}</h1>`);
//         // $("#list").after(`<h1>${$("#add").val()}</h1>`);
//         $("p").attr("style",
//             `color:yellow;
//         border:2px solid springgreen`
//         );
//     });
// });

// $(document).ready(function () {
    // let g_element = "";
    // var global_id = 1;

    // $("#create").click(function(){
    //     let tag = $("#tag").val();
    //     g_element.append(`<${tag} id='${global_id}'>
    //     </${tag}>`);

    //     $(`#${global_id}`).text($("#content").val());
    //     $(`#${global_id}`).attr($("#property").val(), $("#value").val());
    //     ++global_id;
    // });

    // $("#site").click(function(event){
    //     g_element = $(event.target);
    // });
// });

$(document).ready(function () {
    $("#btn1").click(function(){
        // $("body").addClass("day");
        
        $("body").toggleClass("night");
    });


});
