<template>
    <div class="order-mgmt content-page">
        <el-text>訂單管理 - 篩選條件</el-text>
        <el-form :model="form" label-width="120px">
            <!-- <el-form-item label="Activity name">
            <el-input v-model="form.name" />
            </el-form-item> -->
            <el-form-item label="經銷商總類">
            <el-select v-model="form.dealerType" placeholder="請選擇經銷商總類">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>            
            </el-form-item>

            <el-form-item label="訂單狀態">
            <el-select v-model="form.orderStatus" placeholder="請選擇狀態">
                <el-option label="a" value="shanghai" />
                <el-option label="b" value="beijing" />
            </el-select>
            </el-form-item>

            <el-form-item label="時間">
            <el-col :span="8">
                <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
                />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="8">
                <el-time-picker
                v-model="form.date2"
                placeholder="Pick a time"
                style="width: 100%"
                />
            </el-col>
            </el-form-item>
        </el-form>
        <div class="algin-right">
            <el-button type="primary" @click="onSubmit" >搜尋</el-button>
        </div>
        <template v-if="isResultTableRefresh">
            <OrderResultTable/>
        </template>        
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, 
        ElInput, ElButton,
     ElCol, ElTimePicker, ElText, 
} from 'element-plus';
import OrderResultTable from '@/components/OrderResultTable.vue';

const isResultTableRefresh = ref(false);

const showResultTable = () => {
    isResultTableRefresh.value = true;
};

const onSubmit = () => {
    showResultTable();
}

// do not use same name with ref
const form = reactive({
  name: '',
  dealerType: '',
  date1: '',
  date2: '',
  orderStatus: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<style lang="scss" scoped>
.order-mgmt {
    .el-form {
        height: fit-content;
    }
}
.align-right {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: right;
    text-align: right;
    position: relative;
    .el-button, button {
        margin: auto 0;;
    }
}
</style>