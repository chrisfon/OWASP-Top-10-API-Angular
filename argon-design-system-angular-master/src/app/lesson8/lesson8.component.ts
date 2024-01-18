import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.css']
})
export class Lesson8Component implements OnInit {

  msg="Welcome to the seventh lesson on vulnerabilities, Server Side Request Forgery.\n\nClick Next to continue the lesson...";
  pagenum = 0;
  showNextLesson = false;
  showResp = false;
  showNext = true;
  showPrev = true;
  compDisabled=false;
  isDisabled = true;
  request = "GET api/v1/latitude=52.52&longitude=13.41&current=temperature HTTP1.1 200\nHost:api.open-meteo.com/\nContent-Type: application/json\nConnection: keep-alive\nContent-Length: 35\n Expires: 0"
  response="{\n'latitude': 52.52,\n'longitude': 13.419998,\n'timezone': 'GMT',\n'timezone_abbreviation': 'GMT',\n'elevation': 38.0\n'temperature': 2.4\n}"
 
  changeMsg(){
   //this.pagenum += 1;
   
   switch(this.pagenum){
     case this.pagenum=0: {
       this.msg="Welcome to the seventh lesson on vulnerabilities, Server Side Request Forgery.\n\nClick Next to continue the lesson..."
       break;
     }
     case this.pagenum=1: {
       this.showNext = true;
     this.msg="OWASP defines Server Side Request Forgery includes any vulnerability that is present when an API is fetching a remote resource without validating the user-supplied URL. In modern applications it can be common to spot it when the application uses user input for the use of webhooks, file fetching from URLs and URL previews. Exploitation requires attackers to find an API endpoint that accesses a URL based on user input. If exploited, this type of vulnerability can lead to port scanning, sensitive information disclosure (not necesarrily access), using servers as proxies to hide malicious activity and enabling attacker to bypass securtity mechanisms such as firewalls.";
     break;
     }
     case this.pagenum=2: {
       this.msg="To protect and help mitigate against Server Side Request Forgery OWASP recommends:\n\n-Isolate resource fetching mechanisms that get data from remote resources.\n-Use allow lists for resources that need to be downloaded (for example, google drive, Imgur, and other similar providers).\n-Disable HTTP redirections.\n-Validate and Sanitize any client-supplied data.\n-Never send raw responses to clients as to not reveal any uneccesary information that could be used by an attacker.";
       break;
       }
     case this.pagenum=3: {
       this.msg="An attack of this kind occurs when an attacker successfully maniupulated and endpoint to make the targeted server perform unintended requests that can give the attacker valuable information or enable him to bypass security mechanisms for further attacks.\nGenerally, this type of attack exploits the fact there is trust in the servers running the API so if an attacker can 'trick' it into making his own custom requests, it can access internal or external resources from that server. An attacker can use external resources to help inject or excecute code, and/or redirect to malicious sites; it can use access to internal resources because by using a trust server it will most likely bypass any type of access control that is present.";
       
         break;
         }
         
         case this.pagenum=4: {
         this.msg="In conclusion, having little to no trust in user input is very important for URL based resources. It is key for better security to always monitor API behaviour specaially when accessing external resources, monitoring can lead to a faster response and help mitigate the effects of this vulnerability. ";
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
