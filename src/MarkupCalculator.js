function MarkupCalculator() {
}

MarkupCalculator.prototype.calculateFlatMarkup = function(baseprice) {
    return baseprice * 5 / 100;
};

MarkupCalculator.prototype.calculatePerPersonMarkup = function(baseLineAndFlatMarkup, people) {
    return baseLineAndFlatMarkup * 1.2 * people/100;
};

MarkupCalculator.prototype.getCategoryMarkup = function(category) {
    
};

MarkupCalculator.prototype.calculateCategoryMarkup = function(baseLineAndFlatMarkup, category) {
    
};



MarkupCalculator.prototype.calculate = function(baseprice, people, category) {
    
};
