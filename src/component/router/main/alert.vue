<template>
    <div>
        <div v-text="msg"></div>
        <el-alert title="success" type="success">
        </el-alert>
        <el-alert title="info" type="info">
        </el-alert>
        <el-alert title="warning" type="warning">
        </el-alert>
        <el-alert title="error" type="error">
        </el-alert>
    </div>
</template>
<script>
export default {
    computed: {
        msg() {
            return 'Alert!!'
        }
    }
}
</script>