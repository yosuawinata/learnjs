const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add() {
            return this.counter = this.counter + 1
            // you can replace like in below
            // this.counter++
        },
        reduce() {
            return this.counter--
            // you can replace like in below
            // this.counter = this.counter - 1
        }
    }
});

app.mount('#events')