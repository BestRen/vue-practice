<template>
    <div>
        <div v-text="msg"></div>
    </div>
</template>
<script>
export default {
    computed: {
        msg() {
            return 'Hello Vue test1!!'
        }
    }
}
</script>