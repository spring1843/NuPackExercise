function MarkupCalculator() {
    
    // Constants
    this.percentageFlat = 5;
    this.percentagePerPerson = 1.2;
    this.percentagePharmaceuticals = 7.5;
    this.percentageFood = 13;
    this.percentageElectronics = 2;
    
    
    // Keywords related to each category
    this.keywordsPharmaceuticals = ["drugs", "medicine"];
    this.keywordsFood = ["food", "pizza"];
    this.keywordsElectronics = ["electronics"];
    
    this.calculateFlatMarkup = function(baseprice) {
        return baseprice * this.percentageFlat / 100;
    };
    
    this.calculatePerPersonMarkup = function(baseLineAndFlatMarkup, people) {
        return baseLineAndFlatMarkup * this.percentagePerPerson * people/100;
    };
    
    this.getCategoryMarkup = function(category) {
        if(this.keywordsPharmaceuticals.indexOf(category) > -1){
            return this.percentagePharmaceuticals;
        }
        if(this.keywordsFood.indexOf(category) > -1){
            return this.percentageFood;
        }
        if(this.keywordsElectronics.indexOf(category) > -1){
            return this.percentageElectronics;
        }
        return 0;
    };

    this.calculateCategoryMarkup = function(baseLineAndFlatMarkup, categoryMarkupPercentage) {
        return  baseLineAndFlatMarkup * categoryMarkupPercentage/100;
    };
    
    this.calculate = function(baseprice, people, category) {
        var flatMarkup = this.calculateFlatMarkup(baseprice);
        var baseLineAndFlatMarkup = (flatMarkup + baseprice);
        var perPersonMarkup = this.calculatePerPersonMarkup(baseLineAndFlatMarkup, people);
        var categoryMarkupPercentage = this.getCategoryMarkup(category);
        var markupForCategory = this.calculateCategoryMarkup(baseLineAndFlatMarkup, categoryMarkupPercentage)
        var calculatedMarkup = parseFloat((baseLineAndFlatMarkup + perPersonMarkup + markupForCategory).toFixed(2));
        return calculatedMarkup;
    };
}