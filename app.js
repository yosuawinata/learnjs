const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    computed: {
        // this way may be helpful to more complex dynamic class code
        boxAClasses() {
            return { active: this.boxASelected };
        },
        boxBClasses() {
            return { active: this.boxBSelected };
        },
        boxCClasses() {
            return { active: this.boxCSelected };
        }
    },
    methods: {
       boxSelected(box) {

        // instead of give value true for check box,
        // we can give value toggle, so, the click can be changed.
        // if (box === 'A') {
        //     this.boxASelected = true;
        // } else if (box === 'B') {
        //     this.boxBSelected = true;
        // } else if (box === 'C') {
        //     this.boxCSelected = true;
        // }

        // give the remark if value has selected
        if (box === 'A') {
            this.boxASelected = !this.boxASelected;
            counter: 0;
            name: '';
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
        }
        // setName method using default param
        // setName(event) {
        //     this.name = event.target.value;
        // },
        // set method using two param
         
    }
});

// app.mount('#styling');
app.mount('#events')
