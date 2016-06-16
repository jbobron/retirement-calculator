var React = require("react");

var Summary = React.createClass({
  getYears: function(){
    return this.props.retirementAge - this.props.currentAge;
  },
  getAnnualSavings: function(){
    var totalFromAssets = this.props.currentSalary * this.props.annualSavingsPercentage / 100;
    var companyMatch = this.props.currentSalary * this.props.companyMatchPercentage / 100;
    return numberWithCommas((totalFromAssets + companyMatch).toFixed(2));
  },
  getTotalSavings: function(){
    return numberWithCommas(this.props.totalSavings.toFixed(2));
  },
  render: function(){
    return (    
      <div>
        <h3 style={this.props.style.text}>Based on your retirement plan, you will save <strong> ${this.getTotalSavings()} </strong> over <strong> {this.getYears()} </strong> years!</h3>
      </div>
        
    )
  }
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = Summary;



// <p>Over the next {this.getYears()} years, with an annual savings of ${this.getAnnualSavings()} and 
// starting assets of ${this.props.startingAssets}, you will generate ${this.getTotalSavings()}</p>