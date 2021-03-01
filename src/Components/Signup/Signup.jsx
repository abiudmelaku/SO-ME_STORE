import react , {Component} from 'react'
import {auth , createUserProfileDocument} from '../../firebase/Firebase.utils'
import Custom_button from '../Custom-Button/Custom_button'
import Form_input from '../Form-input/Form_input'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleChange = evt => this.setState({[evt.target.name]:evt.target.value})
    handleSubmit =  async evt =>{
        evt.preventDefault()
        const{displayName,email,password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("Can't confirm password")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email , password)
           
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""

            })
        }catch(err){
            console.log(err);
            
        }
    }
    
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <Form_input 
                name="displayName" type="text" 
                label="Name" value={this.state.displayName} 
                onChange={this.handleChange} required
                />
                  <Form_input 
                name="email" type="email" 
                label="Email" value={this.state.email} 
                onChange={this.handleChange} required
                />
                  <Form_input 
                name="password" type="password" 
                label="Password" value={this.state.password} 
                onChange={this.handleChange} required
                />
                 <Form_input 
                name="confirmPassword" type="password" 
                label="Confirm password" value={this.state.confirmPassword} 
                onChange={this.handleChange} required
                />
                
                <Custom_button >Signup</Custom_button>

            </form>

            </div>
           

        )
    }
}
export default Signup