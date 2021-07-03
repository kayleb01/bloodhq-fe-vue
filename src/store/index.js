import { createStore } from 'vuex'

export default createStore({
    state: {

    },
    mutations: {
        nextBtn() {
            this.step += 1
        },
        prevBtn() {
            this.step -= 1
        },
        doneBtn() {
            alert('Done')
        }
    },
    actions: {},
    modules: {}
})