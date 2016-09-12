const greetingList =  [
    {
        id: 1,
        content: 'Learn React'
    },
    {
        id: 2,
        content: 'Do laundry'
    }
];

export default function greetings(state = greetingList, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state
        case 'DECREMENT':
            return state
        default:
            return state
    }
}