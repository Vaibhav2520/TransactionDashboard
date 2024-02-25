import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "../styles/monthpicker.scss"


const Months = [
    {label:'January',startDate:"01-01-2022",endDate:"01-31-2022"},
    {label:'Febuary',startDate:"02-01-2022",endDate:"01-28-2022"},
    {label:'March',startDate:"03-01-2022",endDate:"01-31-2022"},
    {label:'April',startDate:"04-01-2022",endDate:"04-30-2022"},
    {label:'May',startDate:"05-01-2022",endDate:"05-31-2022"},
    {label:'June',startDate:"06-01-2022",endDate:"06-30-2022"},
    {label:'July',startDate:"07-01-2022",endDate:"07-31-2022"},
    {label:'August',startDate:"08-01-2022",endDate:"08-31-2022"},
    {label:'September',startDate:"09-01-2022",endDate:"09-30-2022"},
    {label:'October',startDate:"10-01-2022",endDate:"10-31-2022"},
    {label:'November',startDate:"11-01-2022",endDate:"11-30-2022"},
    {label:'December',startDate:"12-01-2022",endDate:"12-31-2022"},
];
const Monthpicker = (props) => {
  const {setStartDateMonth, setEndDateMonth} = props
  return (
    <div className="month-picker"  >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Months}
      getOptionLabel={option => option.label}
      defaultValue={Months[2]}
      sx={{ width: 200 }}
      onChange= {(e, value)=>{
        console.log("month.....",value);
        setStartDateMonth(value?.startDate);
        setEndDateMonth(value?.endDate);
      }}
      renderInput={(params) => <TextField {...params} label="Select Month"/>}
    />
    </div>
  );
}

export default Monthpicker