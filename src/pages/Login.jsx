import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
    const [form, setForm ] = useState({
        useremail:'',
        userpassword:''
    })

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = async()=>{
        try {
            const res = await axios.post("http://localhost:7000/auth/login",form)
            console.log(res.data)
            if(res.data.success){
                alert(res.data.message)
                localStorage.setItem("mytoken",res.data.token)
            }else{
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(localStorage.getItem("myToken"))

  return (
    <div>
        <Box sx={{display:'flex', justifyContent:'space-around', m:4}}>

            <TextField id="outlined-basic" 
            label="Email"
            variant="outlined"
            name="useremail"
            onChange={handleChange} 
            value={form.useremail}
            />

            <TextField id="outlined-basic" 
            label="Password"
            variant="outlined"
            name="userpassword"
            onChange={handleChange} 
            value={form.userpassword}
            />

            <Button variant="contained" onClick={handleSubmit}>Add User</Button>

        </Box>
    </div>
  )
}
