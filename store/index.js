import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                memo: [
                    // メモのタイトル
                    { title: 'タイトル' },
                    // メモのコンテンツ
                    { content: 'ああああ' }
                ]
            }
        },
        mutations: {
            set_title: function (state) {
                state.memo.title = event.target.value
                console.log(state.memo.title)
            }
        }
    })
}

export default createStore