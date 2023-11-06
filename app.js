const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            return this.counter = this.counter + 1
            // you can replace like in below
            // this.counter++
        },
        reduce(num) {
            return this.counter--
            // you can replace like in below
            // this.counter = this.counter - 1
        }
    }
});

app.mount('#events')