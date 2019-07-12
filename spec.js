describe('Enter name feature', function(){
    it('should enter name as Tom', function(){
        browser.get('https://angularjs.org');
        browser.driver.sleep(3000);
        element(by.model('yourName')).sendKeys('Tayyab');
        
        browser.driver.sleep(3000);
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

        expect(text.getText()).toEqual('Hello Tayyab!');
    });
});

describe('free crm title test', function(){
    it('get title test', function(){
        browser.get('https://www.freelancer.pk/');
        expect(browser.getTitle()).toEqual('Hire Freelancers & Find Freelance Jobs Online - Freelancer');

    });
});