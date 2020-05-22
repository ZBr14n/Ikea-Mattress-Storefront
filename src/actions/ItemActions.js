const GET_COUNT = 'GET_COUNT'
const GET_ID = 'GET_ID'



export const getCount = () => {
    return {type: GET_COUNT};    
}

export const getID = () => {
    return{
        type: GET_ID,
        payload: 10
    }
}