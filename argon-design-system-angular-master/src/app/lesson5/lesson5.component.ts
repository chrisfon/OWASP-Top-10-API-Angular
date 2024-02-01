import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson5",
  templateUrl: "./lesson5.component.html",
  styleUrls: ["./lesson5.component.css"],
})
export class Lesson5Component implements OnInit {
  msg =
    "Welcome to the fourth vulnerability we will be learning about. Unrestricted Resource Consumption.\n\n Click next and follow the steps.";
  pagenum = 0;
  showNextLesson = false;
  showResp = false;
  showNext = true;
  showPrev = true;
  compDisabled = false;
  showIns = false;
  fName = "";
  lName = "";
  accNum = "";
  accAmo = "";
  color = "black-50";
  costCounter = 0;
  showLogin = true;
  isDisabled = true;
  response =
    "HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'John', \n'Last Name' : 'Smith', \n'AccountNum' : 'CR11111111111',\n'Account Amount' : '6000'\n}";

  changeMsg() {
    switch (this.pagenum) {
      case (this.pagenum = 0): {
        this.showNext = true;
        this.msg =
          "Welcome to the fourth vulnerability we will be learning about. Unrestricted Resource Consumption.\n\n Click next and follow the steps.";
        this.showIns = false;
        break;
      }
      case (this.pagenum = 1): {
        this.msg =
          "Unrestricted Resource Consumption is a simple but very important topic to know about when developing an API. This vulnerability includes any exploit that does not limit the amount of requests and resources can be consumed by a single user/client.\n\nAs a result, it can cause what is knows as a 'Deniel of Service' or DOS attack. This can momentarily interrupt production by overwheliming server or api capacity via high loads of traffic; leaving it to no longer be able to accept new requests.";
        break;
      }
      case (this.pagenum = 2): {
        this.msg =
          "This type of vulnerability's impact can be extremey high and spread out. The most direct impact it has is a denial of service due to resource starvation but it can also indirectly affect costs due to high CPU demands (in case of cloud computing) and depending on the resource that is being used for the attack it can also cause increased costs in other areas such as storage needs.\n\n It is important for any API to implement rules and policies to limit resource consumption. Generally a safe API should have Execution timeouts, Maximum allocable memory, Maximum number of processes, Maximum upload file size and Third-party service providers' spending limit. ";
        break;
      }
      case (this.pagenum = 3): {
        this.msg =
          "An example attack scenario for this type of vulnerability can be a company that has an API endpoint for a user who forgot his password to reset it. In this workflow the API calls to a third party API from a telephone company to tell it to send a text to the number associated to the account that forgot its password. If there is a cost associated to each text (for example $0.05) and there is no limit; an attacker could potentially make a script that will call to the forget password api thousands of times, leading to a huge loss of money for the website owner.\nAnother simple example could be website or application where a user can upload an image using an API; if there is no limit to the file size, an attacker could upload huge files and take up a big amount of the companie's storage.";
        this.showIns = false;
        break;
      }
      case (this.pagenum = 4): {
        this.msg =
          "TRY IT!\n\n In the browser to our right we are accessing the change password function of the attackers account (it can be exploited from any account in this case). Try spamming the send code function and notice how the counter will keep incresing with each text sent.\n\nAn attacker could use a script to send hundereds of requests at a time, costing the company that hosts the site tons of money.";
        this.isDisabled = false;
        this.showNext = false;
        this.showPrev = false;
        this.showIns = true;
        break;
      }
      case (this.pagenum = 5): {
        this.showResp = false;
        //this.showNext = false;
        //this.showPrev = false;
        this.msg = //fixes
          "To prevent this vulnerabilities and mitigate their effect OWASP recommends:\n\n-  Using solutions that make it easy to limit memory, CPU, number of restarts, file descriptor, and processes with tools such as containers (docker) and/or serverless code.\n- Implement rate limiting so client is limited on how oftern a client can itneract with the API.\n- Base limits and throttle to be based on the business needs.\n- Input validation to prevent attackers from sending requests with a significant amount of processing or memory resources.\n- Configure billing and usage alerts in case there is an issue so it can be solved before it becomes a cost or storage problem.";
          this.showNextLesson = false;
          this.showNext = true;
          break;
      }
      case (this.pagenum = 6): {
        this.msg = //tests
          "In conclusion, Unrestricted resource consumption is a tricky but still very serious risk that can affect a company financially and their service/product's availability and performance. It is very important to have a prevention strategy that will include the recommendations given in this lesson.\n\nIf you would like to read more on this visit: https://cwe.mitre.org/data/definitions/400.html";
        this.showNext = false;
        this.showNextLesson = true;
        break;
      }
    }
  }
  nextMsg() {
    this.pagenum += 1;
    this.changeMsg();
    console.log(this.pagenum);
  }
  prevMsg() {
    if (this.pagenum > 0) {
      this.pagenum -= 1;
      this.changeMsg();
      console.log(this.pagenum);
    }
  }

  respShow() {
    this.showResp = true;
    
    
    this.costCounter += 0.05;
    if (this.costCounter > 0.15){
      this.showPrev = true;
      this.showNext = true;
    }
  }
  forgotPass() {
    this.showLogin = false;
  }

  changeTextColorRed() {
    this.response =
      "HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'Jane', \n'Last Name' : 'Doe', \n'AccountNum' : 'CR21212121212',\n'Account Amount' : '100,000'\n}";
    const fnameInput = document.getElementById("fName-input");
    fnameInput.style.color = "red";
    const lnameInput = document.getElementById("lName-input");
    lnameInput.style.color = "red";
    const accNumInput = document.getElementById("accNum-input");
    accNumInput.style.color = "red";
    const accAmoInput = document.getElementById("accAmo-input");
    accAmoInput.style.color = "red";
  }
  changeTextColorBlack() {
    this.response =
      "HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'John', \n'Last Name' : 'Smith', \n'AccountNum' : 'CR11111111111',\n'Account Amount' : '6000'\n}";
    const fnameInput = document.getElementById("fName-input");
    fnameInput.style.color = "black";
    const lnameInput = document.getElementById("lName-input");
    lnameInput.style.color = "black";
    const accNumInput = document.getElementById("accNum-input");
    accNumInput.style.color = "black";
    const accAmoInput = document.getElementById("accAmo-input");
    accAmoInput.style.color = "black";
  }
  constructor() {}

  ngOnInit(): void {}
}
