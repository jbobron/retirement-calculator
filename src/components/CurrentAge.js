var React = require("react");

var CurrentAge = React.createClass({
  render: function(){
    return (    
      <li className="slidersReSize" style={this.props.style.slider}>
        <h5 style={this.props.style.text}> Current Age: {this.props.currentAge}</h5>
        <input type="range"
               className="slidersReSize"
               min="20"
               max="50"
               step="1"
               value={this.props.currentAge}
               onChange={this.props.handleChange.bind(null,'currentAge')} 
               onTouchEnd={this.props.handleAgeRangeChange.bind(null,'currentAge')}
               onMouseUp={this.props.handleAgeRangeChange.bind(null,'currentAge')}>
        </input>
      </li>
    )
  }
})

module.exports = CurrentAge;
