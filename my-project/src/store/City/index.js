export default{
    namespaced:true,
    //  状态源
    state: {
       arr:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
       json: [],
       AllCity: [],
       city:''
   },
   actions:{
    async HotCity({commit,dispatch,state},arg) {
        let data =await(
            await fetch('https://elm.cangdu.org/v1/cities?type=hot')
        ).json();
        let dataAll =await(
            await fetch('https://elm.cangdu.org/v1/cities?type=group')
        ).json();
        commit('HotCity',data);
        commit('AllCity',dataAll);
        // console.log(dataAll)
    },
//     async DetailsCity({commit,dispatch,state},arg){
//         let data =await(
//             await fetch("https://elm.cangdu.org/v1/pois?city_id="+this.$route.params.id+"&keyword="+this.address+"&type=search
// ")
//         ).json();
//         commit('DetailsCity',data);
//     }

 
   },
   mutations:{
    HotCity(state,arg){
        state.json=state.json.concat(arg)
    },
    AllCity(state,arg){
        state.AllCity=state.AllCity.concat(arg)

    }
    // ,
    // DetailsCity(state,arg){
    //     state.DetailsCity=state.DetailsCity.concat(arg)

    // }

   }
}