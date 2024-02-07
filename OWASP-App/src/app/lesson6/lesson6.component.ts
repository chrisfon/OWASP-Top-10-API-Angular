import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {

  msg="Welcome to the fifth lesson where we will learn about Broken Function Level Authorization.\nClick next and follow the steps...";
  pagenum = 0;
  showNextLesson = false;
  showResp = false;
  showReq = false;
  showNext = true;
  showPrev = true;
  showIns = false;
  compDisabled=false;
  isDisabled = true;
  request = "GET api/v1/search\nHTTP1.1 \nHost:api.example.com/\nContent-Type: application/json\nConnection: keep-alive\nContent-Length: 35\n Expires: 0\n{\n'search_filter':\n'user_name=John.Smith'\n'role=user'\n}"
  response="POST api/v1/search\nHTTP1.1 \nHost:api.example.com/\nContent-Type: application/json\nConnection: keep-alive\nContent-Length: 35\n Expires: 0\n{\n'search_filter':\n'user_name=bad.actor'\n'role=admin'\n}"
 
  changeMsg(){
   //this.pagenum += 1;
   
   switch(this.pagenum){
     case this.pagenum=0: {
       this.msg="Welcome to the fifth lesson where we will learn about Broken Function Level Authorization.\nClick next and follow the steps..."
       break;
     }
     case this.pagenum=1: {
       this.showNext = true;
     this.msg="Broken Function Level Authorization is a vulnerability related to access control to the function and endpoints in an API. It is a vital part of any API's security to restrict who can use what functions and access what endpoints.\n\nIn previous lessons we learned about the importance of controlling object's properties and exposure of objects; this is no different to that but is more related to the specific functions and endpoints. ";
     break;
     }
     case this.pagenum=2: {
       this.msg="OWASP defines Broken Function Level Authorization as an exploitation that requires an attacker to send a ligitimate api call to an API endpoint they should not have acces to as anonymous or regular user. They are usually exposed endpoint that can be easily exploited.\nAuthorization checks for a function are usually managed via configuration files or at a code level. Implementation of proper checks is very important but can be a complex task in modern applications that handle a lot of roles and groups.\nThis type of vulnerability can have a high impact if exploited as it allows attackers to access critical functions. Access to this can lead to data loss, exposure of sensitive information, data corruption, privilege escalation and/or service disruption.";
       break;
       }
     case this.pagenum=3: {
       this.msg="A simple example of this can be an application in which it has the option for a user to search another user through the use of an Ppi's GET Call which will take the input from the user and search it in a database to find a match. If no Authorization checks are in place then a user could craft an identical api call to the search but using another method such as DELETE, PUT or POST to either delete, modify or create data. This could cause tons of problemas for any business at it would let the attacker modify or create admin and other accounts.\n\nPress the Get and Inspect button to see the request and then Next to see how an attacker could simple change the HTTP Method to create a malicious request and make an admin account.";
       this.showNext = false;
       this.showPrev = true;
       this.isDisabled = false; 
       this.showReq = false;
       this.showResp = false;
         break;
         }
      case this.pagenum=4: {
          this.msg="Based on the example in last slide, we can see the type of request that is sent when searching a user. If unsercured an attcker could use a tool to craft an HTML request with POST to create an admin account by changing the role property. Press the Inspect button again to show the malicious request.\n\n To Read about a real-life case about how this type of vulnerability affected Target in 2013 you can read here: https://www.businessinsider.com/analysis-of-target-data-breach-2013-12.";
          
            break;
            }
     case this.pagenum=5: {
         this.msg="To help mitigate and test against this type of vulnerability OWASP recommends:\n- Check if regular and anonymous users can access administrative endpoints and functions.\n- Check every endpoint regular users have access to and test for every HTTP Method to assure they cannot do any actions they shouldn't be allowed to.\n- Test functions between different roles and groups if applicable.\n- Never expose admin endpoints and user endpoints under the same path. (Ex. /api/admins/add_user vs /api/users/add_user for account creation, even if they share that function)";
         this.showNext = true;
         this.showNextLesson = false;
         break;
           }
     case this.pagenum=6: {
         this.msg="In conclusion this vulnerability is common because of how complex modern application heirarchies can be. It's impact can be huge if present. It is very important to triple check every role and group, and the paths used to access the endpoints to make sure this vulnerability will not affect your API.\n\nIf you would like to read about a real life case in which a company was affected by this vulnerability visit this link: https://hackerone.com/reports/334143";
         this.showNext = false;
         //this.showPrev = false;
         this.showNextLesson = true;
         break;
         }
    
         
   }
  }
 
  nextMsg(){
   this.pagenum += 1;
   this.changeMsg();
   console.log(this.pagenum);
  }
  prevMsg(){
   if (this.pagenum>0){
     this.pagenum -= 1;
     this.changeMsg();
     console.log(this.pagenum);
   }
     
  }
 
 
 
  respShow(){
   
   if (this.showResp = true){
    this.showReq = true;

   }
   this.showResp = true;
   this.showNext = true;
   this.showPrev = true;
   this.showIns = true;
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
