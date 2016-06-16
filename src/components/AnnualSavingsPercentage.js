var React = require("react");
var CompanyMatchPercentage = require('./CompanyMatchPercentage');


var AnnualSavingsPercentage = React.createClass({
  render: function(){
    return ( 
      <ul style={this.props.style.ul}>   
        <CompanyMatchPercentage {...this.props} handleChange={this.props.handleChange} handleMouseUp={this.props.handleMouseUp}/>
        <li className="slidersReSize" style={this.props.style.slider}>
          <h5 style={this.props.style.text}>Annual Savings: {this.props.annualSavingsPercentage} %</h5>
          <input type="range"
                 className="slidersReSize"
                 min="0"
                 max={this.props.maxSavingsPercentage}
                 step="1"
                 value={this.props.annualSavingsPercentage}
                 onChange={this.props.handleChange.bind(null,'annualSavingsPercentage')}
                 onTouchEnd={this.props.handleMouseUp.bind(null,'annualSavingsPercentage')}
                 onMouseUp={this.props.handleMouseUp.bind(null,'annualSavingsPercentage')}>
          </input>
        </li>
      </ul>
    )
  }
})

module.exports = AnnualSavingsPercentage;
