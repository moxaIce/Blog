<template>
    <input class="app-input"
           :placeholder="placeholder"
           :type="type"
           @input="$emit('update', $event.target.value)"/>
</template>

<script lang="ts">
/**
 * @description input 组件
 */
interface IProps {
    placeholder?: string
    type?: string
    value?: string
}

export default {
    props: {
        placeholder: String,
        type: String
    },

    setup(props: IProps) {

    }
}
</script>

<style scoped lang="scss">
.app-input{
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    line-height: 1.57;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    flex: 1;
}
.app-input::placeholder{
    color: #d9d9d9;
}


.app-input:placeholder-shown{
    text-overflow: ellipsis;
}
.app-input{
    &:focus{
     border-color: #2f54eb; 
     box-shadow: 0 0 0 2px rgba(24,144,255,.2);
     outline: none;
     border-right-width: 1px!important;
    }
}
</style>
