const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        }
    },
    methods: {
        // setName method using default param
        // setName(event) {
        //     this.name = event.target.value;
        // },
        // set method using two param
        setName(event, lastName) {
            return this.name = event.target.value + ' ' + lastName;
        },
        add(num) {
            return this.counter = this.counter + num;
            // you can replace like in below
            // this.counter++
        },
        reduce(num) {
            return this.counter = this.counter - num;
            // you can replace like in below
            // this.counter--
        }
    }
});

app.mount('#events')