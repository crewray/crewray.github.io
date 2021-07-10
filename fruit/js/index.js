var list=[
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 102119240,
        "masterName": "【山东】烟台华山梨 6枚装（果径90mm/枚）",
        "slaveName": "生态基地采摘 饱满圆润脆甜 肉厚润肺生津",
        "inventory": 9917,
        "maxPrice": 3780,
        "minPrice": 3780,
        "imgUrl": "https://mall.s.maizuo.com/50f3d83452390435aed5d7223812cc08.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 88234039,
        "masterName": "【福建】平和红心蜜柚 4枚礼盒装（2-2.3斤/枚）",
        "slaveName": "生态种植现摘 果肉艳红饱满 脆甜鲜嫩可口",
        "inventory": 7735,
        "maxPrice": 3990,
        "minPrice": 3990,
        "imgUrl": "https://mall.s.maizuo.com/cc9a81c997e47a858b5d3f30f401289f.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 101536487,
        "masterName": "【山西】甜脆柿子 12个装（果径70mm+/枚）",
        "slaveName": "果园生态种植 皮薄香甜爽口 富含天然维C",
        "inventory": 9147,
        "maxPrice": 2480,
        "minPrice": 2480,
        "imgUrl": "https://mall.s.maizuo.com/9085c7f2b5efb1a4abf3f3a962dcb088.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 101472086,
        "masterName": "【湖南】洞口雪峰蜜桔 5斤装（55-70mm果径/枚）",
        "slaveName": "源头新鲜采摘 饱满圆润细腻 酸甜脆嫩爆汁",
        "inventory": 9760,
        "maxPrice": 3580,
        "minPrice": 3580,
        "imgUrl": "https://mall.s.maizuo.com/2b6281c70abc9b6237dcce883357f6f1.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 101463339,
        "masterName": "【河南】红富士苹果 9个装（果径70mm+/枚）",
        "slaveName": "果型饱满红润 肉厚细嫩脆甜 多种维生素",
        "inventory": 9883,
        "maxPrice": 3180,
        "minPrice": 3180,
        "imgUrl": "https://mall.s.maizuo.com/50cc3307edcadd92367c2885fb246d22.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 99114865,
        "masterName": "【福建】白心蜜柚 2枚装 4.5斤（单枚1.8斤-2.3斤）",
        "slaveName": "闻名“中国蜜柚之乡” 皮薄肉厚饱满 晶莹甜润多汁",
        "inventory": 9796,
        "maxPrice": 2180,
        "minPrice": 2180,
        "imgUrl": "https://mall.s.maizuo.com/922ea3b066f3a60c474c5a15acb6704c.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 97543441,
        "masterName": "【四川】蒲江黄心猕猴桃 10枚装（单果130g+）",
        "slaveName": "基地果园直供 鲜嫩果肉饱满 清香水润爽口",
        "inventory": 9112,
        "maxPrice": 2880,
        "minPrice": 2880,
        "imgUrl": "https://mall.s.maizuo.com/d1ae45a5edb39440adfbc58e7838d8fd.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 97302688,
        "masterName": "【甘肃】花牛苹果 12个装（果径70mm+/枚）",
        "slaveName": "基地果园直供 鲜艳红润 松脆爽口 甜蜜多汁",
        "inventory": 8914,
        "maxPrice": 3200,
        "minPrice": 3200,
        "imgUrl": "https://mall.s.maizuo.com/d2c894511819ec6b62679ac73ba6272f.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 97511256,
        "masterName": "【福建】三红蜜柚 2枚装约5斤（单枚2.2斤-2.8斤）",
        "slaveName": "生态果园种植 果肉艳红饱满 脆甜鲜嫩可口",
        "inventory": 9111,
        "maxPrice": 3380,
        "minPrice": 3380,
        "imgUrl": "https://mall.s.maizuo.com/aeb43d54dbcbd5f1e67b6c38120f8e2d.png?x-oss-process=image/resize,w_180"
    },
    {
        "categoryName": "时令鲜果",
        "categoryId": 145,
        "productId": 87015362,
        "masterName": "【云南】蒙自甜石榴（单果200g+）",
        "slaveName": "生态果园采摘 颗粒饱满水润 清甜沁心水分足",
        "inventory": 99360,
        "maxPrice": 4690,
        "minPrice": 3190,
        "imgUrl": "https://mall.s.maizuo.com/5e34c24dc5a15258413e4dc3c15100b8.png?x-oss-process=image/resize,w_180"
    }
]

str=''

for(i of list){
    str+=`<li class="item flex fdc">
                <img src="${i.imgUrl}" alt="">
                <div class="desc flex fdc  mt-10">
                    <p class="f14 mt-5">${i.masterName}</p>
                    <p class="f12 mt-5">${i.slaveName}</p>
                    <p class="flex jc-sb mt-5">
                        <span class="price f16"><i class="iconfont icon-fl-renminbi"></i>${i.minPrice/100}</span>
                        <span class="f999">
                            <span class="f10">销量:</span>
                            <span class="f14">${i.inventory}</span>
                        </span>
                    </p>
                </div>
            </li>`
}

document.getElementById('list').innerHTML=str