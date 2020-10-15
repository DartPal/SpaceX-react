import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import Calendar from "./Components/Calendar/Calendar";
import Home from "./Components/Home/Home";
import GetData from "./getdata/GetData";
import './style.css';

class App extends React.Component{

    getData = new GetData();

    state = {
        rocketName: 'Falcon 1',
        rocketFeatures: {
            height: {
                meters: 0,
                feet: 0
            },
            diameter: {
                meters: 0,
                feet: 0
            },
            mass: {
                kg: 0,
                lb: 0
            },
            payload_weights: [{
                kg: 0,
                lb: 0
            }],
            description: '',
        },
        rockets: [],
        company: null
    }

    componentDidMount() {
        this.updateRocket();
        this.updateCompany();
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

    updateCompany = () => {
        this.getData.getCompany()
            .then(company => this.setState({ company }))
    }

    changeRocket = (rocketName) => {
        this.setState({
            rocketName
        }, this.updateRocket)
    }

    render() {
      return (
          <BrowserRouter>
              <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>

              <Route exact path='/'>
                  {this.state.company && <Home company={this.state.company} />}
              </Route>

              <Route path='/rocket'>
                  <Main rocketName={this.state.rocketName} />
                  <Features rocketFeatures={this.state.rocketFeatures} rocketName={this.state.rocketName}/>
              </Route>

              <Route path='/calendar'>
                  <Calendar />
              </Route>

              <Route path='/details'>
                  <Details />
              </Route>

              {this.state.company && <Footer {...this.state.company} />}
          </BrowserRouter>
      )
  }
}

export default App;
