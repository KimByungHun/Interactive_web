const $tab = $("#tab");
const $btns = $tab.find("#btns li");
const $boxs = $tab.find(".boxs div");
let isDone = true;
let speed = 500;

let ease = "easeOutBack";

$btns.on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    if(isDone){
    
            let i = $(this).index();
        
            // $btns.removeClass("on");
            // $btns.eq(i).addClass("on");
        
            // $boxs.removeClass("on");
            // $boxs.eq(i).addClass("on");
        
            // let ht = $boxs.eq(i).height();
            // $tab.animate({height : ht , marginTop : -ht/2 }, speed, ease, function(){
            //     isDone = true;
            // });

            // activation(i);

            activation(i, $boxs);
            activation(i, $btns);
            matchHeight(i, $boxs);

            isDone =false;

    }
});

// function activation(index){
//     $btns.removeClass("on");
//     $btns.eq(index).addClass("on");

//     $boxs.removeClass("on");
//     $boxs.eq(index).addClass("on");

//     let ht = $boxs.eq(index).height();
//     $tab.animate({height : ht , marginTop : -ht/2 }, speed, ease, function(){
//         isDone = true;
//     });

// }

function activation(index, item){
    item.removeClass("on");
    item.eq(index).addClass("on");
}

function matchHeight(index, item){
    let ht = item.eq(index).height();
    $tab.animate({height : ht , marginTop : -ht/2 }, speed, ease, function()
        isDone = true;
    });
}