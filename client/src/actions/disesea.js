export const countDisesea = (disesea)=>{
    return{
        type: 'COUNT_DISESEA',
        payload: disesea,
    }
}
export const getDisesea = (disesea)=>{
    return{
        type: 'GET_DISESEA',
        payload: disesea,
    }
}