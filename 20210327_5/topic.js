var topic = [
    "尚未開學","國定假日","環境準備","隨機性","重複性","條件判斷"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}


$(function(){
    $("#submit").on("click",function(){
        var date = new Date(document.getElementById("myDate").value);
        setMonthAndDay(date.getMonth(),date.getDate());

    });
});




