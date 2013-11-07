function MarkupCalculator() {
}

MarkupCalculator.prototype.calculateFlatMarkup = function(baseprice) {
    return baseprice * 5 / 100;
};

MarkupCalculator.prototype.calculatePerPersonMarkup = function(baseLineAndFlatMarkup, people) {
    return baseLineAndFlatMarkup * 1.2 * people/100;
};

MarkupCalculator.prototype.getCategoryMarkup = function(category) {
    var keywordsPharmaceuticals = ["drugs", "medicine"];
    var keywordsFood = ["food", "pizza"];
    var keywordsElectronics = ["ipads", "electronics"];
   
    var output = 0;
   
    if(output == 0 && keywordsPharmaceuticals.indexOf(category) > -1){
        output = 7.5;
    }
   
    if(output == 0 && keywordsFood.indexOf(category) > -1){
        output = 13;
    }
   
    if(output == 0 && keywordsElectronics.indexOf(category) > -1){
        output = 2;
    }
   
    return output; 
};

MarkupCalculator.prototype.calculateCategoryMarkup = function(baseLineAndFlatMarkup, categoryMarkupPercentage) {
    return  baseLineAndFlatMarkup * categoryMarkupPercentage/100;
};

MarkupCalculator.prototype.calculate = function(baseprice, people, category) {
    var flatMarkup = this.calculateFlatMarkup(baseprice);
var     baseLineAndFlatMarkup = (flatMarkup + baseprice);
var     perPersonMarkup = this.calculatePerPersonMarkup(baseLineAndFlatMarkup, people);
var     categoryMarkupPercentage = this.getCategoryMarkup(category);
var     markupForCategory = this.calculateCategoryMarkup(baseLineAndFlatMarkup, categoryMarkupPercentage)
var     calculatedMarkup = parseFloat((baseLineAndFlatMarkup + perPersonMarkup + markupForCategory).toFixed(2));
    return calculatedMarkup;
};
