import React , {Component} from 'react';
import './App.css'
import Header from './Components/Header/header'
import Homepage from './Components/Pages/homepage'
import CollectionPage from './Components/Pages/CollectionPage/CollectionPage'
import {  Route, Redirect } from "react-router-dom";
import Sign_in_out from './Components/Pages/Sign_in_out/Sign_in_out'
import {auth , createUserProfileDocument} from './firebase/Firebase.utils'
import {setCurrentUser} from './Redux/actions';
import {createStructuredSelector} from 'reselect'
import CheckoutHeader from './Components/Checkout/CheckoutHeader'
import {connect} from 'react-redux'
import {currentUserSelect} from './Selectors/Selectors'

// import { Router } from 'workbox-routing';
class App extends Component {
  authenticatedUser = null;

  componentDidMount(){
    this.authenticatedUser = auth.onAuthStateChanged( async (user) =>{
      if(user){
        const queryObj =   await createUserProfileDocument(user)
        queryObj.onSnapshot( snap =>{
          this.props.setCurrentUser(
            {
              currentUser:snap.id,
              ...snap.data()
            } 
          )
        })
      }else{
        this.props.setCurrentUser(user);
      }
      
    }
    )
    
  }

  render(){
    return(
      <div>
          <Header/>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/checkout" component={CheckoutHeader}/>
          <Route exact path='/sign'  render={()=>this.props.currentUser?(<Redirect to='/'/>):(<Sign_in_out/>)}/>
          <Route  path="/shop" component = {CollectionPage} />
      </div>
      )


  }
  

}
const mapStateWithProps = createStructuredSelector({
  currentUser : currentUserSelect,
}
 
)
const mapDispatchWithProps = dispatch =>(
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)


export default connect(mapStateWithProps, mapDispatchWithProps)(App);
