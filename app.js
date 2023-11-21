const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            return this.counter = this.counter + num;
        },
        checkNum() {
            if (this.counter < 37) {
                return 'Not there yet';
            }
            else if (this.counter > 37) {
                return 'Too much!'
            }
        }
    },
    watch: {
       counter(value) {
            const that = this;
            // set timer
            setTimeout(function() {
                that.counter = 0;
            }, 5000) //reset value to zero after 5s;
        }
    }
});

app.mount("#assignment")