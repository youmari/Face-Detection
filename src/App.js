import React from 'react';
import Navigation from './Navigation';
import ImgLinkForm from './ImgLinkForm';
import Logo from './Logo';
import Rank from './Rank';
import FaceRecognition from './FaceRecognition';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import  Clarifai from 'clarifai'
import Signin from './Signin';
import Register from './Register';

const app = new Clarifai.App({
 apiKey: 'a02c5a5457e04370b86a03bfd52f4c1f'
});

const particlesOptions = {
	    "particles": {
	        "number": {
              "value": 150,
              "density":{
                "enable":true,
                "value_area":800
              }
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }

}
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box : {},
      route: 'signin',
      signedin: false
    }
  }

  calculateFaceLocation = (data)=>{
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputimage');
     const width = Number(image.width);
     const height = Number(image.height);
     return {
       leftCol:clarifaiFace.left_col * width ,
       topRow:clarifaiFace.top_row * height,
       rightCol : width - (clarifaiFace.right_col * width),
       bottomRow : height - (clarifaiFace.bottom_row * height),
      }
  }
  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event ) =>{
    this.setState({input: event.target.value})

  }
  onSubmit = () => {
    this.setState({imageUrl:this.state.input});
    app.models.predict( Clarifai.FACE_DETECT_MODEL,this.state.input).then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err =>console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({signedIn : false })
    }else if (route ==='home'){
      this.setState({signedIn: true})
    }
    this.setState({route:route})
  }
  render(){
    return (
      <div className="App">
        <Particles className='particles'  params={particlesOptions} />
        <Navigation signedIn={this.state.signedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
            ? <div>
                <Logo/>
                <Rank/>
                <ImgLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
              </div>
              :(this.state.route === 'signin'  
              ? <Signin onRouteChange={this.onRouteChange}/> 
              : <Register onRouteChange={this.onRouteChange}/> )
               
             
        } 
        
        } 
      </div>
    );

  }
}
  

export default App;
