import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

export default function AddPost() {
    const [form, setForm] = useState({
        caption:"",
        image:null
    })

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("caption", form.caption)
            formData.append("image", form.image)
            const res = await axios.post("http://localhost:7000/post/create",formData,{
                headers:{
                   "auth-token": localStorage.getItem("mytoken")
                }
            })
            if(res.data.success){
                alert("Data added to db")
            }else{
                alert(res.data.message)
            }
            
        } catch (error) {
            alert(error)
        }
    }

  return (
    <div >
        <form onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic" 
        label="Caption" 
        variant="outlined"
        value={form.caption}
        onChange={(e)=>setForm({...form,caption: e.target.value})}
        />

        <TextField 
        type="file"
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined"
        onChange={(e)=>setForm({...form,image: e.target.files[0]})}
         />

        <Button variant="contained" type='submit'>Submit</Button>
        </form>
    </div>
  )
}
