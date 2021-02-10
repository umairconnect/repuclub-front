<template>
    <header>
        <h2 class="logo">{{ title }}</h2>
        <div id="nav">
            <router-link to="/">Home</router-link>
        </div>
    </header>

</template>

<script>
    export default {
        name: "header",
        props: {
         title: String
        }
    }
</script>