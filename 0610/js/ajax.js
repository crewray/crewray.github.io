var ajax = {
    get(url, callback) {
        // var url = 'http://huruqing.cn:3000/api/film/getList'
        // var $this = this;
        var xhr = new XMLHttpRequest();

        xhr.open('get', url)
        // xhr.open(type, url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                callback(result)

            }
        }
    },


    post(url, data, callback) {
        var xhr = new XMLHttpRequest()
        xhr.open('post', url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(data)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                callback(result)
            }
        }
    }

}