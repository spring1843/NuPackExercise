describe("MarkupCalculator", function() {

    var markupCalculator;

    beforeEach(function() {
        markupCalculator = new MarkupCalculator();
    });

    it("There is sanity", function() {
        expect(true).toEqual(true);
    });
    
    it("There is test data", function() {
        expect(testData).toBeDefined();
    });
  
    it("Can calculate the flat markup", function() {
        for(i in testData){
            var baseprice = testData[i].baseprice;
            var flatMarkup =  baseprice * 5/100;
            expect(markupCalculator.calculateFlatMarkup(baseprice)).toEqual(flatMarkup);
        }
    });
    
    it("Can calculate per person markup", function() {
        for(i in testData){
            var  baseprice = testData[i].baseprice;
            var  people = testData[i].people;
            var  flatMarkup =  markupCalculator.calculateFlatMarkup(baseprice);
            var  baseLineAndFlatMarkup = (flatMarkup + baseprice);
            var  perPersonMarkup =  baseLineAndFlatMarkup * 1.2 * people/100;
            expect(markupCalculator.calculatePerPersonMarkup(baseLineAndFlatMarkup, people)).toEqual(perPersonMarkup);
        }
    });
    
    
    it("Can get the markup percentage based on category", function() {
        expect(markupCalculator.getCategoryMarkup("food")).toEqual(13);
        expect(markupCalculator.getCategoryMarkup("drugs")).toEqual(7.5);
        expect(markupCalculator.getCategoryMarkup("electronics")).toEqual(2);
        expect(markupCalculator.getCategoryMarkup("books")).toEqual(0);
    });
    
    
    it("Can calculate markup for category", function() {
        for(i in testData){
            var baseprice = testData[i].baseprice;
            var category = testData[i].category;
            var flatMarkup =  markupCalculator.calculateFlatMarkup(baseprice);
            var baseLineAndFlatMarkup = (flatMarkup + baseprice);
            var categoryMarkupPercentage = markupCalculator.getCategoryMarkup(category);
            var markupForCategory =  baseLineAndFlatMarkup * categoryMarkupPercentage/100;
            expect(markupCalculator.calculateCategoryMarkup(baseLineAndFlatMarkup, categoryMarkupPercentage)).toEqual(markupForCategory);
        }
    });
    
    
    it("Can calculate the correct output for each sample data", function() {
        for(i in testData){
            var baseprice = testData[i].baseprice;
            var people = testData[i].people;
            var category = testData[i].category;
            var output = testData[i].output;
            expect(markupCalculator.calculate(baseprice, people, category)).toEqual(output);
        }
    
    });

});