<template>
  <div class="vue-dropdown default-theme">
    <div class="search-module clearfix">
      <input id="input-select-text" class="search-text" @blur='inputBlur()'
             @keydown='search($event)' :placeholder="placeholder" v-model="inputText" />
      <span class="glyphicon glyphicon-search search-icon"></span>
    </div>
    <ul class="list-module" v-show="isShowData">
      <li v-for ="(item,index) in datalist"  @click="appClick(item)" :key="index">
        <span @click="appClick(item)" class="list-item-text">{{item.name}}</span>
      </li>
    </ul>
    <div class="tip__nodata" v-show="isShowNone">{{nodatatext}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datalist: [],
        inputText: "",
        isShowData: false,
        isShowNone: false
      }
    },
    props: {
      'itemlist': Array,
      'placeholder': String,
      'nodatatext': String,
    },
    methods: {
      appClick: function(data) {
        this.$emit('item-click', data);
        this.inputText = data.name;
        this.isShowData = false;
      },
      //按下enter搜索
      search: function(e) {
        if(e.keyCode===13){
          this.clearList();
          let searchvalue = e.currentTarget.value;
          this.$emit('inputValue', searchvalue);
          if (this.datalist.length === 0) {
            this.isShowData = false;
            this.isShowNone = false;
          } else {
            this.isShowData = true;
            this.isShowNone = false;
            this.datalist = this.itemlist;
          }
        }
      },
      copyData: function(list){
        if (list.length === 0) {
          this.isShowData = false;
          this.isShowNone = false;
        } else {
          this.isShowData = true;
          this.isShowNone = false;
          this.datalist = list;
        }
      },
      //失去焦点清空
      inputBlur() {
          this.clearList();
      },
      clearList(){
        this.isShowData = false;
        this.isShowNone = false;
        this.datalist.splice(0,this.datalist.length);
      }
    },
    mounted () {
      this.datalist = this.itemlist;
    }
  }
</script>

<style lang="scss" scoped>
  .vue-dropdown.default-theme {
    /*position: absolute;*/
    /*left:15%;*/
    /*width: 70%;*/
    /*margin: 0 auto;*/
    margin-top: 1em;
    margin-left: 22em;
    /*padding: 1em;*/
    /*z-index:10;*/
    box-shadow: 0px 0px 10px #ccc;
    &._self-show {
      display: block!important;
    }

    .search-module {
      position: relative;
      .search-text {
        width: 100%;
        height: 30px;
        /*padding-right: 2em;*/
        /*padding-left:0.5em;*/
        border-radius: 0.5em;
        box-shadow: none;
        border: 1px solid #ccc;

        &:focus {
          border-color: #2198f2;
        }
      }

      .search-icon {
        position: absolute;
        top: 24%;
        right: 0.5em;
        color: #aaa;
      }
    }

    .list-module {
      max-height: 200px;
      overflow-y: auto;
      li {
        &._self-hide {
          display: none;
        }
        margin-top: 0.5em;
        padding: 0.5em;
        &:hover {
          cursor:pointer;
          color: #fff;
          background: #00a0e9;
        }
      }
    }
  }
  .tip__nodata {
    font-size: 12px;
    margin-top: 1em;
  }
</style>
