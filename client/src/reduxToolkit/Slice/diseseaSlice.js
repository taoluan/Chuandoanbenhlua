const { createSlice,createAsyncThunk } = require("@reduxjs/toolkit");
import diseseaApi from '../../api/diseseaApi'
export const getCountBenh = createAsyncThunk('disesea/getCountBenh',async(params,thunkAPI)=>{
    const currentCountBenh = await diseseaApi.thongkeLoaiBenh()
    return currentCountBenh;
}
)

const diseseaSlice = createSlice({
    name: 'disesea',
    initialState: {
        benh: [],
        sobenh: {}
    },
    reducers:{
        countDisesea:(state,action)=>{
            state.sobenh = action.payload
        }
    },
    extraReducers:{
        [getCountBenh.fulfilled]:(state,action)=>{
            state.sobenh = action.payload
        }
    }
})
const { actions, reducer} = diseseaSlice;
export const {countDisesea} = actions;
export default reducer;