<template>
    <button :class="['app-button', `app-button__${type}`]" type="button" >
      <slot></slot>
    </button>
</template>

<script lang="ts">
// import {SetupContext} from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  setup: (props: IAppButton) => {

    return {
    };
  },
};
</script>

<style scoped lang="scss">
.app-button {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.85);
  width: 100%;
  outline-width: 0;;
}
.app-button__default {
  background: #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  border: 1px solid #d9d9d9;
  &:hover,
  &:active{
    color: #40a9ff;
    background: #fff;
    border-color: #40a9ff;
  }
}
.app-button__primary {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}
</style>
