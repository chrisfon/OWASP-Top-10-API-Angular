import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit {
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
  "{ \n'username' : 'John.Smith', \n'UserID' : '05235', \n'tip_amount' : '1', \n'user_email' : 'john.smith@itsmail.com'\n}";

changeMsg() {
  switch (this.pagenum) {
    case (this.pagenum = 0): {
      this.showNext = true;
      this.msg =
        "Welcome to the third vulnerability we will be learning about. Broken Object Level Property Authorization.\n\n Click next and follow the steps.";
      this.showIns = false;
      break;
    }
    case (this.pagenum = 1): {
      this.msg =
      "OWASP defines Broken Object Property Level Authorization as properties that are overexposed in an object that is accessible by the user. It is very important to take into consideration what properties of an object are exposed to who, not every user should have access to every property of an object, even if they are authorized to access some properties of the object. Even if exposing non sensitive data seems harmless this type of vulnerability can lead to escalation of privilage by an attacker, alteration of data, and access to sensitive data.";
      break;
    }
    case (this.pagenum = 2): {
      this.msg =
        "An API with this type of vulnerability might over expose some sensitive information which can lead to the API being compromised, an attacker being able to view sensitive information, users accessing admin functions and/or in more extreme cases, taking over other users account. \n\nGenerally, attacker use fuzzing or similar techniques to find additional hidden properties of objects; so just hiding them won't work!";
      break;
    }
    case (this.pagenum = 3): {
      this.msg =
        "For an example of a case in which this vulnerability exists, we can think of a casino platform with a player tipping function in which any user can send funds to other as a 'tip' through a POST call of an API. If this vulnerability would be present and all information about the player tipped is exposed, then whoever sends the fund could look at the response from the API and figure out valuable information such as userID, email, and other details like those.";
      
      break;
    }
    case (this.pagenum = 4): {
      this.msg =
        "TRY IT!\n\n Send a Tip to our example user whose username is John.Smith and then peek at the response using the inspect button in the browser.";
      this.showIns = false;
      this.isDisabled = false;
      this.showNext = false;
      this.showPrev = false;
      break;
    }
    case (this.pagenum = 5): {
      this.showResp = true;
      this.msg =
        "In our response we can see that it contains different properties such as email and userID. If other vulnerabilities are present an attacker could use this information to cause a larger impact on their attack.\n\n In this case, we only have over exposed properties on our objects, but this vulnerability could be even more dangerous if certain functions in the companie's API did not implement proper access control to function and object's properties.";
      break;
    }
    case (this.pagenum = 6): {
      this.msg =
        "To mitigate the chances of having this type of vulnerability OWASP recommends:\n\n- When exposing objects in API endpoints, double check what a user's access to the object's properties are. \n- Avoid using generic methods (like to_json() or to_string()) to avoid exposing all of the object's properties. Instead use created methods that return a specific object or object properties.\n- Allow changes only to the object's properties that should be updated by the clinet.\n- Keep returned data structure to the bare minimum based on the businesses requirements.\n- Optionally, implement a schema-based response validation mechanism as an extra leter of security. (A mechanism that will define and enfore data return by API methods.)";

      break;
    }
    case (this.pagenum = 7): {
      this.msg =
        "In conclusion, it is essential that there is a validation mechanism when a user accesses an object through the use of an API. Not doing so can result in data loss or corruption, unauthorized access to sensitive information, and in some cases can lead to privilege escalation or account takeover.";
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

showInspect(){
  this.showIns = true;
}

respShow() {
    this.showResp = !this.showResp;
    this.showNext = true;
    this.showPrev = true;
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
