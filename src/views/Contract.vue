<template>
  <div class="contract">
    <Cooperation />
  </div>
</template>

<script>
import Cooperation from '../components/cooperation'

export default {
  name: 'Contract',
  components: {
    Cooperation
  }
}
</script>

<style scoped lang="scss">
  .contract {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    overflow: hidden;
    min-height: calc(100vh - 106px);
  }
</style>

