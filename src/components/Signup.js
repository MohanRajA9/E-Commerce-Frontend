import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import *as yup from 'yup'
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import '../App.css'
import axios from 'axios';
import { API } from '../global.js'
import { useNavigate } from 'react-router-dom';

const userValidationSchema = yup.object({
    username: yup.string().required("fill the name?"),
    password: yup.string().min(8, "invalid password").required("fill the password?")
})



function Signup() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: userValidationSchema,
        onSubmit: (user) => {
            console.log("onSubmit", user)
            signup(user)
        }
    })

    const signup = (user) => {
        axios.post(`${API}/user/register`,user)
        .then((res)=>{
            console.log(res)
            // console.log(res.data.token)
            // localStorage.setItem("token",JSON.stringify(res.data.token))
            // localStorage.setItem("user_data",JSON.stringify(user))
            navigate("/")
        }).catch((error)=>{
            console.log(error)
        })
    }

    const [action, setAction] = useState("signup")
    return (
        <div className='container' >
            <div className='header' >
                <div className='text' >Signup</div>
                <div className='underline' ></div>
            </div>
            {/* <div className='inputs' >

                    {action === "Login" ? <div></div> : <div className='input' >
                        <label htmlFor='myName' >Name:  </label>
                        <input id='myName' type='text'  ></input>
                    </div>}

                    <div className='input' >
                        <label htmlFor='userName' >User Name:</label>
                        <input id='userName' type='text' ></input>

                    </div>
                    <div className='input' >
                        <label htmlFor='password' >Password:  </label>
                        <input id='password' type='password'  ></input>
                    </div>

                </div> */}

            <form onSubmit={formik.handleSubmit} >
                <br />
                <div className='loginComponents' >
                    <TextField id="username" label="Username" variant="outlined" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.username ? formik.errors.username : ""}
                    <br />
                    <TextField id='password' label='Password' variant='outlined' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.password ? formik.errors.password : ""}
                    <br />
                    <Button variant="contained" type="submit" >submit</Button>
                </div>
            </form>


            <div className='submit-container' >
                <div className={action === "Login" ? 'submit grey' : 'submit'} >Sign Up</div>
                <div className={action === "Sign Up" ? 'submit' : 'submit grey'} onClick={() => navigate("/")}>Login</div>
            </div>
        </div>
    )
}

export default Signup