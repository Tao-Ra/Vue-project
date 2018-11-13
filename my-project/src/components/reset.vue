<template>
    <div>
        <nav>
      <router-link to='/login' style="color:white"> <Icon type="ios-arrow-back" /></router-link>
        <span>重置密码</span>
       </nav>
       <i-form  label-position="left" :label-width="100">   
            <Input placeholder="账号"></Input>
            <Input placeholder="旧账号"></Input>
            <Input placeholder="请输入新密码"></Input>
            <Input placeholder="请输入新密码" ></Input>
            <Input placeholder="验证码"></Input>     
    </i-form>
    </div>
</template>

<script>
export default {

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
</style>
