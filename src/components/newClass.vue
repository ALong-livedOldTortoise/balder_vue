<template>
    <el-form  :model="newClassForm"  ref="newClassForm" v-model="newClassForm" label-width="80px">
      <el-row>
        <el-col :span="18">
          <el-select v-model="selected">
            <option disabled value="">请选择</option>
            <el-option v-for="item in classList"  :key="item.id" :label="item.value" :value="item.id" ></el-option>
          </el-select>
          <span>Selected: {{ selected }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <div>
            <drop-down @inputValue="getInputValue" @item-click="itemClick" :itemlist="itemlist" :placeholder="placeholder" :nodatatext="nodatatext"></drop-down>
          </div>
        </el-col>
      </el-row>
      <br>
<!--      <multiselect class="multiselect" v-model="value" :options="options" placeholder="请输入项目名称" label="name" track-by="name"></multiselect>-->
      <br>
      <el-row>
        <el-col :span="14">
          <el-button type="primary" @click="submitForm('newClassForm')">添加</el-button>
        </el-col>
      </el-row>
    </el-form>
</template>
<script type="text/ecmascript-6">
  // import Multiselect from 'vue-multiselect'

  import dropDown from "./dropdown"

  export default {
      name: "newClass",
      components: {
        // Multiselect,
        dropDown
      },
      data(){
          return {
            newClassForm: {
              yourIdea : ''
            },
            selected: '',
            classList: [{id:'1',value: 'a'},{id:'2',value: 'b'},{id:'3',value: 'c'}],
            itemlist: [],
            placeholder: "搜索",
            nodatatext: "暂无数据",
            selectValue: ""
            // value: {},
            // options: []
          }
      },
      methods:{
        submitForm(newClassForm){
          this.$axios.get("/product/findProductList",{
            params:{
              a:this.selected
            }
          }).then((response)=>{
            console.log(response.data);
          }).catch(function (error) {
            console.log(error)
          });
        },
        itemClick(data) {
          this.selectValue= data
        },
        getInputValue(searchvalue) {
          console.log(searchvalue)
          // 请求获取筛选列表

        }
      }
    }
</script>
<!--<style src="../assets/dist/vue-multiselect.min.css"></style>-->
<style scoped>

</style>
