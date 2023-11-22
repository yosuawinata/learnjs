const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            return this.counter = this.counter + num;
        }
    },
    computed: {
        checking() {
            if (this.counter < 37) {
                return 'Not there yet';
            }
            else if (this.counter === 37) {
                return this.counter;
            }
            else {
                return 'Too much!';
            }
        }
    },
    watch: {
       checking() {
            console.log('Run from watcher..')
            const that = this;
            // set timer
            setTimeout(function() {
                that.counter = 0;
            }, 5000) //reset value to zero after 5s;
        }
    }
});

app.mount("#assignment")