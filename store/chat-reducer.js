

let initialState = {
    items: [
        {
            community: 'КБ-4',
            message: [{
                id:1, element: "Hi"
            }]
        },
        {
            community: 'КБ-2',
            message: [{
                id:1, element: "Hi"
            }]
        },
        {
            community: 'КБ-3',
            message: [{
                id:1, element: "Hi"
            }]
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