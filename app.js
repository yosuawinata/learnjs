const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        }
    },
    methods:{
        showAlert() {
            alert('The alert will be displayed!');
        },
        saveInput(event) {
            this.output1 = event.target.value;
        },
        confirmInput() {
            this.output2 = this.output1;
        }
    }
});
app.mount('#assignment')