<template>
    <div class="order-detail content-page">
        訂單詳情 {{ orderId }}
        <el-form :model="orderModel" label-width="400px">
            <el-form-item label="訂單編號">
                <el-input v-model="orderModel.orderId" disabled />
            </el-form-item>

            <span class="order-datetime">訂單時間</span>
            <el-date-picker
                v-model="orderModel.date"
                type="datetime"
                placeholder="Select date and time"
                :disabled="!isEditable"
            />

            <el-form-item label="訂單狀態">
            <el-select v-model="orderModel.orderStatus" placeholder="訂單狀態" :disabled="!isEditable">
                <el-option :label="orderModel.orderStatus" :value="orderModel.orderStatus" />
            </el-select>
            </el-form-item>
        </el-form>

        
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCurrentEditOrderStore } from '@/stores/currentEditOrder';
import { storeToRefs } from 'pinia';

import { ElDatePicker } from 'element-plus';

const route = useRoute();
const currentEditOrder = useCurrentEditOrderStore();

const orderId = route.params.orderId;
const initOrder = storeToRefs(currentEditOrder)
console.log("current order is: ", initOrder);

const isEditable = ref(true);

const orderModel = reactive({
    date: initOrder.date,
    orderId: initOrder.orderId,
    orderStatus: initOrder.orderStatus,
    dealerType: initOrder.dealerType,
    phone: initOrder.phone,
});

const dateInDateTime = computed({
  get: () =>  new Date(orderModel.date),
  set: (val) => {
  },
});

</script>

<style lang="scss" scoped>

</style>