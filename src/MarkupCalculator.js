function MarkupCalculator() {
}

MarkupCalculator.prototype.calculateFlatMarkup = function(baseprice) {
    return baseprice * 5 / 100;
};

MarkupCalculator.prototype.calculatePerPersonMarkup = function(baseLineAndFlatMarkup, people) {
    return baseLineAndFlatMarkup * 1.2 * people/100;
};

MarkupCalculator.prototype.getCategoryMarkup = function(category) {
    keywordsPharmaceuticals = ["drugs", "medicine"];
    keywordsFood = ["food", "pizza"];
    keywordsElectronics = ["ipads", "electronics"];
   
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
    flatMarkup = this.calculateFlatMarkup(baseprice);
    baseLineAndFlatMarkup = (flatMarkup + baseprice);
    perPersonMarkup = this.calculatePerPersonMarkup(baseLineAndFlatMarkup, people);
    categoryMarkupPercentage = this.getCategoryMarkup(category);
    markupForCategory = this.calculateCategoryMarkup(baseLineAndFlatMarkup, categoryMarkupPercentage)
    calculatedMarkup = parseFloat((baseLineAndFlatMarkup + perPersonMarkup + markupForCategory).toFixed(2));
    return calculatedMarkup;
};
