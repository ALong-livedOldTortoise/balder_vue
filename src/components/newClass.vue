<template>
<!--  <el-tabs @tab-click="handleClick" v-model="activeName" style="line-height: 0px;">-->
<!--    <el-tab-pane label="搜索" name="newCapital"><router-view></router-view></el-tab-pane>-->
<!--    <el-tab-pane label="添加类" name="newContract"><router-view></router-view></el-tab-pane>-->
<!--    <el-tab-pane label="新坐标" name="newCoordinate"><router-view></router-view></el-tab-pane>-->
<!--  </el-tabs>-->
    <el-form  :model="newClassForm"  ref="newClassForm" v-model="newClassForm" label-width="80px">
      <el-row>
        <el-col :span="18">
          <el-form-item label="念头" prop="think">
            <el-input type="text" class="searchBox"  auto-complete="off" placeholder="请输入你的念头" v-model="newClassForm.yourIdea"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="submitForm('newClassForm')">搜索</el-button>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
    export default {
        name: "newClass",
      data(){
          return {
            newClassForm: {
              yourIdea : ''
            }
          }
      }
    }
</script>

<style scoped>

</style>
