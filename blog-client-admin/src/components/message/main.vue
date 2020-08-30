<template>
    <transition name="app-message-fade">
        <div class="app-message__coontent">{{content}}</div>
    </transition>
</template>

<script lang="ts">
/**
 * 消息提示
 */
export default {
    props: {
      content: String
    }
}
</script>

<style scoped lang="scss">
.app-message-fade-enter,
.app-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.app-message__coontent{
  min-width: 300px;
  height: 30px;
  background-color: #f5222d;
  
}
</style>