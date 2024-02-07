import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson10',
  templateUrl: './lesson10.component.html',
  styleUrls: ['./lesson10.component.css']
})
export class Lesson10Component implements OnInit {

  msg="Welcome to the ninth lesson on vulnerabilities, Improper Inventory Management.\n\nClick Next to continue the lesson...";
  pagenum = 0;
  showNextLesson = false;
  showResp = false;
  showNext = true;
  showPrev = true;
  compDisabled=false;
  isDisabled = false;
 
  changeMsg(){
   //this.pagenum += 1;
   
   switch(this.pagenum){
     case this.pagenum=0: {
       this.msg="Welcome to the ninth lesson on vulnerabilities, Improper Inventory Management.\n\nClick Next to continue the lesson..."
       this.isDisabled = false; 
       break;
     }
     case this.pagenum=1: {
       this.showNext = true;
     this.msg="This category of vulnerabilities are mainly related to the creation and mantainance of a document that will keep track of the API's parts and any other API that interacts with it. It is a critical part of security of any API to keep an up to date record of it's inventory to understand potential exposure and risk that comes with each part.\n An outdated or incomplete inventory can result in unknown gaps of security in your API and make it difficult to identify older versions of the API or a component of the API that should be decommisioned.\nIt is extremely easy for a microservice or other types of similar services that are constantly being created, updated and deployed to not be properly documented; leading to a vulnerability of this type.";
     break;
     }
     case this.pagenum=2: {
       this.msg="OWASP defines this type of vulnerability as lack of assets inventory and retirment strategies that lead to running unpatched systems and overexposed older version of endpoints that can result in leakage of sensitive data.\n Generally attackers will find outdated versions of the API or one of its parts using techniques like google dorking, DNS enumeration or specialized search engines that are available publicly.\n The effects of having a depreaceated endpoint can have over a system will vary from being able to access and read sensitive information, access to administrator functions, up to (in an extreme case) a complete server take-over.";
       break;
       }
     case this.pagenum=3: {
       this.msg="Some characteristics mentioned by OWASP that describe an API has a documentation blindspot are:\n-Purpose of API host is unclear.\n-Not keeping track what versions everything should be.\n-There is no documentation or the documentation is not constantly updated with each change.\n-There is no retirement plan for each API Version.\n-The host should also have a proper documentation over everything that interacts with the API.\n-No documentation (or does not include it) of business flow that interacts with the API.";
       
         break;
         }
     case this.pagenum=4: {
         this.msg="For hardening, OWASP recommends:\n-Keep a detailed inventory of all API hosts and important aspects of each one, with a focus on API environment (production, staging, tests, interactions, network accesses,etc.)\n-Invetory of integrated services and important aspects like their role in the overall system, what data should be exhanged, their sensitivity, etc.\n-Make sure API documentation is ONLY available to authorized people in the organization.\n-Avoid mixing data from production servers and API with staging/development servers and API.\n-If older versions are needed, make sure to algo perfrom risk analysis and have mitigation plans for them.";
         
         this.showNextLesson = false;
        this.showNext = true;
         break;
           }
     case this.pagenum=5: {
         this.msg="In conclusion, documentation is often an overlooked part of security in an API but it still plays an important role in keeping it safe. It is necesary for any API to have a detailed documentation that is constantly being updated and revised or it could lead to a blindspot in security that can be very difficult and tricky to fix.\n\nTo read about a real life scenario where Telco Optus lost a million dollars becaues of this vulnerability read more here: https://salt.security/blog/how-a-common-api-vulnerability-might-cost-telco-optus-1-million?";
         this.showResp = true; 
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
   this.showResp = !this.showResp;
  }
 

  constructor() { }

  ngOnInit(): void {
  }
}
//h