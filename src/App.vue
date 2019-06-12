<template>
  <div id="app" v-on:click="pointClick($event)">
    <router-link to="/HelloWorld">首页</router-link>
    <router-link to="/newClass">添加类</router-link>
    <router-link to="/newLabel">添加标签</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    mounted () {
      var height = window.innerHeight - 40
      var bodyDiv = document.getElementsByTagName('body')[0]
      var indexId = document.getElementById('app')
      indexId.style.height = height + 'px'
      bodyDiv.style.height = height + 'px'
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      },
      pointClick(e){
        this.GLOBAL.pointEvent = e;
      }
    },
    beforeCreate () {
      if (this.$router.path !== '/') {
        this.$router.replace('/')
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
