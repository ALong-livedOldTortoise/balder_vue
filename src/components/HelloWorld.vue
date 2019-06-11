<template>
    <drop-down @inputValue="getInputValue" @item-click="itemClick" :itemlist="itemlist" :placeholder="placeholder" :nodatatext="nodatatext"></drop-down>
</template>

<script>
  import dropDown from "./dropdown"
export default {
  name: 'HelloWorld',
  components: {
    dropDown
  },
  data() {
    return {
      activeName: 'HelloWorld',
      itemlist: [],
      placeholder: "搜索",
      nodatatext: "暂无数据",
      selectValue: ""
    }
  },
  methods: {
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

<style scoped>

</style>
