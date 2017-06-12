<template>
    <div>
        <div v-text="msg"></div>
        <button v-on:click="getData">Get Data!!</button>
        <br> Firstname
        <input type="text" v-model="firstName"> Lastname
        <input type="text" v-model="lastName"> Age
        <input type="text" v-model="age">
        <button v-on:click=add>Push!</button>
        <table style="width:100%" border=1 v-if="items.length!==0">
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th></th>
            </tr>
            <tr v-for="(item,index) in items">
                <td v-text="item.Firstname"></td>
                <td v-text="item.Lastname"></td>
                <td v-text="item.Age"></td>
                <td>
                    <button v-on:click="removeData(index)">Remove!</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [], firstName: '', lastName: '', age: ''
        }
    },
    computed: {
        msg() {
            return 'Hello Vue!!'
        }
    },
    methods: {
        getData() {
            this.items.push(
                {
                    Firstname: 'Jill',
                    Lastname: 'Smith',
                    Age: '50'
                }, {
                    Firstname: 'Eve',
                    Lastname: 'Jackson',
                    Age: '94'
                });
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
        }
    }
}
</script>