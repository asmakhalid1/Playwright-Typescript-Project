import {Page, Locator} from "@playwright/test"
import BasePage from './basepage'

export class LoginPage extends BasePage {
    //private readonly page:Page; //global //not using this line after creating base page
    private readonly usernameTextbox:Locator;
    private readonly passwordTextbox:Locator;
    private readonly loginButton:Locator;

    constructor(page:Page){
        super(page);
        //not using this line after creating base page
        //this.page = page; //Assign the value of local var page to global var page 
        this.usernameTextbox = page.locator('[name="username"]');
        this.passwordTextbox = page.locator('[name="password"]');
        this.loginButton = page.locator('[type="submit"]');
    }

    async enterUserName(userNameText:string){
        await this.b_fillField(this.usernameTextbox,userNameText);
    }
    async enterPassword(passwordText:string){
        await this.b_fillField(this.passwordTextbox, passwordText);
    }
    async clickLogin(){
        await this.b_clickElement(this.loginButton);
    }
}