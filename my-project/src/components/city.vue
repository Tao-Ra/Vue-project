<template>
    <div>
        <nav>
            <p id="nav-one">ele.me</p>
            <div>
                <router-link to="/login" style="color:white;">
              <span data-v-cec0c0c0="" class="login_span">登录|注册</span>
            </router-link>
            </div>
        </nav>
        <div>
            <p id="location-one">
                <span>当前定位城市:</span>
                <span>定位不转时,请在城市列表中选择</span>
            </p>
            <p id="city-one">郑州</p>
        </div>
           <div id="hotCity">
                <p id="hot-city-title">热门城市</p> 
              <Row >
               
         <Col span="6" v-for="(item,index) in json" :key="index">
         <router-link :to="{'name':'hot','params':{'id':item.id},query:{'id':item.id}}">
               {{item.name}}
               </router-link>
         </Col>
          
    </Row>
           </div> 
           <div id="content" >                 
               <div id="content-left">
                   <template v-for="(arrItem,aIndex) in arr" >
                       <p :key="aIndex" :id="arrItem" @click="fn(arrItem)" >
                      {{arrItem}}
                </p>
                   </template>   
               </div>
               <div id="content-right" v-for="(arrItems,aIndex) in arr" :ref="arrItems" :key="aIndex" >
                   <p id="content-t">{{arrItems}}(按字母排序)</p>   
                  <Row>        
                  <Col span="6" v-for="(items,indexs) in AllCity[arrItems]" :key="indexs">{{items.name}}</Col>            
                </Row>                           
               </div>
           </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
       arr:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
      json: [],
      AllCity: []
    };
  },
  async created() {
    this.$Axios.get("https://elm.cangdu.org/v1/cities?type=hot").then(data => {
      console.log(data.data);
      this.json = data.data;
    });
    // https://elm.cangdu.org/v1/cities?type=group
    this.$Axios
      .get("https://elm.cangdu.org/v1/cities?type=group")
      .then(data => {
        console.log(data.data);
        this.AllCity = data.data;

      });
  },
  methods:{
      fn(num){
          // console.log(num)
          // console.dir(this.$refs[num]);
          window.scrollTo(0,this.$refs[num][0].offsetTop)
      }
  }

};
</script>

<style scoped>
nav {
  width: 100%;
  overflow: hidden;
  background-color: #3191e8;
  padding: 10px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
#nav-one {
  float: left;
}
.head_login{
    display: block;
   position: absolute;
   top: 0;
   right: 0;
}
#nav-two {
 display: block;
  float: right;
  border-left: 1px solid white;
  padding: 2px;
}
#nav-three {
  float: right;
  padding: 2px;
}
#location-one {
  overflow: hidden;
  padding: 10px 0;
  border-bottom: 1px solid gray;
}
#location-one > span:nth-child(1) {
  float: left;
  font-size: 20px;
}
#location-one > span:nth-child(2) {
  float: right;
}

#city-one {
  text-align: left;
  font-size: 30px;
  padding: 10px 0;
}
#hot-city-title {
  text-align: left;
  font-size: 20px;
}
#hot-city {
  display: flex;
  flex-wrap: wrap;
  text-align: center
}
#hot-city > span {
  border: 1px solid #e8e8e8;
  width: 101px;
  padding: 10px 0;
}
#hotCity {
  padding: 5px 0;
}
#hot-city-title {
  padding: 10px 0;
}
#content-city {
  font-size: 20px;
}
#content-t{
    font-size: 20px;
    text-align: left;
}
.ivu-col{
    text-align: center;
    font-size: 20px;
    border: 1px solid #e8e8e8;
    color: #3191e8;
    text-overflow : ellipsis;
    white-space : nowrap;
    overflow : hidden;
    padding: 5px 8px;
}
#content .ivu-col{
  color: #A8A8A8;
  padding: 5px 8px;
}
#content{
  width: 100%;
  overflow: hidden;
}
#content-left{
  width: 10%;
  float: left;
  /* position: fixed; */
  /* left: 0; */
  /* top:0; */
}
#content-right{
  width: 90%;
  float: right;
}
#content-left>p{
    font-size: 20px;
}
#ivu-row{
    width: 93px;
}
</style>
