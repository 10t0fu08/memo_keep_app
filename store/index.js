import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                title: "",
                content: "",
                color: "",
                memo: [
                    // {
                    //     id: '1',
                    //     title: 'title 1',
                    //     content: 'memo content 1',
                    //     background: "#333"
                    // },                   
                ]
            }
        },
        mutations: {
            set_title: function (state) {
                state.title = event.target.value
                console.log(state.title)
            },
            set_content: function (state) {
                state.content = event.target.value
                console.log(state.content)
            },
            set_color: function (state) {
                if (event.target.value === "Red") {
                    state.color = "#ffa3a3";
                } else if (event.target.value === "Yellow") {
                    state.color = "#ffff93";
                } else if (event.target.value === "Green") {
                    state.color = "#99ff99";
                }
                // state.color = event.target.value
                // console.log(state.color)
            },
            cancel_form: function (state) {
                state.title = "";
                state.content = "";
                state.color = "";
                console.log(state.title)
                console.log(state.content)
                console.log(state.color)
            },
            add_memo: function (state) {
                state.memo.push({ title: state.title, content: state.content, color: state.color, })
                state.title = "";
                state.content = "";
                state.color = "";
                console.log(state.title)
                console.log(state.content)
                console.log(state.color)
            }

        }
    })
}

export default createStore