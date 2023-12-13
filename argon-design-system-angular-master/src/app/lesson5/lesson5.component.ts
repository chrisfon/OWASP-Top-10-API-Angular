import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.css']
})
export class Lesson5Component implements OnInit {
  msg =
  "Welcome to the first vulnerability we will be learning about. Broken Object Level Authorization.\n\n Click next and follow the steps.";
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
        "An example attack scenario for this type of vulnerability can be a company that has an API endpoint for a user who forgot his password to reset it. In this workflow the API calls to a third party API from a telephone company to tell it to send a text to the number associated to the account that forgot its password. If there is a cost associated to each text (for example $0.05 if it was in the USA) and there is no limit; an attacker could potentially make a script that will call to the forget password api thousands of times, leading to a huge loss of money for the website owner.";
      this.showIns = false;
      break;
    }
    case (this.pagenum = 4): {
      this.msg =
        "TRY IT!\n\n Click the inspect button in the browser to see the JSON object that is being pulled when accessing the user settings.\n\n In this case it calls to our api using the GET method towards api/user/[userID]";
      this.isDisabled = false;
      this.showNext = false;
      this.showPrev = false;
      this.showIns = true;
      break;
    }
    case (this.pagenum = 5): {
      this.showResp = false;
      this.showNext = false;
      this.showPrev = false;
      this.msg =
        "With any program to test APIs, (for example, POSTMAN) we can try and call to the API using another user ID; try it again with the Inspect button in the browser and notice the changes in red.\n\n In this case since there is no verification that the user making the API call is actually logged into the user they are searching, then it will let said user request information by using any other user's ID.";
      break;
    }
    case (this.pagenum = 6): {
      this.msg =
        "There are different ways to help fix this type of Vulnerability.\n\n A posible way that it can be mitigated can be through the use of UUIDs instead of a manually set or structured way to set ID. A UUID is an ID that is randomly generated with no specific pattern. This can make it much more difficult for attackers to identify other users ID.\n Another important step a developer must take to ensure that only authorized users can see their information is to validate that whoever is making the API call has permission to view the object before sending the API call.";

      break;
    }
    case (this.pagenum = 7): {
      this.msg =
        "Keep in mind that when testing an API's security for this type of vulnerability it is important to Identify session labels (what is used by the API to identify the logged-in user.), then send API requests using different user's session labels to make sure only the information the user has permission to view is opened. If not the vulnerability still exists.";
      //this.showResp = true;

      break;
    }
    case (this.pagenum = 8): {
      this.msg =
        "In conclusion, BOLA is a vulnerability that is present when an API's GET call can be misused to view information you should not have access to. This can be due to predicatable and easy to guess IDs, and a bad (or non) implementation of access control to sensitive data.\n\nSome ways we can fix this can be through implementation of randomized ID with no pattern, access controls and checks for sensitive information, and authorization check when APIs are called.";
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
