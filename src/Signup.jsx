import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Signup(){
    return(
        <>
         <div className="credential-box">   
         <Typography variant="h8" style={{color:'red'}} gutterBottom>Welcome to the todolist. Please singup below !!</Typography>      
         <Card style={{borderRadius:20, borderColor:'blue'}} className='signup-card' variant="outlined">
         
         <TextField style={{margintop:10}} required id="userId" label="user id" placeholder="Enter your userid"/>
         
         <TextField required id="password" type="password" label="password" placeholder="Enter your password"/>
         <div className="buttonBox">
         <Button size="small" variant="outlined">Cancel</Button>
         <Button size="small" variant="outlined">Signup</Button>
         </div>
         </Card>
         </div>        
        </>
    )
}
export default Signup;
