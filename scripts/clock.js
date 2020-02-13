class FormattedDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: props.date};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.date != prevState.date) {
      return {date: nextProps.date};
    }  else {
      return null;
    }
  }

//legacy code: Will also work
// componentWillReceiveProps(nextProps) {
//         this.setState({date: nextProps.date});
//  }

  render() {
    return this.state.date.toLocaleTimeString();
  }

}


class Clock extends React.Component {

  constructor(props) {
      super(props);
      this.state = {date: new Date(), visible: true};
    }

  componentDidMount() {
      this.timer = setInterval(
        () => this.updateTime(),
        1000
      );
    }

  componentWillUnmount() {
      clearInterval(this.timer);
    }

  updateTime() {
      this.setState({
        date: new Date()
      });
  }

buttonClick = () => {
  this.setState({
      visible: !this.state.visible
    });
}
 
render() {
    return (
      <div>
        <h1>this is the time</h1>
        {this.state.visible ? <h2>It is <FormattedDate 
        date={this.state.date} />.</h2> : null}
        <button className="btn btn-primary" onClick={this.buttonClick}>
        {this.state.visible ? "Hide Time" : "Show Time"}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);
