<template>
    <el-form :model="formILogin">
      <el-form-item label="帳號">
        <el-input v-model="formILogin.account" placeholder="請輸入帳號" clearable />
      </el-form-item>
      <el-form-item label="密碼">
        <el-input v-model="formILogin.pwd" placeholder="請輸入密碼" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登入</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { ElForm, ElInput, ElFormItem, ElButton } from 'element-plus';
  
  const router = useRouter();
  
  const formILogin = reactive({
    account: '',
    pwd: '',
  })
  
  const onSubmit = () => {
    router.push('/home/index');
  }
  </script>

 <style lang="scss" scoped>

</style>