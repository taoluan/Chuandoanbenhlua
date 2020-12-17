import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import diseseaApi from '../../../api/diseseaApi'
const AutoCompleteFrom = (props) => {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchAllTrieuChung = async() =>{
        const respose = await diseseaApi.getAllTrieuChungAdmin()
        setData(respose)
    }
    (props.option === "trieuchung")
    && fetchAllTrieuChung()
}, [])
  const options = (props.option === "trieuchung") 
  ? data.map((option) => {
        const firstLetter = option.trieuchung[0].toUpperCase()
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        }
      })
  : dataViTri.map((option) => {
    const firstLetter = option.vitri[0].toUpperCase()
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    }
  })
  return (
    <Autocomplete
      className="p-0 m-0"
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => props.option === "trieuchung" ? option.trieuchung : option.vitri}
      style={{ width: props.option === "trieuchung" ? 350 : 150 }}
      renderInput={(params) => <TextField {...params}  label={props.option === "trieuchung" ? "Triệu chứng mới" : "Vị trí mới"} variant="outlined" />}
      onChange={(e,value)=>{
        if(value !== null){
      props.option === "trieuchung" 
      ? props.callOnChangeTT({ten_trieuchung: value.trieuchung , vitri: value.vitri , uri_trieuchung: value.uri_trieuchung}) 
      : props.callOnChangeVT(value.vitri)}
        }
      }
    />
  );
}
const dataViTri = [
  { vitri: 'Lá' },
  { vitri: 'Thân' },
  { vitri: 'Rễ' },
  { vitri: 'Bẹ lá' },
  { vitri: 'Quần thể' },
  { vitri: 'Gốc' },
  { vitri: 'Cổ bông' },
  { vitri: 'Bông' },
  { vitri: 'Chóp lá' },
  { vitri: 'Chồi' },
  { vitri: 'Hạt' },
  { vitri: 'Vỏ hạt' },
  { vitri: 'Ống rạ' },
  { vitri: 'Phiến lá' }
]
export default React.memo(AutoCompleteFrom)