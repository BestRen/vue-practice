<template>
    <div>
        <div v-text="msg"></div>
        <button v-on:click="getData">Get Data!!</button>
        <br> Firstname
        <input type="text" v-model="firstName"> Lastname
        <input type="text" v-model="lastName"> Age
        <input type="text" v-model="age">
        <button v-on:click=add v-if="show">Push!</button>
        <button v-on:click=save v-if="!show">Save!</button>
        <table style="width:100%" border=1 v-if="items.length!==0">
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th></th>
                <th></th>
            </tr>
            <tr v-for="(item,index) in items">
                <td v-text="item.Firstname"></td>
                <td v-text="item.Lastname"></td>
                <td v-text="item.Age"></td>
                <td>
                    <button v-on:click="removeData(index)">Remove!</button>
                </td>
                <td>
                    <button v-on:click="edit(index)">Edit!</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>

class util {
    edit(index) {
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
            this.items.splice(getIndex, 1);
        },
        edit: Edit.edit,
        save: Edit.save
    }
}
</script>