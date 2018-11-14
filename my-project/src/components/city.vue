<template>
    <div>
        <nav>
            <p id="nav-one">ele.me</p>
            <div>
                <router-link to="/login" style="color:white;">
              <span class="login_span">登录|注册</span>
            </router-link>
            </div>
        </nav>
        <div>
            <p id="location-one">
                <span>当前定位城市:</span>
                <span>定位不转时,请在城市列表中选择</span>
            </p>
             <!-- <router-link :to="{'name':'hot','params':{'id':item.id},query:{'location':item.name}}"> -->
            <p id="city-one">
              {{city}}
             <i-icon type="ios-arrow-forward"/>
             
            </p>
               <!-- </router-link> -->
        </div>
           <div id="hotCity">
                <p id="hot-city-title">热门城市</p> 
              <row-r>        
         <col-c span="6" v-for="(item,index) in $store.state.City.json" :key="index">
         <router-link :to="{'name':'hot','params':{'id':item.id,'location':item.name}}">
               {{item.name}}
               </router-link>
         </col-c>      
    </row-r>
           </div> 
           <div id="content" >                 
               <div id="content-left">
                   <template v-for="(arrItem,aIndex) in $store.state.City.arr" >
                       <p :key="aIndex" :id="arrItem" @click="fn(arrItem)" >
                      {{arrItem}}
                </p>
                   </template>   
               </div>
               <div id="content-right" v-for="(arrItems,aIndex) in $store.state.City.arr" :ref="arrItems" :key="aIndex" >
                   <p id="content-t">{{arrItems}}(按字母排序)</p>   
                  <row-r v-for="(itemall,indexall) in $store.state.City.AllCity" :key="indexall">     
                  <col-c span="6" v-for="(items,indexs) in itemall[arrItems]" :key="indexs">
                  <router-link :to="{'name':'hot','params':{'id':items.id,'location':items.name}}">
                  {{items.name}}
                  </router-link>
                  </col-c>            
                </row-r>                           
               </div>
           </div>
    </div>
</template>

<script>
export default {
  created:function(){
        this.$store.dispatch('City/HotCity');
        // 城市定位
      var geolocation = new BMap.Geolocation();  
       let that=this;
        geolocation.getCurrentPosition(function(r){  
            if(this.getStatus() == BMAP_STATUS_SUCCESS){  
                //以指定的经度与纬度创建一个坐标点  
                var pt = new BMap.Point(r.point.lng,r.point.lat);  
                //创建一个地理位置解析器  
                var geoc = new BMap.Geocoder();  
                geoc.getLocation(pt, function(rs){//解析格式：城市，区县，街道  
                    var addComp = rs.addressComponents;  
                     that.city= addComp.city ;
                     console.log(that.city);
                });   
            }  
            else {  
                console.log('定位失败');  
            }          
        },{enableHighAccuracy: true})//指示浏览器获取高精度的位置，默认false
      
    },
  
  data() {
    return {
      //  arr:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
      // json: [],
      // AllCity: [],
      city:''
    };
  },
  // async created() {
  //   this.$Axios.get("https://elm.cangdu.org/v1/cities?type=hot").then(data => {
  //     console.log(data.data);
  //     this.json = data.data;
  //   });
  //   // https://elm.cangdu.org/v1/cities?type=group
  //   this.$Axios
  //     .get("https://elm.cangdu.org/v1/cities?type=group")
  //     .then(data => {
  //       console.log(data.data);
  //       this.AllCity = data.data;

  //     });
  methods:{
      fn(num){
          // console.log(num)
          // console.dir(this.$refs[num]);
          window.scrollTo(0,this.$refs[num][0].offsetTop)
      }
  }

};
</script>

<style>
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
