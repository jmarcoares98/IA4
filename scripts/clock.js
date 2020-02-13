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
 
render() {
    return (
      <div>
        <h1>this is the time</h1>
        {this.state.visible ? <h2>It is <FormattedDate 
        date={this.state.date} />.</h2> : null}
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);
