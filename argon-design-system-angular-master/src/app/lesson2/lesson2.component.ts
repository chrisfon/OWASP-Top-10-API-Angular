import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson2",
  templateUrl: "./lesson2.component.html",
  styleUrls: ["./lesson2.component.css"],
})
export class Lesson2Component implements OnInit {
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
  response =
    "HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'First Name' : 'John', \n'Last Name' : 'Smith', \n'AccountNum' : 'CR11111111111',\n'Account Amount' : '6000'\n}";

  changeMsg() {
    switch (this.pagenum) {
      case (this.pagenum = 0): {
        this.showNext = true;
        this.msg =
          "Welcome to the first vulnerability we will be learning about. Broken Object Level Authorization.\n\n Click next and follow the steps.";
        this.showIns = false;
        break;
      }
      case (this.pagenum = 1): {
        this.msg =
          "Object Level Authorization is a means of access control mechanism that is in charge of validating that a user can only access objects that they have permision to view or manipulate.\n\nIt is a crucial part of any API because APIs can contain tons of valuable information from every user or type of object. \n For example; an api to pull user information such as account number, amount, etc.";
        break;
      }
      case (this.pagenum = 2): {
        this.msg =
          "OWASP defines a Broken Object Level Authorization (or BOLA) vulnerability as failures in this mechanism that typically lead to unauthorized information disclosure, modification, or destruction of all data.";
        break;
      }
      case (this.pagenum = 3): {
        this.msg =
          "As an example of this we can take an API that is used by a website that utlizes an API to pull user information when accesing and editing their profile.\n\n In this case we can check out our inspect and it will show us that the API uses a structure in their query that follows api/users/[ID].\n\nIf a BOLA vulnerability is present, and no verification of that the user making the call has permission to view the information called; then the attacker will be able to view the settings and information of any user by sending a GET request with another ID of his choice.";
        this.showIns = false;
        break;
      }
      case (this.pagenum = 4): {
        this.msg =
          "TRY IT!\n\n Click the inspect button in the browser to see the JSON object that is being pulled when accessing the user settings.\n\n In this case it calls to our api using the GET method towards api/user/[userID]";
        this.showNext = false;
        this.showPrev = false;
        this.showIns = true;
        break;
      }
      case (this.pagenum = 5): {
        this.showResp = false;
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

  constructor() {}

  ngOnInit() {}
}
