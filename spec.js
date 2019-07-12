describe('mutliple elements', function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));

    var gobutton = element(by.id('gobutton'));
    var resultText = element(by.className('ng-binding'));



    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

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
        expect(resultText.getAttribute()).toEqual('1');
    });
});