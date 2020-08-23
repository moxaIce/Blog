<template>
    <div class="app-login">
        <div class="app-login__content">
            <h3 class="login-title">管理仓库</h3>
            <app-form>
                <app-form-item label="账号">
                    <app-input type="text" placeholder="user name"/>
                </app-form-item>
                <app-form-item label="密码">
                    <app-input type="password" placeholder="user password"/>
                </app-form-item>
                <app-button type="primary" @click="login">登录</app-button>
            </app-form>
        </div>
    </div>
</template>

<script lang="ts">
import { SetupContext } from "vue";
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
    setup(props: any, context: SetupContext){
        const login = () => {
            
        }
        return {
            login
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
    padding: 30px;
    background-color: #ffffff;
}
.login-title{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: 500;
}
</style>