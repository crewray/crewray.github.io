var my={
    isLogin(){
        var params=location.search
        var phone=params.slice(-4)
        if(!params) return false
        $('#isLogin').text(phone)
    }
}
my.isLogin()