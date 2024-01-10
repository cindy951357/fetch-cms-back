<template>
    <div class="order-result-table">
        <el-table :data="orderData" style="width: 100%">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="orderId" label="訂單編號" width="120" />
            <el-table-column prop="orderStatus" label="訂單狀態" width="120" />
            <el-table-column prop="dealerType" label="經銷商狀態" width="120" />
            <el-table-column prop="phone" label="手機號碼" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
                <el-button link type="primary" size="small"
                    @click="onEditButtonClick(scope.row.orderId)"
                >
                     編輯
                </el-button>
            </template>
            </el-table-column>
        </el-table>
</div>
</template>
  
<script lang="ts" setup>
import { orderData } from '@/data/OrderData';
import { useRouter } from 'vue-router';
import { useCurrentEditOrderStore } from '@/stores/currentEditOrder';
import { storeToRefs } from 'pinia';

const router = useRouter();
const currentEditOrderStore = useCurrentEditOrderStore();

const onEditButtonClick = (orderId: string) => {
    if(orderData.filter((arrayItem:any) => arrayItem.orderId === orderId).length){
        currentEditOrderStore.setWholeState(
            orderData.filter((arrayItem:any) => arrayItem.orderId === orderId)[0]);
        router.push(`order-detail/${orderId}`);
    }   
}
</script>
  
<style lang="scss" scoped>
a {
    &:visited {
        color: gray;
    }
}
</style>