const { createSlice,createAsyncThunk } = require("@reduxjs/toolkit");
import diseseaApi from '../../api/diseseaApi'
export const getCountBenh = createAsyncThunk('disesea/getCountBenh',async(params,thunkAPI)=>{
    const currentCountBenh = await diseseaApi.thongkeLoaiBenh()
    return currentCountBenh;
}
)
const checkArray = (list, object)=>{
    let i;
    console.log(list)
    for (i = 0; i < list.length; i++) {
        if (list[i].ten_trieuchung === object.ten_trieuchung && list[i].vitri === object.vitri) {
            return true;
        }
    }
    return false;
}
const diseseaSlice = createSlice({
    name: 'disesea',
    initialState: {
        benh: [],
        sobenh: {},
        chuandoan: [],
        trieuchungbandau: {}
    },
    reducers:{
        countDisesea:(state,action)=>{
            state.sobenh = action.payload
        },
        addDisesea:(state,action)=>{
            state.chuandoan.push(action.payload)
        },
        addFirstTrieuChung:(state,action)=>{
            state.trieuchungbandau = action.payload
        }
    },
    extraReducers:{
        [getCountBenh.fulfilled]:(state,action)=>{
            state.sobenh = action.payload
        }
    }
})
const { actions, reducer} = diseseaSlice;
export const {countDisesea ,addDisesea,addFirstTrieuChung} = actions;
export default reducer;