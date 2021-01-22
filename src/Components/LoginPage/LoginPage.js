import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { Container,Grid } from '@material-ui/core';
import _ from 'lodash'
import { useForm } from 'react-hook-form'
import {
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom'
import { MyErrorModal } from '../../Utils/Error';
import './UI.css';


const LoginPage = () => {
    const [error, setError] = useState(false);
    const { register, handleSubmit, errors } = useForm()
    const [status, setStatus] = useState(null)
    
    const [password,setPassword]=useState(sessionStorage.getItem("password"))
    const [redirectToLogin,setRedirectToLogin] = useState(false);
    const [userName,setUserName]=useState(sessionStorage.getItem("userName"));

    useEffect(() => {
        if(userName!=='Shubham' && password!=="123"){
            setRedirectToLogin(false);
       }    
    }, [])

    const onSubmit = function onSubmit(data, e) {
        e.preventDefault();
        if(data){
            setUserName(sessionStorage.setItem("userName",data.userName))
            setUserName(sessionStorage.setItem("password",data.password))
            
                if(data.userName=='Shubham' && data.password=='123' ){
                setRedirectToLogin(true);
                }
                else{
                    setError(true);
                }
    }

    }

    
    // if(userName && password ){
    //             setRedirectToLogin(true);
    //     }   
 
    // console.log(userName)
       if(redirectToLogin){
        return(<Redirect to={`/dashboard`}/>)
    }
    

    const cancelServerErrorModal = function cancelServerErrorModal() {
        setError(false);
    }





    return (        
            <>
            {error &&
                <MyErrorModal title={status} positiveActionText={"close"} content={"Incorrect userName or Password"} redirect={cancelServerErrorModal} />
            }
            <div className="middleCenterClass">
                <div className="segment">
                    <div className="formContent">
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" name="userName" placeholder="Username" ref={register({ required: true })} />
                            </div>
                            {
                                errors && errors.userName ? 
                                <div className="errorDiv errorTxt ">User Name is Required</div>
                                    : null}
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                            </div>
                            {
                                errors && errors.password ? <> 
                                <div className="errorDiv errorTxt ">Password is Required</div>
                                </>
                                    : null}
                            <button className=" button" variant="contained" color="primary" fluid>
                                Login
                            </button>
                            {/* <button disabled className="ui button" >
                                Forgot Password ?
                            </button> */}
                        </form>
                    </div>


                </div>


            </div>

        </>

       
    )
}
export default LoginPage;
