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
        rocketName: 'Falcon 1',
        rocketFeatures: {
            height: {
                meters: 0
            }
        },
        rockets: [],
    }

    componentDidMount() {
        this.updateRocket();
    }

    updateRocket() {
        this.getData.getRocket()
            .then(data => {
                this.setState({ rockets: data.map(item => item.name) });
                return data;
            })
            .then(data => data.find(item => item.name === this.state.rocketName))
            .then(rocketFeatures => this.setState({rocketFeatures}));
    }


    changeRocket = (rocketName) => {
        this.setState({
            rocketName
        }, this.updateRocket)
    }

  render() {
        console.log(this.state)
      return (
          <>
              <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
              <Main rocketName={this.state.rocketName} />
              <Features rocketFeatures={this.state.rocketFeatures} rocketName={this.state.rocketName}/>
              <Footer />
          </>
      )
  }
}

export default App;
