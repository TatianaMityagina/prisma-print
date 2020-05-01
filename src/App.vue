<template>
  <div id="app">
    <TopHeader />
    <router-view/>
  </div>
</template>

<script>
  import TopHeader from './components/top-haeder'

  export default {
    components: {
      TopHeader 
    }
  }
</script>

<style lang="scss">
</style>
