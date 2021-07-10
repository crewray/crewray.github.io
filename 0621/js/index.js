var str = ''
var input = document.getElementById('input')

function show() {

    var value = event.target.innerText
    str += value
    input.value = str
    if (str.length < 10) {
        input.style.fontSize = 65 + 'px'
    } else {
        input.style.fontSize = 35 + 'px'
    }

}

function free() {
    str = ''
    input.value = str
}

function del() {
    str = str.slice(0, str.length - 1)
    input.value = str
}


function equals() {
    str = str.replaceAll('x', '*')
    str = str.replaceAll('÷', '/')
    try {
        if (str) {
            str = String(eval(str))
            input.value = str
        } else {
            input.value = ''
        }

    } catch (error) {
        input.value = '请输入正确表达式!'
    }


}

var btns = document.getElementById('buttons')
btns.addEventListener('click', click)


// for (var i of btns) {
//     var txt = i.innerText
//     if (txt !== 'C' && txt !== '删除' && txt !== '=') {
//         i.addEventListener("click", show)
//         continue
//     } else if (txt === 'C') {
//         i.addEventListener("click", free)
//         continue
//     } else if (txt === '删除') {
//         i.addEventListener("click", del)
//         continue
//     } else {
//         i.addEventListener("click", equals)
//     }

// }


function click() {
    var id = event.target.id
    var className = event.target.className
    if (className.indexOf('btn') === -1) return
    if (id === 'clean') {
        free();
        return
    }
    if (id === 'del') {
        del();
        return
    }
    if (id === 'equals') {
        equals();
        return
    }
    show();
}