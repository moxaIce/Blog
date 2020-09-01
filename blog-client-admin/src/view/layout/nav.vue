<template>
    <section class="nav-body">
        <ul class="nav-content">
            <li v-for="(item, index) in routerNav" :key="index" class="nav-content__item">
                <router-link :to="item.path" class="nav-content__link" active-class="nav-active">{{item.meta.title}}</router-link>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
    import {routerNav} from "@/router";

    export default {
        setup() {
            return {
                routerNav
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-body {
        width: 100vw;
        height: 60px;
        background-color: #00B7FF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
    }

    .nav-content {
        min-width: 1024px;
        li.nav-content__item{
            color: #fff;
            display: inline-block;
            padding: 0 20px;
            .nav-content__link{
                color: #fff;
                text-decoration: none;
                display: inline-block;
                height: 60px;
                line-height: 60px;
                padding: 0 10px;
                transition: 0.3s;
                &:hover{
                    color: #00B7FF;
                    background-color:#ffffff;
                }
            }
            .nav-active{
                color: #00B7FF;
                background-color:#ffffff;
            }
        }
    }
</style>