import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleValues(){
        let user = {
            email,
            password
        }
        console.log(user);
    }

    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} height={"80vh"} >
            <Typography variant="h3" component="h2">Register</Typography>;
            <TextField 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width: "30%", margin:"15px"}} 
            id="outlined-basic" label="Email" 
            variant="outlined" />
            <TextField 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width: "30%"}} 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" />
            <Button 
            onClick={handleValues}
            style={{width: "30%", margin:"15px"}} 
            variant="contained">
                Register
            </Button>
        </Box>
    );
};

export default RegisterForm;