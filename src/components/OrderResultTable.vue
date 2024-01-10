<template>
    <div class="order-result-table">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="orderNo" label="訂單編號" width="120" />
            <el-table-column prop="orderStatus" label="訂單狀態" width="120" />
            <el-table-column prop="dealerType" label="經銷商狀態" width="120" />
            <el-table-column prop="phone" label="手機號碼" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
            <template #default>
                <el-button link type="primary" size="small">編輯</el-button>
            </template>
            </el-table-column>
        </el-table>
</div>
</template>
  
  <script lang="ts" setup>
  const handleClick = () => {
    console.log('click')
  }
  
  const tableData = [
    {
      date: '2016-05-03',
      orderNo: '111111',
      orderStatus: 'California',
      dealerType: 'Los Angeles',
      phone: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-02',
      orderNo: '222222',
      orderStatus: 'California',
      dealerType: 'Los Angeles',
      phone: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    },
    {
      date: '2016-05-04',
      orderNo: '333333',
      orderStatus: 'California',
      dealerType: 'Los Angeles',
      phone: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-01',
      orderNo: '44444',
      orderStatus: 'California',
      dealerType: 'Los Angeles',
      time: 'No. 189, Grove St, Los Angeles',
      phone: 'CA 90036',
      tag: 'Office',
    },
  ]
  </script>
  

<style lang="scss" scoped>

</style>