function set_body_height() { // set body height = window height
        $('body').height($(window).height());
}

function TriggerExcavator() {
        console.log($("#excavator").attr("src"));
        if ($("#excavator").attr("src") == "img/excavator_up.png"){
            // document.getElementById("excavator").src = "./img/excavator_down.png";
            $("#excavator").attr("src", "img/excavator_down.png");
        } else{
            // document.getElementById("excavator").src = "./img/excavator_up.png";
            $("#excavator").attr("src", "img/excavator_up.png");
        }
    }
 
$(document).ready(function() {
     $(window).bind('resize', set_body_height);
        set_body_height();

    let clicktimes = 0;
    
    $("#ground").click(function(){
        // console.log(clicktimes);
        if (clicktimes<=5){
            if (clicktimes%2==1){
                $("#ground").attr("src", "img/ground"+((clicktimes+1)/2)+".png");
            }
            // console.log($("#ground").attr("src"));
            TriggerExcavator();
            clicktimes++;
        }
        else{
            //簡易移除無動畫版
           $("#ground").css('display', 'none');
           $("#excavator").css('display', 'none');
           // $(".imgbox").remove();
           $(".container").attr("z-index", 2); 
        }
    });
});


// //動畫版
// let excavatorUp;
// let excavatorDown;
// let exImg = $("#excavator");

// function preload() {
//     // excavatorUp = loadImage('img/excavator_up.png');
//     // excavatorDown = loadImage('img/excavator_down.png');
// }

// let windowWidth = $(document).width();
// let windowHeight = $(document).height();
// let bgColor='#888';

// function setup() {
//     cnv = createCanvas(windowWidth, windowHeight);
//    // background(bgColor);
//     cnv.style('z-index', 1);
//     cnv.mouseClicked(dig);
//     // image(excavatorUp, windowWidth * 0.3, windowHeight * 0.5);
//     noLoop();
// }

// function draw() {
// }

// let holeW = 50; //width
// let holeH = 30; //height
// let holeC = '#FFFFFF'
// let holeX = windowWidth * 0.5;
// let holeY = windowHeight * 0.5;
// let digTimes = 1;

// function TriggerExcavator() {
//     console.log($("#excavator").attr("src"));
//     if ($("#excavator").attr("src") == "img/excavator_up.png"){
//         // document.getElementById("excavator").src = "./img/excavator_down.png";
//         $("#excavator").attr("src", "img/excavator_down.png");
//     } else{
//         // document.getElementById("excavator").src = "./img/excavator_up.png";
//         $("#excavator").attr("src", "img/excavator_up.png");
//     }
// }

// function dig() {
//     if (digTimes < 3) {
//     	clear();
// 	    background(bgColor);
//         digTimes += 0.5;
//         stroke(holeC);
//         fill(holeC)
//         ellipse(holeX, holeY, holeW * digTimes, holeH * digTimes);
//        // flake();
//         TriggerExcavator();
//     }else{
//         cnv.clear();
//         $("#excavator").remove();
//     }
// }

// let dustR = 5; //塵土的半徑
// let dustC = '#642100';
// function flake() { //飛揚ㄉ塵土
// 	stroke(dustC);
// 	fill(dustC);
//     for (let i = 0; i < 15; i++) {
//         x = windowWidth*0.4 + Math.random() * 1000 % 200;
//         y = windowHeight*0.2 + Math.random() * 1000 % 200;

//         ellipse(x, y, dustR); // 畫出圓形
//     }
// }

// //called once every time the browser window is resized
// // function windowResized() {
// //     resizeCanvas(windowWidth, windowHeight);
// // }