<template>
    <div>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            stats: [
                { label: 'A', value: 100 },
                { label: 'B', value: 100 },
                { label: 'C', value: 100 },
                { label: 'D', value: 100 },
                { label: 'E', value: 100 },
                { label: 'F', value: 100 }
            ]
        }
    },
    computed: {
        msg() {
            return 'Alert!!'
        },
        points: function () {
            var total = this.stats.length
            return this.stats.map(function (stat, i) {
                var point = valueToPoint(stat.value, i, total)
                return point.x + ',' + point.y
            }).join(' ')
        }
    }
}
</script>