const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            // the data property to show if the field name is hit by enter (listening on keyboard event)
            confirmedName: '' 
        }
    },
    // this property like methods, but this is only re-executed if there any updated data dependencies
    computed: {
        // we treat the computed properties like data, not a like function
        fullname() {
            console.log('Running again from computed...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Winz';
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
        outputFullname() {            
            // to prove that the performance is impacted when the use method, we can use the log in console.
            // and that way the method is not the best solution to outputting some dynamically calculated value like this.
            console.log('Running again...');
            // to only display if first name in input text is filled, so last name will be displayed.
            // if the first name is not displayed, so, last name not displayed too.
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Winz';

        },
        // setName method using default param
        // setName(event) {
        //     this.name = event.target.value;
        // },
        // set method using two param
        setName(event, lastName) {
            // return this.name = event.target.value + ' ' + lastName;
            return this.name = event.target.value;
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
        },
        resetInput() {
            // vanillaJs to make function for reset input button
            // document.querySelector('input').value = '';
            this.name = '';
        }
    }
});

app.mount('#events')