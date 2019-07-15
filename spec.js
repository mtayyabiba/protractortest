describe('mutliple elements', function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var resultText = element(by.xpath('/html/body/div/div/form/h2'));
    var history = element.all(by.repeater('result in memory'));
    
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    function add(a,b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        gobutton.click();
    }

    it('checks the history', function(){
        add(1,2);
        add(2,3);
        add(3,4);
        expect(history.count()).toEqual(3);
    });

/*    
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function(){
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        gobutton.click();
        expect(resultText.getText()).toEqual('3');
    });

    it('should read value from input field', function(){
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
*/

});