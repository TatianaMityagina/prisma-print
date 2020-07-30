<template>
  <div id="app">
    <TopHeader />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import TopHeader from './components/top-haeder'
  import Footer from './components/footer'

  export default {
    components: {
      TopHeader,
      Footer
    }
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }
</style>
