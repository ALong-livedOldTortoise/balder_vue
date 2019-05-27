<template>
  <el-form  :model="searchForm"  ref="searchForm" v-model="searchForm" label-width="80px">
  <el-row>
    <el-form-item label="念头" prop="think">
      <el-input type="text" class="searchBox" v-model="searchForm.yourIdea"></el-input>
    </el-form-item>
  </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchForm:{
        yourIdea: '请输入想要搜索关键字'
      }
    }
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
