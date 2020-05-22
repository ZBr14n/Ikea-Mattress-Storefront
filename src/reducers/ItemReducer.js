
const initialState = {
    // how many user clicks of the same item and how many unique items on cart (for cart icon counter)
    count: 0,

    // get the index of each mattress to be populated on cart/checkout page
    uniqueID: null
    
}


export default function ItemReducer(state = initialState, action){
    switch(action.type){
        case "GET_COUNT":
            return{
                ...state,
                count: state.count + 1
            }
            
        case "GET_ID":
            return {
                ...state,
                uniqueID: state.uniqueID
            };
            
        default:
            return state
    }
}