const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
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