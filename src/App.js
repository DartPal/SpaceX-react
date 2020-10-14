import React from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import Calendar from "./Components/Calendar/Calendar";
import GetData from "./getdata/GetData";
import './style.css'

class App extends React.Component{

    getData = new GetData();

    state = {
        rocketName: 'Falcon 1'
    }

  render() {
      return (
          <>
              <Header/>
              <Main rocketName={this.state.rocketName}/>
              <Features />
              <Footer />
          </>
      )
  }
}

export default App;
