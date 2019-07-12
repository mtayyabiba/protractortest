describe('mutliple elements', function(){
    it('should add one and two', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();
        expect(element(by.xpath('/html/body/div/div/form/h2')).getText()).toEqual('3');

    });
});