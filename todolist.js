$(document).ready(function(){
    $("#to").change(function(){
             var into = $(this).val();
             $("ul").append('<li>'+ into +                ' <i class ="fas fa-check"></i>                <i class="fas fa-trash"></i> </li>');
             $(this).val(" ");


         });

     
     $("ul").on("click",".fa-trash",function(){
               $(this).parent("li").fadeOut(200);
     });
     $("ul").on("click",".fa-check",function(){
               $(this).parent("li").css({"backgroundColor":"green","textDecoration":"line-through"});
     });
   });
