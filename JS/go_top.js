
    // 滾動滾輪達到是否顯示
    $(window).scroll(function () {
        if ($(this).scrollTop() >10) {
            $(".go_top").css({ "display": "inline-block", "cursor": "pointer" });

        }
        else {
            $(".go_top").css("display", "none");
        }
    });
    // 回到頂部
    $(".go_top").click(function () {
        $("html,body").scrollTop(0);
    });



// width:576px以下的導覽列觸動
$(function () {
    let bar = 0; //計算導覽列是否開啟
    let barcontent = ".headerdiv .headercontent"; //導覽列的div
    let d_block = "headercontent_smB"; //display:block
    let d_none = "headercontent_smN";   //display:none
    $(".headerbar").click(function () {        
        if (bar == 0) {
            bar++;
            $(barcontent).addClass(d_block);
            $(barcontent).removeClass(d_none);
        } else {
            bar = 0;
            $(barcontent).removeClass(d_block);
            $(barcontent).addClass(d_none);
        }
    });
})
