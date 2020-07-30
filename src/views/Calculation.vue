<template>
  <div class="calculation">
    <Calculator />
  </div>
</template>

<script>
import Calculator from '../components/calculator'

export default {
  name: 'Calculation',
  components: {
    Calculator 
  }
}
</script>

<style scoped lang="scss">
  .calculation {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>