const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            // the data property to show if the field name is hit by enter (listening on keyboard event)
            confirmedName: '' 
        }
    },
    methods: {
        // this method is paired for listening keybord event when the enter button is pressed.
        confirmedInput() {
            // the goal of confirmedInput is set to this.confirmedName is filled by this.name
            this.confirmedName = this.name;
        },
        // using javascript modifier
        // if you use code event modifier from vue, default param can be removed.
        submitForm() {
            // add this to modify prevent default (vanilla js)
            // event.preventDefault();
            alert('Submitted');
        },
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