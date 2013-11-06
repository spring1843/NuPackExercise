describe("MarkupCalculator", function() {

    var markupCalculator;

    beforeEach(function() {
        markupCalculator = new MarkupCalculator();
    });

    it("There should be sanity", function() {
        expect(true).toEqual(true);
    });
  
    it("Produces the correct output for each fake data", function() {
    
        for(i in fakeData){
            baseprice = fakeData[i].baseprice;
            people = fakeData[i].people;
            category = fakeData[i].category;
            output = fakeData[i].output;
            expect(markupCalculator.calculate(baseprice, people, category)).toEqual(output);
        }
    
    });

});