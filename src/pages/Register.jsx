import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [form, setForm ] = useState({
        username:'',
        useremail:'',
        userphone:'',
        userpassword:''
    })

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = async()=>{
        try {
            const res = await axios.post("http://localhost:7000/auth/register",form)
            console.log(res.data)
            if(res.data.success){
                alert("Data added succesfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <Box sx={{display:'flex', justifyContent:'space-around', m:4}}>
            <TextField id="outlined-basic" 
            label="Name"
            variant="outlined"
            name="username"
            onChange={handleChange} 
            value={form.username}
            />
            <TextField id="outlined-basic" 
            label="Email"
            variant="outlined"
            name="useremail"
            onChange={handleChange} 
            value={form.useremail}
            />
            <TextField id="outlined-basic" 
            label="Phone"
            variant="outlined"
            name="userphone"
            onChange={handleChange} 
            value={form.userphone}
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
