const initialState = {
    benh: [],
    sobenh: {}
  };
const diseseaReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'COUNT_DISESEA':
            let newSoBenh = state.sobenh
            newSoBenh = action.payload
            return {
                ...state,
                sobenh: newSoBenh
            };
        case 'GET_DISESEA':
        
            return state;
        default:
            return state;
    }
}
export default diseseaReducer
