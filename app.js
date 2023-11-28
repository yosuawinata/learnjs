const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
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
        }
        else if (box === 'B') {
            this.boxBSelected = !this.boxBSelected;
        } else if (box === 'C') {
            this.boxCSelected = !this.boxCSelected;
        }

       } 
    }
});

app.mount('#styling');