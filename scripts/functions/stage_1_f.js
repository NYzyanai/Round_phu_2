
var src_sky_np = [];

src_sky_np = [
    'src/fullscreen/sky1.png'
]

var src_mount_np = [];

src_mount_np = [
    'src/stage1_obj/mount_2.png',
]

var src_tree_np = [
    'src/stage1_obj/tree_0.png',
    'src/stage1_obj/tree_1.png',
    'src/stage1_obj/tree_2.png',

    'src/stage1_obj/tree_3.png',
    'src/stage1_obj/tree_4.png',
    'src/stage1_obj/tree_5.png',
    'src/stage1_obj/tree_6.png'
]

var src_grass_np = [
    'src/stage1_obj/low_grass_1.png',
    'src/stage1_obj/low_grass_2.png',
    'src/stage1_obj/low_grass_3.png',
    'src/stage1_obj/middle_grass_1.png',
]

var src_house_np = [
    'src/stage1_obj/house_of_phu2.png'
]


var src_forest_np = [
    'src/stage1_obj/forest_1.png'
]

var src_sky_np = [
    'src/stage1_obj/long_sky_morning2.png',
]

var src_cloud_np = [
    'src/stage1_obj/mini_cloud_5.png'
]

var src_human_np = [
    'src/stage1_obj/human_1.png',
    'src/stage1_obj/human_2.png',
    'src/stage1_obj/human_3.png',
    'src/stage1_obj/human_4.png',
    'src/stage1_obj/human_5.png',
    'src/stage1_obj/human_6.png',
    'src/stage1_obj/human_7.png'

]

var src_ghost_np = [];
src_ghost_np = [
    'src/ghost/g1.png',
    'src/ghost/g2.png',
    'src/ghost/g3.png',
    'src/ghost/g4.png',
    'src/ghost/g5.png',
    'src/ghost/g6.png',
    'src/ghost/g7.png',
    'src/ghost/g8.png',
    'src/ghost/g9.png',
    'src/ghost/g10.png',
    'src/ghost/g11.png',
    'src/ghost/g12.png',
    'src/ghost/g13.png',
    'src/ghost/g14.png',
    'src/ghost/g15.png',
    'src/ghost/g16.png',
    'src/ghost/g17.png',
    'src/ghost/g18.png',
    'src/ghost/g19.png',
    'src/ghost/g20.png',
    'src/ghost/g21.png',
    'src/ghost/g22.png',
    'src/ghost/g23.png',
    'src/ghost/g24.png',
    'src/ghost/g25.png',
    'src/ghost/g26.png',
    'src/ghost/g27.png',
    'src/ghost/g28.png',
    'src/ghost/g29.png',
    'src/ghost/g30.png',
    'src/ghost/g31.png',
    'src/ghost/g32.png',
    'src/ghost/g33.png',
    'src/ghost/g34.png',
    'src/ghost/g35.png',
    'src/ghost/g36.png',
    'src/ghost/g37.png'
]

var src_fish_np = [
    'src/stage1_obj/fish_1.png',
    'src/stage1_obj/fish_2.png'
]

var src_yue_np = [];

src_yue_np = [
    'src/character/stand_yue.png',
    'src/character/walk_yue_1.png',
    'src/character/walk_yue_2.png',
    'src/character/walk_yue_3.png',
    'src/character/walk_yue_4.png',
    'src/character/walk_yue_5.png'
]

var phu_height
var phu_width
phu_height = 77;
phu_width = 85;

var src_phu_np = [];

src_phu_np = [
    'src/character/s_p.png',
    'src/character/w_p_1.png',
    'src/character/w_p_2.png',
    'src/character/w_p_3.png',
    'src/character/w_p_4.png',
    'src/character/w_p_5.png',
]

var src_phu_lay_np = [];
src_phu_lay_np = [
    'src/character/l_p_1.png',
    'src/character/l_p_2.png',
    'src/character/l_p_3.png',
    'src/character/l_p_4.png',
    'src/character/l_p_5.png'
]

var src_ghost_talking_np = [];

src_ghost_talking_np = [
    'src/ghost/gt1.png',
    'src/ghost/gt2.png',
    'src/ghost/gt3.png',
    'src/ghost/gt4.png',
    'src/ghost/gt5.png',
    'src/ghost/gt6.png',
    'src/ghost/gt7.png',
    'src/ghost/gt8.png',
    'src/ghost/gt9.png',
    'src/ghost/gt10.png',
    'src/ghost/gt11.png',
    'src/ghost/gt12.png',
    'src/ghost/gt13.png',
    'src/ghost/gt14.png',
    'src/ghost/gt15.png',
    'src/ghost/gt16.png',
    'src/ghost/gt17.png',
    'src/ghost/gt18.png',
    'src/ghost/gt19.png',
    'src/ghost/gt20.png',
    'src/ghost/gt21.png',
    'src/ghost/gt22.png',
    'src/ghost/gt23.png',
    'src/ghost/gt24.png',
    'src/ghost/gt25.png',
    'src/ghost/gt26.png',
    'src/ghost/gt27.png',
    'src/ghost/gt28.png',
    'src/ghost/gt29.png',
    'src/ghost/gt30.png',
    'src/ghost/gt31.png',
]



var src_sky_ar=[];
for (var num = 0; num < src_sky_np.length; num++) {
    src_sky_ar[num] = new Image();
    src_sky_ar[num].src = src_sky_np[num];

    src_sky_ar[num].onload = function () {
        phu_imgs_load_count++
    }
    console.log("yeah");
}



function phu_imgs_load() {

    if (phu_imgs_load_count >=
        src_sky_np.length +
        src_mount_np.length +
        src_tree_np.length +
        src_grass_np.length +
        src_house_np.length +
        src_forest_np.length +
        src_sky_np.length +
        src_cloud_np.length +
        src_human_np.length +
        src_ghost_np.length +
        src_fish_np.length +
        src_yue_np.length +
        src_phu_np.length +
        src_phu_lay_np.length +
        src_ghost_talking_np.length
    ) {
        phu_imgs_loaded_flag = 1;
    }

    console.log(phu_imgs_loaded_flag);
}






/*
var namepath_array = [];

namepath_array = [
    'a',
    'b',
    'c'
];

load_img(namepath_array);

function load_img(namepath_array) {
    concat_do(namepath_array, makename(namepath_array));
}

function makename(namepath_array){
    return namepath_array.concat("_imgarray");
    //出力されるのは「Array ["a", "b", "c", "_imgarray"]」になる
    //ほんとは「namepath_array_imgarray」っていう出力が欲しい
    //配列名を取得する方法ってある？
    //配列名を取得する方法、を調べる方法が分からない
}

function concat_do(namepath_array, namepath_array_imgarray) {

    for (var num = 0; num < namepath_array.length; num++) {
        namepath_array_imgarray[num] = new Image();
    }
}
*/