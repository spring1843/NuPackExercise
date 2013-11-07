describe("MarkupCalculator", function() {

    var markupCalculator;

    beforeEach(function() {
        markupCalculator = new MarkupCalculator();
    });

    it("There is sanity", function() {
        expect(true).toBeTruthy;
    });
    
    it("There is test data", function() {
        expect(testData).toBeDefined();
    });
  
    it("Can calculate the flat markup", function() {
        expect(markupCalculator.calculateFlatMarkup(100)).toEqual(markupCalculator.percentageFlat);
    });
    
    it("Can calculate per person markup", function() {
        expect(markupCalculator.getPerPersonMarkup(1)).toEqual(0.012);
        expect(markupCalculator.getPerPersonMarkup(2)).toBeCloseTo(0.012 * 2);
        expect(markupCalculator.getPerPersonMarkup(3)).toBeCloseTo(0.012 * 3);
    });
    
    it("Can get the markup percentage based on category", function() {
        expect(markupCalculator.getCategoryMarkup("food")).toEqual(0.13);
        expect(markupCalculator.getCategoryMarkup("drugs")).toEqual(0.075);
        expect(markupCalculator.getCategoryMarkup("electronics")).toEqual(0.02);
        expect(markupCalculator.getCategoryMarkup("books")).toEqual(0);
    });

    
    it("Can calculate the correct output for each sample data", function() {
        for(i in testData){
            var baseprice = testData[i].baseprice;
            var people = testData[i].people;
            var category = testData[i].category;
            var markup = testData[i].markup;
            expect(markupCalculator.calculate(baseprice, people, category)).toEqual(markup);
        }
    });

});