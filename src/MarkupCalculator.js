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
    
    this.getPerPersonMarkup = function(people) {
        return  this.percentagePerPerson * people/100;
    };
    
    this.getCategoryMarkup = function(category) {
        if(this.keywordsPharmaceuticals.indexOf(category) > -1){
            return this.percentagePharmaceuticals  / 100;
        }
        if(this.keywordsFood.indexOf(category) > -1){
            return this.percentageFood  / 100;
        }
        if(this.keywordsElectronics.indexOf(category) > -1){
            return this.percentageElectronics / 100;
        }
        return 0;
    };
    
    this.calculate = function(baseprice, people, category) {
        // Without Exception, there is a flat markup on all jobs of 5%
        var flatMarkup = this.calculateFlatMarkup(baseprice);
        
        //The flat markup is calculated first and then all other markups are calculated on top of the base price plus flat markup.
        var baseLineAndFlatMarkup = (flatMarkup + baseprice);
        
        // For each person that needs to work on the job, there is a markup of 1.2%
        var perPersonMarkup = baseLineAndFlatMarkup * this.getPerPersonMarkup(people);
        
        // Markups are also added depending on the types of materials involved
        var markupForCategory = baseLineAndFlatMarkup * this.getCategoryMarkup(category)
        
        // The flat markup is calculated first and then all other markups are calculated on top of the base price plus flat markup.
        return parseFloat((baseLineAndFlatMarkup + perPersonMarkup + markupForCategory).toFixed(2));;
    };
}