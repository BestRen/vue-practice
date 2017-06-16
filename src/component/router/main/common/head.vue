<template>
    <header class="app-header">
        <i class="fa fa-bars" @click="menuControl"></i>
        <span class="page-title">{{pageName}}</span>
    </header>
</template>
<script>
import { sliderMenuCtrl } from 'Data/store';
export default {
    data() {
        return {
            pageName: 'Vue Demo'
        }
    },
    computed: {
        status() {
            return sliderMenuCtrl.state.status
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
