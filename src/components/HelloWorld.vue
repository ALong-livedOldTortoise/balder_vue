<template>
  <el-tabs @tab-click="handleClick" v-model="activeName" style="line-height: 0px;">
    <el-tab-pane label="搜索" name="HelloWorld"><router-view></router-view></el-tab-pane>
    <el-tab-pane label="添加类" name="newClass"><router-view></router-view></el-tab-pane>
    <el-tab-pane label="新坐标" name="newLabel"><router-view></router-view></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'HelloWorld'
    }
  },
  methods: {
    handleClick (tab, event) {
      let urlStr = ''
      if (tab.name === 'HelloWorld') {
        urlStr = '/HelloWorld'
      }
      if (tab.name === 'newClass') {
        urlStr = '/newClass'
      }
      if (tab.name === 'newLabel') {
        urlStr = '/newLabel'
      }
      this.$router.push(urlStr)
    },
    submitForm(searchForm){
      this.$axios.get("/product/findProductList",{
        params:{
          a:"a"
        }
      }).then((response)=>{
        console.log(response.data);
      }).catch(function (error) {
        console.log(error)
      });
  }
}
</script>

<style scoped>
  .searchBox{
    outline: none;
    text-indent: 10px;
    margin-right: 20px;
  }
</style>
