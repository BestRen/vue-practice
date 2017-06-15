<template>
    <div>
        <div v-text="msg"></div>
        <div v-text="treeList"></div>
        <el-tree :data="treeList" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
        </el-tree>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            treeList: [
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        {
                            name: 'child folder',
                            children: [
                                { name: 'hello' },
                                { name: 'wat' }
                            ]
                        },
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                            name: 'child folder',
                            children: [
                                { name: 'hello' },
                                { name: 'wat' }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        }
    },
    computed: {
        msg() {
            return 'Tree View!!'
        }
    }
}
</script>