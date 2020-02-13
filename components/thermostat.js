class TemperatureDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {temperature: 68,
                    tempUnit: 'F'
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

    render() {
      return (
        <div>
            <h1>this is the temp</h1>
            <h2>{this.convertUnits(this.state.tempUnit, this.state.temperature)}
            °{this.state.tempUnit}</h2>
        </div>
      );
    }
}

ReactDOM.render(
    <TemperatureDisplay />,
    document.getElementById('temp')
);