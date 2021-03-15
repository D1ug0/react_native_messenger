

let initialState = {
    items: [
        {
            community: 'КБ-4'
        },
        {
            community: 'КБ-2'
        },
        {
            community: 'КБ-3'
        }
    ]
}

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default chatReducer;