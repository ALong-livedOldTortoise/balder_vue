<template>
  <div id="app">
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
