<template>
    <div>
       <nav>
      <router-link to="/" style="color:white"> <i-icon type="ios-arrow-back" /></router-link>
        <span>密码登录</span>
       </nav>
       <div id="content">
        <section  class="input_container">
            <input type="text" placeholder="账号" v-model="user" ref="user"></section>
         <section  class="input_container">
            <input type="password" placeholder="密码" v-model="pass" ref="pass">
            <i-switch size="large">
                <span slot="open" @click="status">abc</span> 
                <span slot="close" @click="status">c...</span>
            </i-switch>
            </section>
         <section class="input_container_code">
            <input type="text" placeholder="验证码">
            <img :src="Img" alt="">
            <div id="word">
                <p>看不清</p>
                <p @click="fn" style="color:#3190e8">换一张</p>
            </div>
            </section>

       </div>
       <p data-v-ff83a60c="" class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p data-v-ff83a60c="" class="login_tips">
        注册过的用户可凭账号密码登录
    </p>
       <div class="btn" @click="login">登录</div>
       <router-link to="/reset" style="font-size:20px;">
       <span style="margin-left:75%">重置密码?</span>
       </router-link>
    </div>

</template>

<script>
export default {
    data(){
        return {
            Img:'',
            user:'',
            pass:'',
            statu:true
        }
    },
    // https://elm.cangdu.org/v1/captchas
    async created(){
        this.$Axios.post('https://elm.cangdu.org/v1/captchas').then((data)=>{
            // console.log(data)
            this.Img=data.data.code;
        });     
    },
    methods:{
        fn(){
             this.$Axios.post('https://elm.cangdu.org/v1/captchas').then((data)=>{
            // console.log(data)
            this.Img=data.data.code;
        })
        },
        status($event){
            // console.log($event.target.parentElement.previousElementSibling)
            if(this.statu){
                // $event.target.la
                $event.path[3].firstChild.setAttribute('type','text')
            }else{
                $event.path[3].firstChild.setAttribute('type','password')
            }
            this.statu=!this.statu;  
        },
        login(){
           this.$ajax.ajax({
            type:'POST',
            url:'/Api',
            data:{
                how:'login',
                user:this.$refs.user.value,
                pwd:this.$refs.pass.value
            },
            dataType: 'json',
           success(data){
            if(!data.err){
                alert('登录成功');
                location.href='/'
            }else{
              alert('错了，'+data.msg);
            }
          },
          error(){
              alert('登录失败');
          }
        })
        }
    },
    watch:{
        user:(val, oldVal)=> {
             const reg = /[A-Za-z0-9_\-\u4e00-\u9fa5]+/
             if(reg.test(val)){
                 console.log('输入正确')
             }else{
                 console.log('格式不正确')
             }
            },
        pass:(val, oldVal)=> {
            const reg=/[a-zA-Z0-9_]{6,13}/
            if(reg.test(val)){
                 console.log('输入正确')
             }else{
                 console.log('格式不正确')
             }
       
        },
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

.input_container{
    border-bottom: 1px solid #f1f1f1;
}
.input_container>input{
    width: 100%;
    font-size: 20px;
    padding: 10px;
    outline: none;
}
.input_container_code{
    display: flex;
}
.input_container_code>input{
    width: 60%;
    font-size: 20px;
    padding: 10px 0 10px 10px;
    outline: none;
}
#word{
    margin-left: 10px;
    font-size: 15px;
}
#content>section:nth-child(2){
    display: flex;
}
.btn{
    width:90%;
    margin: 0 auto;
    background-color:lightgreen;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
}
.login_tips{
    color: red;
}
.ivu-switch{
    margin-top:15px;
}
</style>
