<template>

  <HelloWorld test="Welcome to my App"/>

    <div id="nav">
        <router-link to="/">test</router-link> |
        <router-link to="/login">test</router-link>
    </div>
    <router-view />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

