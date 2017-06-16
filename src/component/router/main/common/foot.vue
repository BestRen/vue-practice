<template>
    <footer class="app-footer">
        <span>{{msg}}</span>
    </footer>
</template>
<script>

export default {
    data() {
        return {
        }
    },
    computed: {
        msg() {
            let date = new Date();
            date = date.getFullYear() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getDate();
            return date + '     by Louis';
        }
    },
    methods: {
        menuControl() {
            if (this.status) {
                sliderMenuCtrl.dispatch('Hide')
            } else {
                sliderMenuCtrl.dispatch('Show')
            }
        }
    }
}
</script>