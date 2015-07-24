var Hello = React.createClass({
  getInitialState: function() {
    return { users: [] };
  },
  greet: function() {
    var currentUser = this.state.users;
    currentUser.push(this.refs.name2greet.value);
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
    var usersLI = this.state.users.map(function(user) {
      return (
          <li>Hello {user}</li>
        )
    });
    return (
      <div>
        <input placeholder="Name" ref="name2greet" />
        <button onClick={this.greet}>Greet</button>
        <hr />
        <ul>
          {usersLI}
        </ul>
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