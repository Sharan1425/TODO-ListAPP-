$(document).ready(function () {
    
    var togval = $(".toggle").is(":checked")
    var taskinval = $("#inputtext");
    var box1 = $('.condiv');
    var box2 = $(".hidiv");
    var closeid = 0
    
    $(".btn-success").click(function () {
        if (taskinval.val() == ''){
            $("#inputtext").css({"placeholder":"Please Enter the task before you add."});
            alert("empty")
        }else{
            closeid += 1
            // alert(taskinval.val())
            var contentdiv = $("<div>",{
                'class' : 'taskcontent',
    
            })
            var contentls = $("<li>",{
                'id': closeid,
                'text': taskinval.val(),
            })
            var contentcross = $("<i>",{
                'class' : 'fa fa-close',
                'id': closeid
            })
    
            contentls.append(contentcross);
            contentdiv.append(contentls);
            box1.append(contentdiv);
            taskinval.val('');
    
            $(".taskcontent li").click(function(){
                $(this).addClass("textstrick")
            });
    
            $(".fa-close").click(function () {
                var cid = '#'+String(this.id)
                var curtask = $(cid).text()
                var hiscontent = $("<div>",{
                    'class' : 'historycontent',
        
                })
                var hiscontentls = $("<li>",{
                    'text': curtask
                })
                
                hiscontent.append(hiscontentls);
                box2.append(hiscontent);
                $(this).parent().remove();
                
            });

        }

     
       
    });   
    // if (togval){
    //     

    // } else {
    //     $("label").hover(function () {
    //         $("#pop-up-DT").show();
    //         }, function () {
    //             $("#pop-up-DT").hide();
    //         }
    //     );

    // }
    $("label").hover(function () {
        if (togval){
            $("label").hover(function () {
                $("#pop-up-BT").show();
                }, function () {
                    $("#pop-up-BT").hide();
                }
            );
        } else {
            $("label").hover(function () {
                $("#pop-up-DT").show();
                }, function () {
                    $("#pop-up-DT").hide();
                }
            );

        }
        
    })
    
    // $("label").hover(function () {
    //     $("#pop-up-DT").show();
    //     }, function () {
    //         $("#pop-up-DT").hide();
    //     }
    // );
    // $("label").click(function(){
    //     $("body").toggleClass("darktheme");
    // })
    $(".toggle").change(function(){
        var value = $(this).is(':checked')
        if(value){
            $("body").addClass("dark")
        } else{
            $("body").removeClass("dark")
        }
    })
    
    $(".btn-danger").click(function () {
        $("#inputtext").val('');
    })

    
   

 
}); 