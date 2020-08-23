<template>
    <div class="app-login">
        <div class="app-login__content">
            <app-form>
                <app-form-item label="账号">
                    <app-input type="text" placeholder="user name"/>
                </app-form-item>
                <app-form-item label="密码">
                    <app-input type="password" placeholder="user password"/>
                </app-form-item>
                <app-button >登录</app-button>
            </app-form>
        </div>
    </div>
</template>

<script lang="ts">
import AppForm from '@/components/form/index.vue';
import AppInput from '@/components/input/index.vue';
import AppFormItem from '@/components/form-item/index.vue';
import AppButton from '@/components/button/index.vue';

export default {
    components: {
        AppForm,
        AppInput,
        AppFormItem,
        AppButton
    },
    setup(){
        return {
            data: 1
        }
    }
}
</script>

<style scoped lang="scss">
.app-login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.app-login__content{
    width: 450px;
    border-radius: 8px;
    padding: 10px;
    // border: 1px solid rgb(73, 73, 214);
    background-color: #ffffff;
}

</style>