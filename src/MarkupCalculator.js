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
   
   output = 0;
   
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
    
};



MarkupCalculator.prototype.calculate = function(baseprice, people, category) {
    
};
