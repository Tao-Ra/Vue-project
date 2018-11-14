<template>
    <div id="ap">
        <nav>
            <i-icon type="ios-arrow-back" />
            <h2>{{$route.params.location}}</h2>
            <span>切换城市</span>
        </nav>
        <input type="text" name="" id="" v-model="address">
        <button @click="fn">搜索</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            address:'',
            json:''
        }
    },
    async created(){
        
    },
    methods:{
        fn(){
           this.$Axios.get("https://elm.cangdu.org/v1/pois?city_id="+this.$route.params.id+"&keyword="+this.address+"&type=search").then(data => {
               this.json=data.data;
                 console.log(this.json) 
            });
     
        }
    }

}
</script>

<style scoped>
#ap{
}
nav{
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    padding: 8px 15px;
    background-color: #3190e8;
    color: white;
}
nav>span{
    font-size: 15px;
}
 input{
     width: 80%;
     padding: 10px;
     border: 1px solid blue;
 }
</style>
