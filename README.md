[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bwEfZG3u)

# About Projects

### Dimy Landing page

Click Here to access the project : 
- Netlify : [Rovou Module 2 Deployment Assignments](https://yuliussmayoru.online/)

#### Project Description
> created to complete revou module 2 deployment assignment, the page functioned as landing page of the company, as a preview about what has been achieved by the company, to help customer reach out the company to help them to create a tech product, and also to inform people with talent about job apportunity to join the team.

#### Page Lighthouse score requirements

below is the image of this page Lighthouse score tested at netlify
![Lighthouse](assets/img/lighthouse-latest.png)

#### Deployment Step

1. First Login to Netlify for easier setup, use login with Github
![Login Netlify](assets/img/login-netlify.png)
2. After Succesfully Logged in, Click Add New Site
![Add New Site](assets/img/2-addnewsite.png)
3. Then Click Deploy With Github
![deploy with github](assets/img/3-deploywithgithub.png)
4. Then Select Repository Target like this step below
![select repo](assets/img/4-selectrepo.png)
![select repo2](assets/img/5-selectrepo.png)
5. After that click Deploy
![click deploy](assets/img/6-deploy.png)
7. Click Setup Custom Domain or go to domain management
![domain management](assets/img/7-setupdomain.png)
8. At Domain Management click add domain
![add domain](assets/img/8-domainmanagement.png)
9. input domain name and clikc add domain
![write domain name](assets/img/9-adddomain.png)
10. When you at this page click the Awaiting External DNS
copy all listed dns, then copy to domain provider in my case, it's niaga hoster
11. Login to Niaga Hoster then paste the DNS to Domain Configuration at Niaga Hoster and save like image below
![last setup](assets/img/12-setupdnsniagahoster.png)

Then your deployment setup with setup domain has done. it would took some times for the domain applied to your web, so you may take a rest and wait.

#### Author's Profile
> assignment for week 0 Introduction "My Profile" 
##### My Bio
Hi, I'm Yulius, Software Quality Assurance

<img src="assets/img/mypic.webp" alt="yulius" style="width:300px;"/>

i'm Software Quality Assurance, with more than 3 years experience who also a founder of Tech Startup in Bandung,
 
My main focus is Testing, Start from Regression Testing, Black Box Testing, Automation Testing API testing and UAT. but since i also a founder of tech startup, sometimes i have multiple role such as Project Manager, or Customer Satisfaction
 
##### My Links

- Instagram : [_athanasios.92](https://www.instagram.com/_athanasios92/)
- Linkedin : [Yulius Mayoru](https://www.linkedin.com/in/yulius-mayoru-a2491a20b/)
- Github : [yuliussmayoru](https://github.com/yuliussmayoru)

##### Product & Project Experience

below is 3 example of project i have been working in recent years. 

|No | Project / Product               | Image                         | Tech stack        |
|---|---------------------------------|-------------------------------|-------------------|
|1. |Qoligo & Kokarmina Point Of Sales| ![pos](assets/img/pos.webp)        | Nuxt.js & Nest.Js |
|2. |SIPPC Jaya Abadi                 | ![jayadi](assets/img/jayadi.webp)  | Nuxt.js & Laravel |
|3. |Pertiwi by PERTAMINA             | ![pertiwi](assets/img/pertiwi.webp)| ASP .Net          | 

and many more.

##### My Code Examples

##### javascript with cypress.io & cucumber (automation framework)

> this is my first time getting my hands on automation testing.
> the code below is to create automation for login and logout.

```javascript
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


describe('User try to login Kokarmina Point of Sales in Condition Cashier has not been opened and try to logout after login', ()=> {
  Given ("visiting localhost:3000", ()=> {
    cy.visit("http://localhost:3000")
  })
  
  Then ("I should see login with pin form", ()=> {
    cy.get('[data-cy="login_form"]').should('exist')
  })
  
  When ("I enter correct pin as following", (datatable)=> {
    datatable.hashes().forEach(element =>{
      cy.get('[data-cy="login_pin"]').type(element.pin)
    })
  })

  Then ("I press the Open button", ()=> {
    cy.get('[data-cy="open"]').click()
  })
  
  Then ("login successful and redirect to Order Page by showing loading container", ()=> {
    cy.get('.loading-container').should('exist')
  })

  And ("System should cache data from database and store it in local storage", ()=> {

    // get current date function

    function getCurrentDate() {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
      const day = currentDate.getDate().toString().padStart(2, '0')
      const formattedDate = `${year}-${month}-${day}`
      return formattedDate
    }
    const currentDate = getCurrentDate()
    cy.log(currentDate)

    function get90DaysAgo() {
      var today = new Date();
      var daysAgo = new Date(today.setDate(today.getDate() - 90));
      var year = daysAgo.getFullYear();
      var month = String(daysAgo.getMonth() + 1).padStart(2, '0');
      var day = String(daysAgo.getDate()).padStart(2, '0');
      return year + '-' + month + '-' + day;
    }
    const ninetyDayAgo = get90DaysAgo()
    cy.log(ninetyDayAgo)

    cy.request({
      method: 'POST',
      url: 'http://127.0.0.1:8001/api/auth/pin',
      body: {
        pin: '2121'
      }
    }).then((response)=> {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('access_token')
      expect(response.body).to.have.property('token_type')
      expect(response.body).to.have.property('expires_in')

      const urls = [
        'http://127.0.0.1:8001/api/auth/user',
        'http://127.0.0.1:8001/api/pos_setting',
        'http://127.0.0.1:8001/api/driveronline',
        'http://127.0.0.1:8001/api/product?',
        'http://127.0.0.1:8001/api/product_package',
        'http://127.0.0.1:8001/api/product_category?',
        'http://127.0.0.1:8001/api/section',
        'http://127.0.0.1:8001/api/table_management',
        'http://127.0.0.1:8001/api/bank',
        'http://127.0.0.1:8001/api/promo',
        'http://127.0.0.1:8001/api/dynamic_promo',
        'http://127.0.0.1:8001/api/compliment',
        'http://127.0.0.1:8001/api/cityledger',
      ]

      function renderApiRequest(url) {
        cy.request({
             method: 'GET',
             url: url,
             body: {
               token : response.body.access_token
             }
           }).then ((response)=> {
             expect(response.status).to.eq(200)
             expect(response.body).to.have.property('data')
             cy.log(JSON.stringify(response.body))
           })
      }

      urls.forEach((url)=> {
        renderApiRequest(url);
      })
     
      cy.request({
        method: 'GET',
        url: 'http://127.0.0.1:8001/api/order',
        body: {
          token: response.body.access_token,
          begin_date: `${ninetyDayAgo}`,
          end_date: `${getCurrentDate}`,
          payed: 0
        }
      }).then ((response)=> {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        cy.log(JSON.stringify(response.body))
      })

      cy.getAllLocalStorage().then((localStorageData)=> {
        cy.log(localStorageData)
      })
      
      cy.getAllSessionStorage().then((localSessionStorage)=> {
        cy.log(localSessionStorage)
      })
      cy.wait(15000)
    })
  })

  Given ('after Login', ()=> {
    cy.get('[data-cy="beginning_balance_modal"]').should('exist')
  })

  Then ('I should see Enter Beginning Balance Modal', ()=> {
    cy.get('[data-cy="begining_balance__back_page_button"]').should('exist')
    cy.get('[data-cy="begining_balance__logout_button"]').should('exist')
  })
  
  When ('I click logout button', ()=> {
    cy.get('[data-cy="begining_balance__logout_button"]').click()
  })

  Then ('I should logout from Kokarmina Point of Sales', ()=> {
    cy.get('[data-cy="login_form"]').should('exist')
  })
})

```
#### Selenium Java with Cucumber

> this is the code when i using selenium java to conduct automations test

```java
package StepDefinitions;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import org.junit.Assert;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class login {
	ChromeOptions opt=new ChromeOptions();
	
	WebDriver driver = null;
	
	@Before
    public void setup() {
        opt.addArguments("--remote-allow-origins=*");
        opt.addArguments("--headless");
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver(opt);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(40));
        driver.manage().window().maximize();
        
        driver.navigate().to("http://localhost:3000");
    }
	
	@After
	public void end() {
		driver.quit();
	}
	
	@Given("^User accessing website URL$")
    public void user_accessing_website_url() throws Throwable {
	
		WebElement emailForm = driver.findElement(By.id("email"));
		
    }
	
	@When("^user enters email address \"([^\"]*)\"$")
    public void user_enters_valid_email_address_something(String validEmail) throws Throwable {
		
		WebElement emailForm = driver.findElement(By.id("email"));
		emailForm.sendKeys(validEmail);
		
    }

    @When("^User dont enter any credentials$")
    public void user_dont_enter_any_credentials() throws Throwable {
    	
    	WebElement emailInput = driver.findElement(By.id("email"));
    	WebElement passwordInput = driver.findElement(By.id("password"));
    	emailInput.sendKeys("");
    	passwordInput.sendKeys("");
;
    }

    @Then("^User should get succesfully login$")
    public void user_should_get_succesfully_login() throws Throwable {
    	
    	WebElement loginSuccessAlert = driver.findElement(By.xpath("//*[@id=\"swal2-title\"]"));
    	String loginSuccessAlertText = loginSuccessAlert.getText();
    	Assert.assertEquals("Login Berhasil", loginSuccessAlertText);
    			
    	WebElement qoligoAccess = driver.findElement(By.xpath("//*[@id=\"sidebar-wrapper\"]/div[1]/a"));
    	Assert.assertTrue(qoligoAccess.isDisplayed());
		
    }

    @Then("^login failed and user still at login page$")
    public void login_failed_and_user_still_at_login_page() throws Throwable {
    	
    	WebElement loginFailedAlert = driver.findElement(By.xpath("//*[@id=\"swal2-title\"]"));
    	String loginFailedAlertText = loginFailedAlert.getText();
    	Assert.assertEquals("Login Gagal", loginFailedAlertText);
    	
    	WebElement formLogin = driver.findElement(By.id("form-login"));
    	Assert.assertTrue(formLogin.isDisplayed());
    	
    }

    @And("^Enter password \"([^\"]*)\"$")
    public void enter_password_something(String validPassword) throws Throwable {
    	
    	WebElement passwordForm = driver.findElement(By.id("password"));
    	passwordForm.sendKeys(validPassword);
    	
    }

    @And("^Click on Login button$")
    public void click_on_login_button() throws Throwable {
    	driver.findElement(By.id("login_button")).click();
	}
    
    @Then("^user stay at login page$")
    public void user_stay_at_login_page() throws Throwable {
        
    	WebElement emailForm = driver.findElement(By.id("email"));
    	
    }

}
```
