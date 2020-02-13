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
            return (temp - 32) * (5 / 9);
        }
        else{
            return temp
        }
    }

    tempUp(temp){
        this.setState({temperature: temp + 1});
    }

    tempDown(temp){
        this.setState({temperature: temp - 1});
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
    }

    render() {
      return (
        <div>
            <h1>this is the temp</h1>
            <h2>{this.convertUnits(this.state.tempUnit, this.state.temperature)}
            °{this.state.tempUnit}</h2>
            <div>
                <button disabled = {!this.state.disUp} id = "up" class="btn btn-dark" onClick={() => this.disableUp(this.state.temperature)} > 
                    <span class = "fas fa-arrow-up"></span>
                </button>
                <button disabled = {!this.state.disDown} id = "down" class="btn btn-dark" onClick={() => this.disableDown(this.state.temperature)}>
                    <span class = "fas fa-arrow-down"></span>
                </button>
            </div>
        </div>
      );
    }
}

ReactDOM.render(
    <TemperatureDisplay />,
    document.getElementById('temp')
);