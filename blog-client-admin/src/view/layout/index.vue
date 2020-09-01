<template>
    <blog-nav></blog-nav>
    <div class="layout-body">
        <router-view/>
    </div>

</template>

<script lang="ts">
import Nav from './nav.vue';

export default {
    components: {
        blogNav:Nav
    }
}
</script>

<style scoped lang="scss">
.layout-body{
    padding-top: 60px;
    background-color: #fefefe;
}
</style>