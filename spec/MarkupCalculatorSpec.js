describe("MarkupCalculator", function() {

    var markupCalculator;

    beforeEach(function() {
        markupCalculator = new MarkupCalculator();
    });

    it("There should be sanity", function() {
        expect(true).toEqual(true);
    });
  
    it("Calculates the flat markup", function() {
        for(i in fakeData){
            var baseprice = fakeData[i].baseprice;
            var flatMarkup =  baseprice * 5/100;
            expect(markupCalculator.calculateFlatMarkup(baseprice)).toEqual(flatMarkup);
        }
    });
    
    it("Calculates per person markup", function() {
        for(i in fakeData){
            var  baseprice = fakeData[i].baseprice;
            var  people = fakeData[i].people;
            var   flatMarkup =  markupCalculator.calculateFlatMarkup(baseprice);
            var   baseLineAndFlatMarkup = (flatMarkup + baseprice);
            var   perPersonMarkup =  baseLineAndFlatMarkup * 1.2 * people/100;
            expect(markupCalculator.calculatePerPersonMarkup(baseLineAndFlatMarkup, people)).toEqual(perPersonMarkup);
        }
    });
    
    
    it("Gets the markup percentage based on category", function() {
        expect(markupCalculator.getCategoryMarkup("food")).toEqual(13);
        expect(markupCalculator.getCategoryMarkup("drugs")).toEqual(7.5);
        expect(markupCalculator.getCategoryMarkup("electronics")).toEqual(2);
        expect(markupCalculator.getCategoryMarkup("books")).toEqual(0);
    });
    
    
    it("Calculates markup for category", function() {
        for(i in fakeData){
            var   baseprice = fakeData[i].baseprice;
            var   category = fakeData[i].category;
            var   flatMarkup =  markupCalculator.calculateFlatMarkup(baseprice);
            var   baseLineAndFlatMarkup = (flatMarkup + baseprice);
            var   categoryMarkupPercentage = markupCalculator.getCategoryMarkup(category);
            var   markupForCategory =  baseLineAndFlatMarkup * categoryMarkupPercentage/100;
            expect(markupCalculator.calculateCategoryMarkup(baseLineAndFlatMarkup, categoryMarkupPercentage)).toEqual(markupForCategory);
        }
    });
    
    
    it("Calculates the correct output for each fake data", function() {
        for(i in fakeData){
            var  baseprice = fakeData[i].baseprice;
            var   people = fakeData[i].people;
            var   category = fakeData[i].category;
            var    output = fakeData[i].output;
            expect(markupCalculator.calculate(baseprice, people, category)).toEqual(output);
        }
    
    });

});