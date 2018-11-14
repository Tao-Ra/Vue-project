<template>
    <div>
        <nav>
      <router-link to='/login' style="color:white"> <i-icon type="ios-arrow-back" /></router-link>
        <span>重置密码</span>
       </nav>
       <i-form  label-position="left" :label-width="100">   
            <i-input placeholder="账号" v-model="user"></i-input>
            <i-input placeholder="旧密码" type="password" v-model="oldPwd"></i-input>
            <i-input placeholder="请输入新密码" type="password" v-model="newPwd"></i-input>
            <i-input placeholder="请输入新密码" type="password" v-model="confirmPwd"></i-input>

            <i-input placeholder="验证码" id="codeInput">
            </i-input>     
            <div id="code">
                 <img :src="Img" alt="">
                <div id="word">
                    <p>看不清</p>
                <p @click="fn" style="color:#3190e8">换一张</p>
                </div>
            </div>
            <input type="submit" value="确认修改" id="btn" @click="revise">
    </i-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Img:'',
            user:'',
            oldPwd:'',
            newPwd:'',
            confirmPwd:''
        }

    },
    async created(){
          this.$Axios.post('https://elm.cangdu.org/v1/captchas').then((data)=>{
            // console.log(data)
            this.Img=data.data.code;
        })
    },
    methods:{
        fn(){
             this.$Axios.post('https://elm.cangdu.org/v1/captchas').then((data)=>{
            // console.log(data)
            this.Img=data.data.code;
        })
        },
        revise(){
            this.$ajax.ajax({
                type:'POST',
                url:'/Api',
                data:{
                    how:'reset',
                    user:this.user,
                    oldPwd:this.oldPwd,
                    newPwd:this.newPwd,
                    confirmPwd:this.confirmPwd
                },
                 dataType: 'json',
                success(data){
                    console.log(data)
                    if(data.err){
                        alert('修改失败，'+data.msg); 
                        // location.href='/'
                    }else{
                        alert('修改成功');
                    }
                },
            error(){
                alert('修改失败')
            }
            })
        }
    }

}
</script>

<style>
nav{
    text-align: center;
    background-color: #3190e8;
    color: white;
    font-size: 20px;
    overflow: hidden;
    padding: 5px 0;
    
}
.ivu-icon{
    float: left;
}
.ivu-input{
    font-size:20px;
    padding: 20px 7px;
}
#codeInput{
    width: 65%;
}
#code,#word{
    display: inline-block;
}
#word{
    font-size: 15px;
}
#btn{
    width:90%;
    margin-left: 5%;
    background-color:lightgreen;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
    outline: 0;
    margin-top: 20px;
}
</style>
