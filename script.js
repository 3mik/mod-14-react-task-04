var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function(){
        this.setState({
          counter: this.state.counter -1
        })
    },
  

    render: function() {
        console.log('init');
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Increment counter'),
            React.createElement('button', {onClick: this.decrement}, 'Decrement counter'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement('div', {}, 
                  React.createElement(Counter, {}),
                  React.createElement(Counter, {}),
                  React.createElement(Counter, {})
              );
               
ReactDOM.render(element, document.getElementById('app'));
