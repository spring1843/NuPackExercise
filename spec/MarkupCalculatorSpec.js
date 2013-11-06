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
            perPersonMarkup =  (flatMarkup + baseprice) * 1.2 * people/100;
            expect(markupCalculator.calculatePerPersonMarkup(people)).toEqual(perPersonMarkup);
        }
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