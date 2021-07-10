var loginView = {
    getCode() {
        var phone = $('#phone').val()
        if (!phone) {
            alert('手机号不能为空!')
            return false
        }

        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        if (!reg.test(phone)) {
            alert('请输入正确手机号')
            return false
        }

        var btn = $('#btn')
        var count = 10
        btn.attr('disabled', true)

        var timer = setInterval(function () {

            btn.val(--count)
            if (count === 0) {
                btn.removeAttr('disabled').val('重新获取验证码')
                clearInterval(timer)

            }


        }, 1000)

        $.ajax({
            type: "post",
            url: 'http://huruqing.cn:3000/api/user/getSmsCode',
            data: {phone: phone},
            dataType: "json",
            success: function (response) {
                if(response.code=='666'){
                    var no=phone.slice(-4)
                    alert(`验证码已发送短信到尾号为${no}的手机上,请注意收查`)
                }
                else{
                    alert(response.msg)
                }
            },
            error: function(response){
                alert('请求失败')
            }
        });
    },

    login(){
        var phone = $('#phone').val()
        if (!phone) {
            alert('手机号不能为空!')
            return false
        }

        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        if (!reg.test(phone)) {
            alert('请输入正确手机号')
            return false
        }

        var smsCode=$('#code').val()
        if(!/^\d{4}$/.test(smsCode)){
            alert('验证码格式错误!')
            return false
        }

        $.ajax({
            type: "post",
            url: "http://huruqing.cn:3000/api/user/loginBySmsCode",
            data: {phone:phone,smsCode:smsCode},
            dataType: "json",
            success: function (res) {
                if(res.code==666){
                    location.href=`./my.html?phone=${phone}`
                }
                else{
                    alert(res.msg);
                }
            },
            error: function(res){

                alert('请求失败');
            }
        });
    }
}

$('#btn').click(loginView.getCode)
$('#login').click(loginView.login)