<template>
    <div>
        <div v-text="msg"></div>
        <el-button type="primary">Call Ajax</el-button>
    </div>
</template>
<script>
export default {
    computed: {
        msg() {
            return 'Ajax!!'
        }
    }
}
</script>