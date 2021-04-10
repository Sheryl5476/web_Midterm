window.onload = function(){
    //document.write("Hello JavaScript");
};

/*$(function(){
    $("input").on("click",function(){
        //alert("自己想");
        $("h1").text($("li:first").text());
    });
});

$(function(){
    $("input").on("click",function(){
        //alert("自己想");
        $("h1").text($("li:last").text());
    });
});

$(function(){
    $("input").on("click",function(){
        //alert("自己想");
        $("h1").text($("li").eq(2).text());
    });
});*/

$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        if(randomChildNumber == 0)
            $("img").attr("src","https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg");
        else if(randomChildNumber==1)
            $("img").attr("src","https://codertw.com/wp-content/themes/lionmedia/img/img_no.gif");
        else if(randomChildNumber==2)
            $("img").attr("src","https://1.bp.blogspot.com/-jSNVfNl41LM/Wc4Gxe0In1I/AAAAAAAAE1I/LgNIiGlzloQM6jLNI1k45ySRv_DKPkB5wCLcBGAs/s640/blogger.jpg");
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});

