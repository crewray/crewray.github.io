var filmDetial = {
    url: '',
    render(data) {
        if(data.code!='666'){
            alert('获取数据失败!')
            history.back()
        }
        var film = data.film
        document.querySelector('.header img').src = film.poster


        function numAdjust(num) {
            if (num < 10) num = '0' + num
            return num
        }

        function toDate(timestamp) {
            var date = new Date(Number(timestamp))
            var timeStr = `${date.getFullYear()}-${numAdjust(date.getMonth())}-${numAdjust(date.getDate())}`

            return timeStr
        }

        var str = `
                    <div class="title flex jc-sb"><div class="film-name flex"><span>${film.name}</span><span class="flex aic jc-c">${film.filmType}</span></div><div class="review"><span>${film.grade}</span><span>分</span></div></div>
                    <div class="detail mt-15">
                        <p class="f14">${film.category.replace(/\|/g,'')}</p>
                        <p class="f14 mt-10">${toDate(film.premiereAt*1000)}上映</p>
                        <p class="f14 mt-5">${film.nation} | ${film.runtime}分钟</p>
                        <p class="f12 mt-15">${film.synopsis}</p>
                        

                    </div>
                `
        document.querySelector('.desc').innerHTML = str

        var actorList = ''
        film.actors.forEach(function (item) {
            actorList += `<div class="item ml-15">
                            <img src="${item.avatarAddress}" alt="">
                            <p class="mt-5 f14">${item.name}</p>
                            <p class="f999 mt-5 f14">${item.role}</p>
                        </div>`
        })
        document.querySelector('.actors .list').innerHTML=actorList


    }

    


}

var params=location.search
filmDetial.url=`http://huruqing.cn:3000/api/film/getDetail${params}`

ajax.get(filmDetial.url, filmDetial.render)

document.querySelector('.back').onclick=function(){
    history.back()
}

