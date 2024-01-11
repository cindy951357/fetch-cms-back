<template>
    <div class="order-detail content-page">
        <h3>訂單詳情</h3>
        <el-form :model="orderModel" label-width="100px">
            <el-form-item label="訂單編號">
                <el-input v-model="orderModel.orderId" disabled />
            </el-form-item>

            <el-form-item label="訂單狀態">
            <el-date-picker
                v-model="orderModel.date"
                type="datetime"
                placeholder="Select date and time"
                :disabled="!isEditable"
            />
            </el-form-item>

            <el-form-item label="訂單狀態">
            <el-select v-model="orderModel.orderStatus" placeholder="訂單狀態" :disabled="!isEditable">
                <el-option :label="orderModel.orderStatus" :value="orderModel.orderStatus" />
            </el-select>
            </el-form-item>
            <el-form-item label="手機號碼">
                <el-input v-model="orderModel.phone" :disabled="!isEditable" />
            </el-form-item>
            <el-form-item>
                <el-button @click="onEditButtonClick" :disabled="isEditable">編輯</el-button>
                <el-button @click="onSaveButtonClick">儲存</el-button>
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
import { useModalStore } from '@/stores/modal';

const route = useRoute();
const currentEditOrder = useCurrentEditOrderStore();
const modalStore = useModalStore()

const initOrder = storeToRefs(currentEditOrder);
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

const onEditButtonClick = () => {
    isEditable.value = true;
}

const { confirmStr } = storeToRefs(modalStore);

const onSaveButtonClick = async() => {
    await popupConfimDialog();
}

const popupConfimDialog = () => {
        modalStore.openModal('save-confirm');

    if (confirmStr === 'confirm') {
        currentEditOrder.saveToDB(orderModel);
        isEditable.value = false;       
    } else {
        isEditable.value = true;
    }
}

</script>

<style lang="scss" scoped>

</style>