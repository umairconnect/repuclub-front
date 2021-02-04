<template>
  <div class="world">
    <h1>{{ test }}</h1>
  </div>

</template>

<style lang="scss">
  .world {
    h1 {
      font-size: 5rem;
    }

  }
</style>

<script>
export default {
  name: 'HelloWorld',
  props: {
    test: String
  }
}
</script>

