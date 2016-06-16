var React = require("react");

var CompanyMatchPercentage = React.createClass({
  render: function(){
    return (    
      <li className="slidersReSize" style={this.props.style.slider}>
        <h5 style={this.props.style.text}>Company Match: {this.props.companyMatchPercentage} %</h5>
        <input type="range"
               className="slidersReSize"
               min="0"
               max="8"
               step="1"
               value={this.props.companyMatchPercentage}
               onChange={this.props.handleChange.bind(null,'companyMatchPercentage')} 
               onTouchEnd={this.props.handleMouseUp.bind(null,'companyMatchPercentage')}
               onMouseUp={this.props.handleMouseUp.bind(null,'companyMatchPercentage')}>
        </input>
      </li>
    )
  }
})

module.exports = CompanyMatchPercentage;
