const app =  Vue.createApp({
    data() {
        return {
            // display my name & age
            name: 'Joshua',
            age: 40
        }
    },
    methods: {
        calcAge() {
            return this.age + 5;
        },
        randomNo() {
            // return number between 0 until 1
            return Math.random();
        }
    }
});

// mounting this script
app.mount('#assignment')