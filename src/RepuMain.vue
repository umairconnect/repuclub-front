<template>

  <HelloWorld test="Project for testing" class="malang"/>

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
  },
    created:function () {
        alert('this is test')
    }
}
</script>

