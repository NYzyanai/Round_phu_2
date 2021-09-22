
var src_ceiling_np = [];

src_ceiling_np = [
    'src/stage2_obj/ceiling0.png'
]


var src_woman_np = [];

src_woman_np = [
    'src/stage2_obj/woman0.png',
    'src/stage2_obj/woman1.png'
]


var src_man_np = [];

src_man_np = [
    'src/stage2_obj/man0.png',
    'src/stage2_obj/man1.png',
    'src/stage2_obj/man2.png'
]


var stage_2_obj_load_count=0;

var src_ceiling_ar=[];
for (var num = 0; num < src_ceiling_np.length; num++) {
    src_ceiling_ar[num] = new Image();
    src_ceiling_ar[num].src = src_ceiling_np[num];

    src_ceiling_ar[num].onload = function () {
        stage_2_obj_load_count++
    }

}


var src_woman_ar=[];
for (var num = 0; num < src_woman_np.length; num++) {
    src_woman_ar[num] = new Image();
    src_woman_ar[num].src = src_woman_np[num];

    src_woman_ar[num].onload = function () {
        stage_2_obj_load_count++
    }

}


var src_man_ar=[];
for (var num = 0; num < src_man_np.length; num++) {
    src_man_ar[num] = new Image();
    src_man_ar[num].src = src_man_np[num];

    src_man_ar[num].onload = function () {
        stage_2_obj_load_count++
    }

}