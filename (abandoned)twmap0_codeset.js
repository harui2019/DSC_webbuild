$(function () {
    var data = {
    }

    var plot = {
    }

    // Mapael initialisation
    $(".twmap").mapael({
        map: {
            name: "demo1_tw_mapeal",
            defaultArea: {
                attrs: {
                    fill: "#7c7c7c",
                    stroke: "#fff", "stroke-width": 1.0,
                    cursor: "pointer"
                },
                attrsHover: {
                    fill: "#B7B7B7",
                    stroke: "#fff", "stroke-width": 2.0
                },
                eventHandlers: {
                    click: function (e, id) {
                        //when you click, do following setting
                        $(".twmap").trigger('zoom', {
                            area: id,
                            areaMargin: 20
                        });
                    }
                }
            },
            zoom: {
                enabled: true,
                step: 0.25,
                maxLevel: 20
            }
        },
        legend: {

        },
        areas: {
            "TWN1156": {
"value":"Kaohsiung City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>高雄市</span>"
}
},
"TWN1158": {
"value":"Pingtung",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>屏東縣</span>"
}
},
"TWN1160": {
"value":"Tainan City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>台南市</span>"
}
},
"TWN1161": {
"value":"Hsinchu City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>新竹市</span>"
}
},
"TWN1162": {
"value":"Hsinchu",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>新竹縣</span>"
}
},
"TWN1163": {
"value":"Yilan",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>宜蘭縣</span>"
}
},
"TWN1164": {
"value":"Keelung City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>基隆市</span>"
}
},
"TWN1165": {
"value":"Miaoli",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>苗栗國</span>"
}
},
"TWN1166": {
"value":"Taipei City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>台北市</span>"
}
},
"TWN1167": {
"value":"New Taipei City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>新北市</span>"
}
},
"TWN1168": {
"value":"Taoyuan",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>桃園市</span>"
}
},
"TWN1169": {
"value":"Changhua",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>彰化縣</span>"
}
},
"TWN1170": {
"value":"Chiayi",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>嘉義縣</span>"
}
},
"TWN1171": {
"value":"Chiayi City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>嘉義市</span>"
}
},
"TWN1172": {
"value":"Hualien",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>花蓮國</span>"
}
},
"TWN1173": {
"value":"Nantou",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>南投縣</span><br>不口交</br>"
}
},
"TWN1174": {
"value":"Taichung City",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>台中市</span>"
}
},
"TWN1176": {
"value":"Yunlin",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>雲林縣</span>"
}
},
"TWN1177": {
"value":"Taitung",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>台東縣</span>"
}
},
"TWN3414": {
"value":"Penghu",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>澎湖縣</span>"
}
},
"TWN3415": {
"value":"Kinmen",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>金門縣</span>"
}
},
"TWN5128": {
"value":"Lienchiang",
"href":"#",
"tooltip":{
"content": 
    "<span style=\font-weight:bold\>連江縣</span>"
}
}

        }
    });
})
