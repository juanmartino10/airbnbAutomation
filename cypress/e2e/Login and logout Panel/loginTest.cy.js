import loginData from "../../data/loginData";
import Login from "../../pages/Login Object/loginObject";

describe("Login", () => {

    beforeEach(() => {
        cy.visit("/", { failOnStatusCode: false });
    });

    it("@Regression - Success Login", () => {
        Login.NewLogin(loginData.validEmail, loginData.validPassword);
    });

    it("@Regression - Negative test - Login with invalid credentials", () => {
        Login.NewLogin(loginData.invalidEmail, loginData.invalidPassword)
    })
});