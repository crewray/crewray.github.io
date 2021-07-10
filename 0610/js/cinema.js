function CinemaList() {

    this.cinemas = []
    this.render = function (data) {
        // console.log(data.cinemas)

        if (data.code == 666) this.cinemas = data.cinemas

        let list = document.querySelector('.list')
        let str = ''
        data.cinemas.forEach(function (item) {
            str += `<div class="item flex fdc">
                    <p class="flex jc-sb mb-10"><span class="f16">${item.name}</span>
                    <span class="ff88229 f12"><i class="iconfont icon-fl-renminbi"></i>${item.lowPrice/100}起</span></p>
                    <p class="flex jc-sb f999 f12"><span>${item.address}</span><span>距离未知</span></p>
                </div>`
        })
        list.innerHTML = str
    }
    this.drop = function () {
        let area = document.querySelector('.area')
        let pop = document.querySelector('.pop')

        if (area.className.includes('dsn')) {
            area.className = area.className.replace(' dsn', '')
            pop.style.display = 'block'
        } else {
            area.className += ' dsn'
            pop.style.display = 'none'

        }

    }
    let that = this
    this.active = function () {
        let target = event.target
        if (target.className.includes('area')) return
        let parent = event.target.parentNode
        let active = document.querySelector('.area .active')

        if (active) active.className = active.className.replace('active', '')

        if (target.className.includes('item')) {
            target.className += ' active'
        }
        if (parent.className.includes('item')) {
            parent.className += ' active'
        }



        document.querySelector('#drop').click()

        let currentTarget = parent.className.includes('item') ? target : target.childNode

        console.log(that)
        if (currentTarget.innerText === '全部') {
            that.render(that)
            return
        }

        let list = that.cinemas.filter(function (item) {


            return item.areaName === currentTarget.innerText
        })

        let obj = {
            cinemas: list
        }

        that.render(obj)


    }
}

let cinemaList = new CinemaList()
utils.promise('http://huruqing.cn:3000/api/cinema/getList').then(function (res) {
    cinemaList.render(res)
}).catch(function (err) {
    alert(err)
})


document.querySelector('#drop').addEventListener('click', cinemaList.drop)
document.querySelector('.area').addEventListener('click', cinemaList.active)


// let cinemaList = {
//     cinemas: [],

//     render: function (data) {
//         // console.log(data.cinemas)

//         if (data.code == 666) this.cinemas = data.cinemas

//         let list = document.querySelector('.list')
//         let str = ''
//         data.cinemas.forEach(function (item) {
//             str += `<div class="item flex fdc">
//                     <p class="flex jc-sb mb-10"><span class="f16">${item.name}</span>
//                     <span class="ff88229 f12"><i class="iconfont icon-fl-renminbi"></i>${item.lowPrice/100}起</span></p>
//                     <p class="flex jc-sb f999 f12"><span>${item.address}</span><span>距离未知</span></p>
//                 </div>`
//         })
//         list.innerHTML = str
//     },
//     drop() {
//         let area = document.querySelector('.area')
//         let pop = document.querySelector('.pop')

//         if (area.className.includes('dsn')) {
//             area.className = area.className.replace(' dsn', '')
//             pop.style.display = 'block'
//         } else {
//             area.className += ' dsn'
//             pop.style.display = 'none'

//         }


//     },

//     active() {
//         let target = event.target
//         if (target.className.includes('area')) return
//         let parent = event.target.parentNode
//         let active = document.querySelector('.area .active')

//         if (active) active.className = active.className.replace('active', '')

//         if (target.className.includes('item')) {
//             target.className += ' active'
//         }
//         if (parent.className.includes('item')) {
//             parent.className += ' active'
//         }



//         document.querySelector('#drop').click()

//         let currentTarget = parent.className.includes('item') ? target : target.childNode

//         console.log(this)
//         if (currentTarget.innerText === '全部') {
//             cinemaList.render(cinemaList)
//             return
//         }

//         let list = cinemaList.cinemas.filter(function (item) {


//             return item.areaName === currentTarget.innerText
//         })

//         let obj = {
//             cinemas: list
//         }

//         cinemaList.render(obj)


//     }
// }
// ajax.get('http://huruqing.cn:3000/api/cinema/getList',cinemaList.render)