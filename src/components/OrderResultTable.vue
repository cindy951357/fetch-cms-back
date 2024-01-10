<template>
    <div class="order-result-table">
        <el-table :data="orderData" style="width: 100%">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="orderNo" label="訂單編號" width="120" />
            <el-table-column prop="orderStatus" label="訂單狀態" width="120" />
            <el-table-column prop="dealerType" label="經銷商狀態" width="120" />
            <el-table-column prop="phone" label="手機號碼" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
                <el-button link type="primary" size="small"
                    @click="() => onEditButtonClick(scope.row.orderNo)"
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

const router = useRouter();

const onEditButtonClick = (orderId) => {
    router.push(`/${orderId}`);
}

</script>
  

<style lang="scss" scoped>
a {
    &:visited {
        color: gray;
    }
}
</style>