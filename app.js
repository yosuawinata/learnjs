// Manual javascript without Vue

// const inputEl = document.querySelector('input');
// const buttonEl = document.querySelector('button');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }


// buttonEl.addEventListener('click', addGoal)

// javascript with vuejs
// Vue.createApp({
//     data() {
//         return {
//             goals: [],
//             enteredValue: ''
//         };
//     },
//     methods: {
//         addGoal() {
//             this.goals.push(this.enteredValue);
//             this.enteredValue = '';
//         }
//     }
// }).mount('#app');

// javascript basic - section 2 - ch_14
const app = Vue.createApp({
    data() {
        return {
            // courseGoal: 'Finish the course and well understand about vue!',
            courseGoalA: 'Finish the course and learn Vue!',
            // courseGoalB: '<h3>Master Vue and build amazing apps!</h3>',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                // return 'Learning Vue!';
                return this.courseGoalA;
            } else {
                // return 'Mastering Vue!'
                return this.courseGoalB;
            }
        }
    }
});

// mounting to the index
app.mount('#user-goal')