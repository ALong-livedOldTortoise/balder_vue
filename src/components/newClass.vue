<template>
    <el-form  :model="newClassForm"  ref="newClassForm" v-model="newClassForm" label-width="80px">
      <input type="hidden" />
<!--      <el-row>-->
<!--        <el-col :span="18">-->
<!--          <el-select v-model="selected">-->
<!--            <option disabled value="">请选择</option>-->
<!--            <el-option v-for="item in classList"  :key="item.id" :label="item.value " :value="item.id" ></el-option>-->
<!--          </el-select>-->
<!--          <span>Selected: {{ selected }}</span>-->
<!--        </el-col>-->
<!--      </el-row>-->
      <el-row>
        <el-col :span="20">
          <el-form-item label="父类" >
            <drop-down style="float: left;width:100%;line-height: 0px;" @inputValue="getInputValue" @item-click="itemClick" :itemlist="itemlist" :placeholder="placeholder" :nodatatext="nodatatext" ref="copyData"></drop-down>
            <input type="hidden" v-model="newClassForm.preClassId" value=""/>
          </el-form-item>
        </el-col>
      </el-row>
      <br>
<!--      <multiselect class="multiselect" v-model="value" :options="options" placeholder="请输入项目名称" label="name" track-by="name"></multiselect>-->
      <el-row>
        <el-col :span="20">
          <el-form-item label="维度">
            <el-input style="float: left;width: 100%;" v-model="newClassForm.netName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <el-form-item label="新类">
            <el-input style="float: left;width: 100%;" v-model="newClassForm.className"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="20">
          <el-button type="primary" @click="submitForm(newClassForm)">添加</el-button>
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
              netName:'',
              preClassId:'',
              className:''
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
          this.$axios.post("/product/saveClass",newClassForm,{
            headers: {
              'Content-Type':'application/json;charset=UTF-8'
            }
          }).then((response)=>{
            console.log(response.data);
          }).catch(function (error) {
            console.log(error)
          });
        },
        itemClick(data) {
          this.selectValue= data.name;
          this.newClassForm.preClassId = data.id;
        },
        getInputValue(searchvalue) {
          this.$axios.get("/product/findClassList",{
            params:{
              name:searchvalue
            }
          }).then((response)=>{
            var list = this.itemlist;
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
