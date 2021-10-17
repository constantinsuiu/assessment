import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pages/HomePage';
import JoinUsPage from '../pages/JoinUsPage';
import ContactPage from '../pages/ContactPage';


Given(/^I navigate to (.*)/, async (page) => {
    switch(page) {
        case 'SnipTech':
            browser.url('https://www.sniptech.com')
            await HomePage.learnMoreButton.waitForDisplayed();
            break;
        case 'Join Us':
            await HomePage.joinUsButton.click();
            await JoinUsPage.jobsButton.waitForDisplayed();
            break;
        case 'Contact':
            await HomePage.contactUsButton.click();
            await ContactPage.emailUsButton.waitForDisplayed();
            break;
        default:
            throw new Error(`The ${page} page was not found`)
    }
});


Then(/I see available jobs/, async () => {
    let jobsCount = 0;

    await JoinUsPage.jobsTable.scrollIntoView();
    jobsCount = await JoinUsPage.availablejobsRows.length
    await expect(jobsCount).toEqual(2);
});

Then(/I validate company address/, async() => {
    let companyAddress;

    companyAddress = await ContactPage.companyAddressText.getHTML(false);
    await expect(companyAddress).toEqual('Parnassusweg 805, 1082 LZ Amsterdam<br>The Netherlands');
});
