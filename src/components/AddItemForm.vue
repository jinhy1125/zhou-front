<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="名称">
            <el-input v-model="form.name" placeholder="输入名称" />
        </el-form-item>
        <el-form-item label="价格">
            <el-input v-model="form.price" placeholder="输入价格" />
        </el-form-item>
        <el-form-item label="购买日期">
            <el-date-picker v-model="form.purchaseDate" type="date" placeholder="选择日期" style="width: 100%" />
        </el-form-item>
        <el-form-item label="过期时间">
            <el-date-picker v-model="form.expirationDate" type="date" placeholder="选择日期" style="width: 100%" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">新建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import axios from '@/plugins/axios'
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    price: '',
    purchaseDate: '',
    expirationDate: '',
})

const onSubmit = () => {
    axios.post('item', form)
        .then(response => {
            console.log(response.data)
        }).catch(error => console.error(error));
}
</script>
  