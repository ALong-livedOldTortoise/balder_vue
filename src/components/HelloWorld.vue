<template>
  <el-form  :model="searchForm"  ref="searchForm" v-model="searchForm" label-width="80px">
  <el-row>
    <el-col :span="18">
      <el-form-item label="念头" prop="think">
        <el-input type="text" class="searchBox"  auto-complete="off" placeholder="请输入你的念头" v-model="searchForm.yourIdea"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" @click="submitForm('searchForm')">搜索</el-button>
    </el-col>
  </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchForm:{
        yourIdea: ''
      }
    }
  },
  methods:{
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
}
</script>

<style scoped>
  .searchBox{
    outline: none;
    text-indent: 10px;
    margin-right: 20px;
  }
</style>
