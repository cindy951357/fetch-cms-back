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
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
            </el-form-item>
        </el-form>

        
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {useCurrentEditOrderStore} from '@/stores/currentEditOrder';
import type { ICurrentEditOrder } from '../stores/currentEditOrder';

import { ElDatePicker } from 'element-plus';

const router = useRouter();
const route = useRoute();
const currentEditOrder:ICurrentEditOrder = useCurrentEditOrderStore();

const orderId = route.params.orderId;
const initOrder = currentEditOrder;

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
    //
  },
});

</script>

<style lang="scss" scoped>

</style>