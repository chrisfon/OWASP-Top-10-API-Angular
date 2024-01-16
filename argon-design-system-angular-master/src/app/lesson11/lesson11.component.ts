import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.component.html',
  styleUrls: ['./lesson11.component.css']
})
export class Lesson11Component implements OnInit {

  msg="Welcome to the tenth and final lesson on vulnerabilities, Unsafe Consumption of APIs.\nClick Next to continue the lesson...";
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
       this.msg="Welcome to the tenth and final lesson on vulnerabilities, Unsafe Consumption of APIs.\nClick Next to continue the lesson..."
       break;
     }
     case this.pagenum=1: {
       this.showNext = true;
     this.msg="This category of vulnerabilities include any potential issue or vulnerability found in third party and integrations in your own API.\n It also includes any issue related to how the API itself is consumed and includes vulnerabilities such as techniques that involve injection,de-serialization issues, desync attacks and attacks of this nature.\n\n The main target attackers use to exploit this type of vulnerability are third party integrations in your API; It can be very difficult to fix this type of vulnerability without decomissioning or atleast pausing the use of the third party service because the vulnerable code is generally only accessible by the third party service owners. ";
     break;
     }
     case this.pagenum=2: {
       this.msg="OWASP defines it as excess trust and/or no verification of endpoint that interact with external or third-part APIs and instead relying on weaker security mechanisms such as authentications, input validation and sanitization. Usually, the information needed to exploit this type of vulnerability is not publicly available.\n\nThe impact this type of vulnerability can have if exploited can vary greatly. It can range from sensitive information exposore, enable attackers to excecute other attacks such as injections or code excecution, denial of service up to complete take over of a system.";
       break;
       }
     case this.pagenum=3: {
       this.msg="OWASP categorizes an API vulnerable to this type of attack if these characteristics are present:\n\n-Includes interaction with other APIs over unencrypted channels\n-Does not properly validate nor sanitize data gathered from other APIs prior to using it.\n-Blindly follows redirections (in case third party service is compromised and the redirect is now a malicious site)\n-Does not have any limit on resources used by third party services.\n-No implementation of tiemouts for interactions with third party services.";
       
         break;
         }
     case this.pagenum=4: {
         this.msg="TRY IT!\n\n For this example, ";
         this.isDisabled = false; 
         break;
           }
     case this.pagenum=5: {
         this.msg="As for hardening against this category of vulnerabilities OWASP recommends:\n\n-Asses third party service security before integrating it in your own API.\n-Ensure any communication between APIs (even if both are your own) happens over a secure communication channel (TLS).\n-Make sure to always properly sanitize data recieved from integration before using it in your own API.\n-For APIs that use redirection make sure to have a whitelist of the permited sites to be redirected to and blacklist any others.";
         break;
         }
     case this.pagenum=6: {
         this.msg="In conclusion, not trusting any third party service is key to having a high level of security when integrating other services to your own. Making an initial and continous assestment of third party service security should be a priority before integrating it into an API. The negative effect this type of vulnerability can produce can be very damaging.\nIf you would like to read more on how this category of vulnerabilities have affected companies in real life read more about it in LunaSec's write up found here: https://www.lunasec.io/docs/blog/log4j-zero-day/ ";
         this.showResp = true; 
         this.showNext = false;
         //this.showPrev = false;
         //this.showNextLesson = true; 
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
//pantalla: 