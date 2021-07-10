var utils = {

    promise: function (url, type, data) {
        let promiseObj = new Promise(function (resolve, reject) {
            $.ajax({
                type: type || 'get',
                url: url,
                data: data || {},
                dataType: "json",
                success: function (response) {
                    resolve(response)
                },
                error: function (res) {
                    reject(res)
                }
            });
        })
        return promiseObj
    }

}