class TemperatureDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {temperature: 68,
                    tempUnit: 'F',
                    disUp: false,
                    disDown: false
        };
    }

    convertUnits(unit, temp){
        if(unit == 'C'){
            return (temp - 32) * (5 / 9).toFixed(1);
        }
        else{
            return temp
        }
    }

    tempUp(temp){
        this.setState({temperature: temp + 1});
        if(temp == 80){
            this.setState({disUp: true});
        }
    }

    tempDown(temp){
        this.setState({temperature: temp - 1});
        if(temo == 50){
            this.setState({disDown: false});
        }
    }

    disableUp(temp){
        if(temp == 79){
            document.getElementById("up").classList.add("disabled");
            this.setState({disUp: true});
        }
        if(temp >= 50){
            document.getElementById("down").classList.remove("disabled");
            this.setState({disDown: false});
        }
        this.tempUp(temp);
    }

    disableDown(temp){
        if(temp == 51){
            document.getElementById("down").classList.add("disabled");
            this.setState({disDown: true});
        }
        if(temp <= 80){
            document.getElementById("up").classList.remove("disabled");
            this.setState({disUp: false});
        }
        this.tempDown(temp)
    }

    changeUnits(unit){
        if(unit == 'F'){
            this.setState({tempUnit: 'C'});
        }

        if(unit == 'C'){
            this.setState({tempUnit: 'F'});
        }
    }

    render() {
      return (
        <div>
            <h1>this is the temp</h1>
            <div>
                <h2>{this.convertUnits(this.state.tempUnit, this.state.temperature)}
                °{this.state.tempUnit}</h2>
                <button disabled = {this.state.disUp} id = "up" className="btn btn-dark" onClick={() => this.disableUp(this.state.temperature)} > 
                    <span className = "fas fa-arrow-up"></span>
                </button>
                <button disabled = {this.state.disDown} id = "down" className="btn btn-dark" onClick={() => this.disableDown(this.state.temperature)}>
                    <span className = "fas fa-arrow-down"></span>
                </button>
            </div>
            <div className='custom-control custom-switch'>
                <input type='checkbox' className='custom-control-input'id='customSwitches' readOnly/>
                <label className='custom-control-label' htmlFor='customSwitches' onClick={() => this.changeUnits(this.state.tempUnit)}>
                switch units
                </label>
            </div>
        </div>
      );
    }
}

ReactDOM.render(
    <TemperatureDisplay />,
    document.getElementById('temp')
);