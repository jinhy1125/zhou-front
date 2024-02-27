<template>
    <el-button @click="addItemFormDialogVisible = true">新增</el-button>
    <el-table ref="tableRef" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="price" label="价格" />
        <el-table-column prop="purchaseDate" label="购买日期" />
        <el-table-column prop="expirationDate" label="过期时间" />
    </el-table>
    <el-dialog v-model="addItemFormDialogVisible" title="新增物品" width="800">
        <AddItemForm ref="itemFormRef" />
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="addItemFormDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="submit">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx, TableInstance } from 'element-plus'

const addItemFormDialogVisible = ref(false)

const itemFormRef = ref(null)

interface Item {
    id: string
    name: string
    price: string
    purchaseDate: Date
    expirationDate: Date
}

const tableRef = ref<TableInstance>()

const submit = () => {
    console.log(itemFormRef);
}

const tableData: Item[] = [
]
</script>
  