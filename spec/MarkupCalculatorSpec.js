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
            flatMarkup = baseprice + (baseprice * 5/100);
            expect(markupCalculator.calculateFlatMarkup(baseprice)).toEqual(flatMarkup);
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