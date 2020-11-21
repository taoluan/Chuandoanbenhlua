/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { MDBBtn,MDBContainer, MDBCol } from 'mdbreact';
import Icon from '../UndrawDesigner/IconSVG'
import { useHistory ,useLocation } from 'react-router-dom';

export default function Search() {
    const [textSearch, setTextSearch] = useState()
    let location = useLocation();
    let history = useHistory();
    const checkSearch = ()=>{
        (textSearch)
            ? history.push("/chuandoan/"+textSearch)
            : alert(12)
      }
    return (
        <>
            <MDBCol md="9" sm="12" size="12" >
                <Autocomplete
                id="highlights-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                onChange={(e,value)=>{setTextSearch(value.title)}}
                renderInput={(params) => (
                    <TextField {...params} label="Nhập triệu chứng trên lúa ?" variant="outlined" margin="normal" />
                )}
                renderOption={(option, { inputValue }) => {
                    const matches = match(option.title, inputValue);
                    const parts = parse(option.title, matches);

                    return (
                    <div>
                        {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                            {part.text}
                        </span>
                        ))}
                    </div>
                    );
                }}
                />
            </MDBCol>
            <MDBCol  md ="2" sm="12" size="12" className="d-flex align-items-center pr-0 mt-1 justify-content-sm-start justify-content-md-center"> 
                <MDBBtn tag="a" size="md" floating="true" className="teal lighten-3 z-depth-0 d-flex justify-content-center" onClick={checkSearch} >
                    <Icon.SearchIcon/>
                </MDBBtn>
            </MDBCol>
        </>
    );
}
const top100Films = [
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
