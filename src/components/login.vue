<template>
    <div>
        <input placeholder="User" type="text" v-model="Inputuser"/>
        <input v-if="Inputuser.length > 0" placeholder="Password" type="password" />
        <p>{{ Inputuser }}</p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                Inputuser: "",
            }
        }
    }
</script>

<style scoped>
    .passwordbg {
      background: red;
    }
</style>