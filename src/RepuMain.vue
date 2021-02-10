<template>
    <repu-header title="Reputation Club"></repu-header>
    <router-view />
    <celebrity-list></celebrity-list>
</template>


<script>
import RepuHeader from './components/header.vue'
import CelebrityList from './components/CelebrityList'

export default {
  name: 'App',
  components: {
      RepuHeader,
      CelebrityList
  }
}
</script>
<style lang="scss">
    @import "assets/scss/repu-style";
</style>

