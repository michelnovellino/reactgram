import React, { Component } from 'react';

import firebase from 'firebase';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user:null
    }
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({user});
    })
  }

  handleAuth(){
  const provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider)
  .then(result => console.log(result))
  .catch(error => console.log(error))

}
  hangleLogout(){
    firebase.auth().signOut()
    .then(result => console.log(`${result} ha cerrado sesion`))
    .catch(error => console.log(error))
  }

renderLoginButton(){
  if(this.state.user){
    return(
      <div>
        hola {this.state.user.displayName}
      </div>
    );
  }else{
    return(
    <button
    onClick={this.handleAuth}
    >LogIn</button>
    )
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
          bienvenido a reactgram
          </p>
        {this.renderLoginButton()}
        </header>

       
      </div>
    );
  }
}

export default App;
