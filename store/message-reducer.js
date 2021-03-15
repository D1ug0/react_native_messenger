

let initialState = {
    items: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Как дела?'},
        {id: 4, message: 'Норм'},
        {id: 5, message: 'Как у тебя?'},
    ]
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default messageReducer;