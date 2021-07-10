var home = {

    flimList: [],
    render: function () {
        str = ''

        for (var i in this.flimList) {
            var item = this.flimList[i]
            if (!item.grade) {
                item.grade = '无'
            }
            str += `<a href="./detail.html?filmId=${item.filmId}" class="item pt-25 pb-10 flex jc-sb">
                    <img src=${item.poster} alt="" class="img ml-10">
                    <div class="t-box flex fg1 fdc jc-sa desc">
                        <p class="text  f18">${item.name}</p>
                        <p class="text f14 f999">观众评分 ${item.grade}</p>
                        <p class="text f14 f999 actors">主演：${item.actorStr}</p>
                        <p class="text f14 f999">${item.nation} | ${item.runtime}分钟</p>
                    </div>
                    <span class="buy flex jc-c aic mr-10">购票</span>
                
                    </a>`
        }

        document.getElementById('movies').innerHTML = str
        

    },

    getFilmList: function () {
        var url = 'huruqing.cn:3000/api/film/getList'
        var $this=this
        $.ajax({
            type: 'get',
            url: url,
            data: {},
            dataType: 'json',
            success: function (data) {
                $this.flimList = data.films
                console.log(data)
                $this.render()
            }
        })
    },
    ajaxGet(){
        var url = 'huruqing.cn:3000/api/film/getList'
        var $this=this
        var ajax=new XMLHttpRequest()
    
        ajax.open('get',url)
        ajax.send()
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4&&ajax.status==200){
                var result=JSON.parse(ajax.responseText)
                $this.flimList=result.films
                $this.render()
                $this.caroulsel(result.banners)
            }
        }
    },

    caroulsel(imgs){
        var str=''
        imgs.forEach(item => {
            if( item.url){
                str+=`<div class="swiper-slide">
                    <img src="${item.url}" />
                </div>`
            }
            
        });
        document.querySelector('.swiper-wrapper').innerHTML=str
        var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }


    
}
home.ajaxGet()

