import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
import createPersistedState from 'vuex-persistedstate';

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                title: "",
                content: "",
                color: "",
                memo: [

                ],
                // 検索結果
                search_memo: [

                ],
                seatch: false,
                alert: false,


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
                console.log(state.options)
                if (event.target.value === "Red") {
                    state.color = "#ffa3a3";
                    state.selected = 'Red'
                } else if (event.target.value === "Yellow") {
                    state.color = "#ffff93";
                } else if (event.target.value === "Green") {
                    state.color = "#adffad";
                } else if (event.target.value === "Pink") {
                    state.color = "#ffb7ff";
                } else if (event.target.value === "Purple") {
                    state.color = "#d6adff";
                } else if (event.target.value === "Blue") {
                    state.color = "#b2d8ff";
                }
            },
            cancel_form: function (state) {
                state.title = "";
                state.content = "";
                state.color = "";
            },
            add_memo: function (state) {
                if (state.title === "" || state.content === "") {
                    state.title = "";
                    state.content = "";
                    state.color = "";
                    return
                } else {
                    state.memo.push({ title: state.title, content: state.content, color: state.color, edit: false })
                    state.title = "";
                    state.content = "";
                    state.color = "";
                }
            },
            search_memo: function (state) {
                state.search = true;
                if (event.target.value === "") {
                    state.search_memo = []
                    state.search = false;
                    return
                }
                const keyword = event.target.value
                let result = state.memo.filter((item) => {
                    // return (item.title === keyword || item.content === keyword)
                    return (!item.title.indexOf(keyword) || !item.content.indexOf(keyword))
                })
                state.search_memo = result
                console.log(result)
                console.log(state.search_memo)
            },
            init_form: function (state) {
                state.color = "#fafafa";
            },
            edit_change: function (state, i) {
                console.log(state.memo[i].edit)
                state.memo[i].edit = !state.memo[i].edit
            },
            del_memo: function (state, i) {
                console.log(i)
                state.memo.splice(i, 1);
                state.alert = !state.alert;
                setTimeout(() => {
                    state.alert = !state.alert;
                }, 3000);
            },



        },
        plugins: [
            createPersistedState(),
        ]
    })
}

export default createStore