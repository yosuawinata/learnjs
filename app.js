const app =  Vue.createApp({
    data() {
        return {
            // display my name
            name: 'Yosua Winata',
            age: 40,
            ageIn5Y: 40+5
        }
    },
    methods: {
        randomNo() {
            return Math.random();
        }
    }
});

// mounting this script
app.mount('#assignment')