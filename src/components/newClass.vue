<template>
    <el-form  :model="newClassForm"  ref="newClassForm" v-model="newClassForm" label-width="80px">
      <input type="hidden" />
<!--      <el-row>-->
<!--        <el-col :span="18">-->
<!--          <el-select v-model="selected">-->
<!--            <option disabled value="">请选择</option>-->
<!--            <el-option v-for="item in classList"  :key="item.id" :label="item.value" :value="item.id" ></el-option>-->
<!--          </el-select>-->
<!--          <span>Selected: {{ selected }}</span>-->
<!--        </el-col>-->
<!--      </el-row>-->
      <el-row>
        <el-col :span="20">
            <drop-down @inputValue="getInputValue" @item-click="itemClick" :itemlist="itemlist" :placeholder="placeholder" :nodatatext="nodatatext" ref="copyData"></drop-down>
        </el-col>
      </el-row>
      <br>
<!--      <multiselect class="multiselect" v-model="value" :options="options" placeholder="请输入项目名称" label="name" track-by="name"></multiselect>-->
      <br>
      <el-row>
        <el-col :span="20">
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
            selectValue: "",
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
          console.log('444444444');
          this.selectValue= data.name;
          console.log('2222222');
        },
        getInputValue(searchvalue) {
          this.$axios.get("/product/findClassList",{
            params:{
              name:searchvalue
            }
          }).then((response)=>{
            var list = this.itemlist;
            console.log(response.data)
            if(response.data.code==='200'){
              for (var j = 0; j < response.data.data.length; j++) {
                var adwClass = {
                  id:response.data.data[j].id,
                  name:response.data.data[j].name
                };
                list.push(adwClass);
                this.$refs.copyData.copyData(list);
              }
            }
          }).catch(function (error) {
            console.log(error)
          });
        }
      }
    }
</script>
<!--<style src="../assets/dist/vue-multiselect.min.css"></style>-->
<style scoped>

</style>
