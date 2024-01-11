<template>
    <el-form :model="formLogin" :show-message="errorFields.accountError"
      error="帳號錯誤"
    >
      <el-form-item label="帳號">
        <el-input v-model="formLogin.account" placeholder="請輸入帳號" clearable />
      </el-form-item>
      <el-form-item label="密碼" :show-message="errorFields.pwdError"
        error="密碼錯誤"
      >
        <el-input v-model="formLogin.pwd" placeholder="請輸入密碼" clearable />
      </el-form-item>
      <el-form-item class="justify-center">
        <el-button type="primary" @click="onSubmit">登入</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { ElForm, ElInput, ElFormItem, ElButton } from 'element-plus';
  import { userAuthData } from '@/data/AuthData';
  import { useAuthStore } from '@/stores/auth';

  const router = useRouter();
  const authStore = useAuthStore();
  
  const formLogin = reactive({
    account: '',
    pwd: '',
  })
  
  const errorFields = ref({
    accountError: false,
    pwdError: false,
  }) 

  const verifyFields = () => {
    let passed = true;
    if (formLogin.account !== userAuthData.account) {
      errorFields.value.accountError = true;
      passed = false;
    }
    if(formLogin.pwd !== userAuthData.pwd) {
      errorFields.value.pwdError = true;
      passed = false;
    }
    return passed;
  }



  const onSubmit = () => {
    if (verifyFields()) {
      authStore.logIn();
      router.push('/home/index');
    } else {
    }
    
  }
  </script>

 <style lang="scss" scoped>
.el-form-item__content {
  justify-content: center;
}
</style>