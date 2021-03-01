import React, {Component} from 'react'
import Form_input from '../Form-input/Form_input'
import Custom_button  from '../Custom-Button/Custom_button'
import './Sign-in.scss'
import  {auth , signInWithGoogle} from  '../../firebase/Firebase.utils'

class Sign_in extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})

    }
    handleSubmit = async (evt)=>{
        evt.preventDefault()
        const {email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email:"",
                password:""
            })
        }catch(err){
            console.log(err)
        }
        
       
    }

    render(){
        return(
            <div className="Sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Form_input name ="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/> 
                   
                    <Form_input name="password" type="password"  label="password"value={this.state.password} handleChange={this.handleChange} required/> 
                    <div className="buttons">
                    <Custom_button type="submit" value="submit">Sign In</Custom_button>
                    <Custom_button onClick={signInWithGoogle} isGoogle>sign In With Google</Custom_button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Sign_in
