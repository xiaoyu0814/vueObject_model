<template>
  <div id="homePage">
    <div>{{$store.state.test}}</div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$http)
    let url = "https://engine.piesat.cn/dev/account/api/auth/login"
    let params = {
      username: "xiexiaoyu",
      password: "123456",
      isMd5: false
    }
    this.$http.get(url,params).then(res=>{
      console.log(res)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homePage{
  height: 100vh;
  width: 100%;
}
</style>
