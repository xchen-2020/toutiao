<template>
  <div class="home">
    <!-- 主页header的开始 -->
    <div class="tt-home-header">
      <span>头条</span>
    </div>
    <!-- 主页header的结束 -->
  <!-- 主页内容开始 -->
  <div class="tt-home-content">
    <div class="home-content-left">
      <Navigator></Navigator>
    </div>
    <div class="hone-content-middle">中间</div>
    <div class="home-content-right">右边</div>
  </div>
  <!-- 主页内容结束 -->
  </div>
</template>

<script>
// this.$axios
// .get("http://tt.linweiqin.com/api/tt/getArticles"),{
//   params:{
//     lastid:0,
//     type:"TT",
//     page:1,
//     number:20,
//   },
// }
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// @ is an alias to /src
import Navigator from '@/components/Navigator'

export default {
 components:{
   Navigator
 },
}
</script>
<style lang="less" scoped>
.tt-home-header {
  height:30px;
  background-color: black;
  line-height: 30px;
  padding-left: 5px;
  span {
    color:white;
  }
}
.tt-home-content {
  width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  .home-content-left {
    flex: 1;
  }

  .hone-content-middle {
flex: 3;
  }

  .home-content-right {
flex: 2;
  }
}
</style>