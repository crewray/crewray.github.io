var settingView={
    logout(){
        $.ajax({
            type: "post",
            url: "http://huruqing.cn:3000/api/user/logout",
            data: '',
            dataType: "json",
            success: function (res) {
                if(res.code==666){
                    alert(res.msg)
                    location.href='./my.html'
                }
                else alert('错误')
            }
            ,
            error(res){
                alert('请求失败')
            }
        });
    }
}

$('#logout').click(settingView.logout)