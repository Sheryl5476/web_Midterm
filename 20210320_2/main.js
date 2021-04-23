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
            $("img").attr("src","../ramen.jpg");
        else if(randomChildNumber==1)
            $("img").attr("src","../rice.jpg");
        else if(randomChildNumber==2)
            $("img").attr("src","../dumpling.jpg");
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});

