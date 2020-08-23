<template>
    <button class="app-button" type="button" v-on:click="emitEvent">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { SetupContext } from 'vue';

export default {
    props: {
        type: {
            default: 'primary'
        }
    },
    setup: (props: IAppButton, context: SetupContext) => {
        const emitEvent = () => {
            context.emit('click')
        }
        return {
            emitEvent
        }
    }
}
</script>

<style scoped lang="scss">
.app-button{
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,.015);
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0,0,0,.85);
    background: #fff;
    border: 1px solid #d9d9d9;
    width: 100%;
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045)
}
</style>
