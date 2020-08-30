<template>
  <div class="app-form__item">
    <label class="app-form-item__label">{{label}}:</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
        label: String,
        prop: String
    },
    setup(props: IFormItemsProps) {
        console.log(`iformItem`, props);
    },
  };
</script>

<style scoped lang="scss">
.app-form__item{
  display: flex;
  align-items: center;
  margin: 0 0 24px;
}
.app-form-item__label {
  color: #434343;
  font-size: 14px;
  flex: 0 0 60px;
  text-align: left;
  padding-right: 10px;
}

</style>