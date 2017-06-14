<template>
    <div>
        <div v-text="msg"></div>
        <button v-on:click="getData">Get Data!!</button>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    Firstname
                    <input type="text" v-model="firstName">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">Lastname
                    <input type="text" v-model="lastName">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">Age
                    <input type="text" v-model="age">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <button v-on:click=add v-if="show">Push!</button>
                    <button v-on:click=save v-if="!show">Save!</button>
                </div>
            </el-col>
        </el-row>
        <el-table :data="items" style="width: 100%">
            <el-table-column prop="Firstname" label="Firstname">
            </el-table-column>
            <el-table-column prop="Lastname" label="Lastname">
            </el-table-column>
            <el-table-column prop="Age" label="Age">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button v-on:click="removeData(scope.$index)" size="small" type="danger">Remove</el-button>
                    <el-button v-on:click="edit(scope.$index)" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>

class util {
    edit(index) {
        console.log('index: ', index);
        this.index = index;
        this.show = false;
        this.firstName = this.items[index].Firstname;
        this.lastName = this.items[index].Lastname;
        this.age = this.items[index].Age;
    }
    save() {
        if (this.firstName && this.lastName && this.age) {
            this.items[this.index].Firstname = this.firstName;
            this.items[this.index].Lastname = this.lastName;
            this.items[this.index].Age = this.age;
            this.firstName = '';
            this.lastName = '';
            this.age = '';
            this.show = true;
        }
    }
}
let Edit = new util();
export default {
    data() {
        return {
            items: [], firstName: '', lastName: '', age: '', show: true
        }
    },
    computed: {
        msg() {
            return 'Hello Vue!!'
        }
    },
    methods: {
        getData() {
            this.items = [
                {
                    Firstname: 'Jill',
                    Lastname: 'Smith',
                    Age: '50'
                }, {
                    Firstname: 'Eve',
                    Lastname: 'Jackson',
                    Age: '94'
                }];
        },
        add() {
            if (this.firstName && this.lastName && this.age) {
                this.items.push({
                    Firstname: this.firstName,
                    Lastname: this.lastName,
                    Age: this.age
                })
            }
        },
        removeData(getIndex) {
            console.log('getIndex: ', getIndex);
            this.items.splice(getIndex, 1);
        },
        edit: Edit.edit,
        save: Edit.save
    }
}
</script>