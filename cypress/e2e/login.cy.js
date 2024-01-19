describe('Автотесты на форму авторизации', function () {
    it('Валидный логин и валидный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

 it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#forgotForm > .header').should('be.visible');
    cy.get('#forgotForm > .header').contains('Восстановите пароль');
    cy.get('#mailForgot').type('german2@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Валидный логин и невалидный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio2');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Невалидный логин и валидный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german1@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Логин без @ и валидный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
})