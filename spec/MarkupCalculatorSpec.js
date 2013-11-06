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
            baseprice = fakeData[i].baseprice;
            flatMarkup =  baseprice * 5/100;
            expect(markupCalculator.calculateFlatMarkup(baseprice)).toEqual(flatMarkup);
        }
    });
    
    it("Calculates per person markup", function() {
        for(i in fakeData){
            baseprice = fakeData[i].baseprice;
            people = fakeData[i].people;
            flatMarkup =  markupCalculator.calculateFlatMarkup(baseprice);
            baseLineAndFlatMarkup = (flatMarkup + baseprice);
            perPersonMarkup =  baseLineAndFlatMarkup * 1.2 * people/100;
            expect(markupCalculator.calculatePerPersonMarkup(baseLineAndFlatMarkup, people)).toEqual(perPersonMarkup);
        }
    });
    
    
    it("Gets the markup percentage based on category", function() {
         expect(markupCalculator.getCategoryMarkup("food")).toEqual(13);
         expect(markupCalculator.getCategoryMarkup("drugs")).toEqual(7.5);
         expect(markupCalculator.getCategoryMarkup("electronics")).toEqual(2);
         expect(markupCalculator.getCategoryMarkup("books")).toEqual(0);
    });
    
    
    it("Calculates the correct output for each fake data", function() {
        for(i in fakeData){
            baseprice = fakeData[i].baseprice;
            people = fakeData[i].people;
            category = fakeData[i].category;
            output = fakeData[i].output;
            expect(markupCalculator.calculate(baseprice, people, category)).toEqual(output);
        }
    
    });

});