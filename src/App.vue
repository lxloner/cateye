<template>
    <div class="app">
        <router-view></router-view>
        <TaBar></TaBar>
    </div>
</template>
<script>
    import http from "utils/http"
    import TaBar from "common/taBar"
  export default {
    name:"App",
      components:{
            TaBar,
      },
      created() {
        // this.$axios("get","/api/movieOnInfoList?cityId=10").then((data)=>{
        //     console.log(data)
        // })
          http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
              console.log(data)
          })
      }
  }

</script>
<style>
    .app{
        height:100%;
    }
</style>
