import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import diseseaApi from '../../../api/diseseaApi'
export default function AutoCompleteFrom() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchAllTrieuChung = async() =>{
        const respose = await diseseaApi.getAllTrieuChung()
        setData(respose)
    }
    fetchAllTrieuChung()
}, [])
  const options = data.map((option) => {
    const firstLetter = option.ten_trieuchung[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      className="p-0 m-0"
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.ten_trieuchung}
      style={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Triệu chứng mới" variant="outlined" />}
    />
  );
}
