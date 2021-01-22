import React,{useState} from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

export const UserPage = () => {

    const [userName,setUserName]=useState(sessionStorage.getItem("userName"));
    const [password,setPassword]=useState(sessionStorage.getItem("password"))
    const [showPassword,setShowPassword]=useState(false)
    const [redirect,setRedirect]=useState(false);
    const [newPassword,setNewPassword]=useState(null)
    const NewPassword=(e)=>{
        // console.log(e.target.value)
        setNewPassword(e.target.value)
        console.log(newPassword)
    }
    const saveNewPassword=()=>{

        if(NewPassword){
            
            sessionStorage.setItem("password",newPassword)
            setShowPassword(false);
        }

    }
    
    if(redirect){
        return(
            <Redirect to='/'/>
        )
    }


    return (
        <div>
            <Container>
                <Grid item xs={12} md={6}>
                <Typography variant="h6">
                 UserName  : {userName}
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h6">
                {showPassword ?<> 
                New Password  : <input type="text" defaultvalue={password} onChange={(e)=>NewPassword(e)} style={{width:"50%"}} />
                </>
                :
                <>
                Password : <input type="password" value={password} style={{width:"50%",border:'none'}} disabled/>
                </>
                
                } 
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <div>
                {!showPassword ? <Button variant="contained" style={{margin:'15px'}} onClick={()=>setShowPassword(true)}>
                    Change Password
                </Button>
                :
                <Button variant="contained" style={{margin:'15px'}} onClick={saveNewPassword}>
                    Save Password
                </Button>
                }
                 <Button variant="contained" onClick={()=>setRedirect(true)}>
                    Logout
                </Button>
                </div>
                </Grid>
          </Container>
        </div>
    )
}
