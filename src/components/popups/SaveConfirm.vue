<template>
    <div class="save-confirm">
        <div class="text-container">
            <div class="question">
                <h3>您是否確定要儲存?</h3>
            </div>
            <div class="buttons">
                <el-button @click="() => modalStore.rejectClicked()">否</el-button>
                <el-button @click="() => modalStore.confirmClicked()">是</el-button>
            </div>            
        </div>        
    </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore();

</script>

<style scoped>
.save-confirm {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-container {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: gray;
    border-radius: 10px;
    flex-direction: column;
}
</style>