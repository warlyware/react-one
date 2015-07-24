var Hello = React.createClass({
  getInitialState: function() {
    return {greeting: 'Welcome', name: 'State'};
  },
  greet: function() {
    this.setState(
      {greeting: 'Hello', name: this.refs.name2greet.value},
      function() {
        this.refs.name2greet.value = '';
      }
    );

  },
  componenetDidMount: function() {
    console.log('Mounted');
  },
  componentWillMount: function() {
    console.log('Will mount now...');
  },
  componentWillUnmount: function() {
    console.log('Goin to unmount now...');
  },
  render: function() {
    return (
      <div>
        <input placeholder="Name" ref="name2greet" />
        <button onClick={this.greet}>Greet</button>
        {this.state.greeting} {this.state.name}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return(
      <div>
        <Hello />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('root')
);