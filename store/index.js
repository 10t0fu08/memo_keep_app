import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
import createPersistedState from 'vuex-persistedstate';

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                memo_flag: true,

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
            memo_check: function (state) {
                // console.log("run!")
                if (state.memo.length === 0) {
                    state.memo_flag = false
                } else if (state.memo.length !== 0) {
                    state.memo_flag = true
                }
                // console.log(state.memo_flag)
            },

            set_title: function (state) {
                state.title = event.target.value
                // console.log(state.title)
            },
            set_content: function (state) {
                state.content = event.target.value
                // console.log(state.content)
            },
            set_color: function (state) {
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
            set_edit_title: function (state, id) {
                const memoId = state.memo.map((a) => {
                    return a.id
                }).indexOf(id);
                state.memo[memoId].title = event.target.value;
            },
            set_edit_content: function (state, id) {
                const memoId = state.memo.map((a) => {
                    return a.id
                }).indexOf(id);
                state.memo[memoId].content = event.target.value;
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
                    let last_id = 0
                    if (state.memo.length !== 0) {
                        last_id = state.memo[state.memo.length - 1].id
                    }
                    state.memo.push({ id: last_id + 1, title: state.title, content: state.content, color: state.color, edit: false })
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
                let find_keyword = new RegExp(keyword)
                let result = state.memo.filter((item) => {
                    return (find_keyword.test(item.title) || find_keyword.test(item.content))
                })
                state.search_memo = result

            },
            init_memo: function (state) {
                state.title = "";
                state.content = "";
                state.color = "";
                state.search = false;

                let result = state.memo.map((item) => {
                    return item.edit = false
                })
            },
            edit_change: function (state, id) {
                // console.log(state.memo[i].edit)
                const memoId = state.memo.map((a) => {
                    return a.id
                }).indexOf(id);
                state.memo[memoId].edit = !state.memo[memoId].edit
                // console.log(state.memo[memoId].edit)
            },
            edit_search_change: function (state, id) {
                // console.log(state.memo[i].edit)
                const memoId = state.search_memo.map((a) => {
                    return a.id
                }).indexOf(id);
                state.search_memo[memoId].edit = !state.search_memo[memoId].edit
            },
            del_memo: function (state, i) {
                state.memo.splice(i, 1);
                // state.alert = !state.alert;
                // setTimeout(() => {
                //     state.alert = !state.alert;
                // }, 3000);
            },
        },
        plugins: [
            createPersistedState(),
        ]
    })
}

export default createStore