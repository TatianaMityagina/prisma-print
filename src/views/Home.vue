<template>
  <div class="home">
    <Intro />
    <NewWord />
  </div>
</template>

<script>
import Intro from '../components/intro'
import NewWord from '../components/new-word'

export default {
  name: 'Home',
  components: {
    Intro,
    NewWord 
  }
}
</script>
