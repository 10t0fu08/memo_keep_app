import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                memo: [
                    {
                        id: '1',
                        title: 'title 1',
                        content: ['memo content 1-1', 'memo content1-2', 'memo content1-3', 'memo content 1-1', 'memo content1-2', 'memo content1-3'],
                        background: "#333"
                    },
                    {
                        id: '2',
                        title: 'title 2',
                        content: 'memo content 2',
                        background: "#333"
                    },
                    {
                        id: '3',
                        title: 'title 3',
                        content: 'memo content 3',
                        background: "#333"
                    },
                    {
                        id: '4',
                        title: 'title 4',
                        content: 'memo content 4',
                        background: "#333"
                    },
                    {
                        id: '5',
                        title: 'title 5',
                        content: 'memo content 5',
                        background: "#333"
                    },
                    {
                        id: '6',
                        title: 'title 2',
                        content: 'memo content 2',
                        background: "#333"
                    },
                    {
                        id: '7',
                        title: 'title 2',
                        content: 'memo content 2',
                        background: "#333"
                    },
                    {
                        id: '8',
                        title: 'title 2',
                        content: 'memo content 2',
                        background: "#333"
                    },
                    {
                        id: '9',
                        title: 'title 2',
                        content: 'memo content 2',
                        background: "#333"
                    },
                    {
                        id: '10',
                        title: 'title 2',
                        content: 'memo content 2',
                        background: "#333"
                    },

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