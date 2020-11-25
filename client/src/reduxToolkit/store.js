import {configureStore} from '@reduxjs/toolkit'
import diseseaReducer from './Slice/diseseaSlice'

const rootReducer = {
    disesea : diseseaReducer
}
const store = configureStore({
    reducer: rootReducer
})
export default store