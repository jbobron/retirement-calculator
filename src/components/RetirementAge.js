var React = require("react");

var RetirementAge = React.createClass({
  render: function(){
    return (    
      <li className="slidersReSize" style={this.props.style.slider}>
        <h5 style={this.props.style.text}>Retirement Age: {this.props.retirementAge}</h5>
        <input type="range"
               className="slidersReSize"
               min="40"
               max="80"
               step="1"
               value={this.props.retirementAge}
               onChange={this.props.handleChange.bind(null,'retirementAge')} 
               onTouchEnd={this.props.handleAgeRangeChange.bind(null,'retirementAge')}
               onMouseUp={this.props.handleAgeRangeChange.bind(null,'retirementAge')}>
        </input>
      </li>
    )
  }
})

module.exports = RetirementAge;
