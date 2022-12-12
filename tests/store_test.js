let registrationUser = {
    firstName: 'Yuliana',
    lastName: 32,
    telephone: '+380990288800',
    password: 'December2022',

};

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisretAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegistrationDetail(registrationUser);
    registerPage.verifyAccountCreatedText();
});