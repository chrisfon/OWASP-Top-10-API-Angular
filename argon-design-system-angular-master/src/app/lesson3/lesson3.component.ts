import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {


  msg =
  "Welcome to the second vulnerability's lesson. Broken Authencation.\n Click next and follow the steps.";
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
isDisabled = true;
response =
  "HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'John', \n'Last Name' : 'Smith', \n'AccountNum' : 'CR11111111111',\n'Account Amount' : '6000'\n}";

changeMsg() {
  switch (this.pagenum) {
    case (this.pagenum = 0): {
      this.showNext = true;
      this.msg =
      "Welcome to the second vulnerability's lesson. Broken Authencation.\n Click next and follow the steps.";
      this.showIns = false;
      break;
    }
    case (this.pagenum = 1): {
      this.msg =
      "Broken Authentication is defined by OWASP as authentications mechanisms that are implemented incorrectly, allowing attacker to compromise authentication tokens or to exploit implementation flaws. In other words, it includes any vulnerabilities that compromise a system's ability to identify users correctly.\n\nThe potential impact of this type of vulnerability can be extremely high as it lets the attackers take over other users' accounts and access anything the compromised users has access to.";
      break;
    }
    case (this.pagenum = 2): {
      this.msg =
        "Failures in this mechanism that typically lead to unauthorized information disclosure, modification, or destruction of all data.\n\n This type of vulnerability is generally due to lack of protections mechanisms for Authentication API endpoints and/or bad implementations of the mechanisms (vulnerable code).\nSeveral factors can affect this vulnerability including: weak passwords allowed, failure to provision unique certificates per device (when aplicable), authentication material included in requests or URL, API keys as only authentication material, use of small key sized in encryption algorithms, no implementation of 2fa or mfa.";
      break;
    }
    case (this.pagenum = 3): {
      this.msg =
      "A bad implementation for authentication will not check and recheck (if already logged in) for credentials or if the user can access this function. This can lead to misuse of functinos to access other users credentials or authenticate as another user. \n\nAn example of vulnerable authentication code can be as following:"
      ;
      this.showIns = false;
      break;
    }
    case (this.pagenum = 4): {
      this.msg =
        "For an example, we can imagine a company that has an e-commerce website and utilizes an API to authenticate users and to change their passwords. In this code they have implemented, we can see that it only check a single authentication token of whoever is making the PUT method call without re-confirming their authentication (asking for password again); leading to attackers that have stolen an authetication token to be able to use this function on that user even if he is not authenticated as that same user.";
      //ense;ar el codigo vulnerable
      this.showNext = true;
      this.showPrev = true;
      this.showIns = true;
      break;
    }
    case (this.pagenum = 5): {
      this.showResp = false;
      this.msg =
      "TRY IT\n\n Based on last step's example, an attacker can use an email they control, and then try calling to that API using our stolen authentication token from an admin of the website to change the admin's account email to the attacker's.\n\nStolen Authentication Token:\n 1b1h34jkn7io7oi51lk34k\n\nCreated Email address:\n bad.actor@itsmail.com";
      this.isDisabled = false;
      break;
    }
    case (this.pagenum = 6): {
      this.msg =
      "As seen in the example, in this case the attacker could access the compromised account via changing its password with an email. Access to any admin account could result in severe damages. \n\nAn example of a more secure code to prevent this could be like the one located in the code box below. Where....";
      //show correct code
      break;
    }
    case (this.pagenum = 7): {
      this.msg =
      "There are different ways to avoid having this type of Vulnerability.\n First it is crucial to understand how all possible flows to authenticate using the API work. Use standards when it comes to toke generation and password storage, no need to reinvent it. It is important to implement rules and policies that will limit and avoid weak passwords, indefinite login attempts, and rate limiting. Where possible use multi-factor authentication.\n Another useful tool are Authentication Cheatsheets, which provide recomendations and can act as a guide to make sure your authentication mechanism is safe. OWASP provides its own authentication Cheatsheet here in its website https://cheatsheetseries.owasp.org";

      break;
    }
    case (this.pagenum = 8): {
      this.msg =
        "For testing an API for this kind of vulnerability it is crucial to keep a documented list of checkpoints, OWASP reccomends; Checking POST method is used for send data through HTTPS, make sure admin account cannot be blocked from invalid login atttempts, test for credential stuffing and brute force attacks (this can be done with tools such as hydra or wfuzz), check that the lockout mechanism is working properly, test for cache and history mechanism weaknesses, check any input related to password recovery and security has limited attempts, and verify every security measure in mobile (if it applies).";
      //this.showResp = true;

      break;
    }
    case (this.pagenum = 9): {
      this.msg =
        "In conclusion, Broken Authentication is a very important vulnerability to understand because it can have a huge impact on any business or project. It's crucial we follow the best practices and standards when it comes to using an API to authenticate users. ";
      this.showNextLesson = true;
      //this.showResp = true;
      this.showNext = false;
      this.showPrev = false;
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
  if (this.pagenum < 5) {
    this.changeTextColorBlack();
    this.showResp = !this.showResp;
    this.showNext = true;
    this.showPrev = true;
    this.fName = "John";
    this.lName = "Smith";
    this.accNum = "CR11111111111";
    this.accAmo = "$6000";
  } else if (this.pagenum > 4) {
    this.changeTextColorRed();
    this.showResp = !this.showResp;
    this.showNext = true;
    this.showPrev = true;
    this.fName = "Jane";
    this.lName = "Doe";
    this.accNum = "CR21212121212";
    this.accAmo = "$100,000";
  }
}

changeTextColorRed() {
  this.response = "HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'Jane', \n'Last Name' : 'Doe', \n'AccountNum' : 'CR21212121212',\n'Account Amount' : '100,000'\n}";
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
  this.response="HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'John', \n'Last Name' : 'Smith', \n'AccountNum' : 'CR11111111111',\n'Account Amount' : '6000'\n}";
  const fnameInput = document.getElementById("fName-input");
  fnameInput.style.color = "black";
  const lnameInput = document.getElementById("lName-input");
  lnameInput.style.color = "black";
  const accNumInput = document.getElementById("accNum-input");
  accNumInput.style.color = "black";
  const accAmoInput = document.getElementById("accAmo-input");
  accAmoInput.style.color = "black";
}

  constructor() { }

  ngOnInit(): void {
  }

}
//quitar botones next, etc cuando tienen qhacer algo en lesson 2 y 3. mostrar resultado de ataque en lesson3 (acc settings page), lesson4