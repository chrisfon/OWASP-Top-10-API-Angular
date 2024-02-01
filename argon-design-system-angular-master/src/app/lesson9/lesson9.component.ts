import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson9',
  templateUrl: './lesson9.component.html',
  styleUrls: ['./lesson9.component.css']
})
export class Lesson9Component implements OnInit {

  msg="Welcome to the eighth lesson on vulnerabilities, Security Misconfiguration.\n\nClick Next to continue the lesson...";
  pagenum = 0;
  showNextLesson = false;
  showResp = false;
  showNext = true;
  showPrev = true;
  compDisabled=false;
  isDisabled = true;
  request = "GET api/v1/latitude=52.52&longitude=13.41&current=temperature HTTP1.1 200\nHost:api.open-meteo.com/\nContent-Type: application/json\nConnection: keep-alive\nContent-Length: 35\n Expires: 0"
  response="{\n'latitude': 52.52,\n'longitude': 13.419998,\n'timezone': 'GMT',\n'timezone_abbreviation': 'GMT',\n'elevation': 38.0\n'temperature': 2.4\n}"
  showCopy = false;
  showResult = false;
  changeMsg(){
   //this.pagenum += 1;
   
   switch(this.pagenum){
     case this.pagenum=0: {
       this.msg="Welcome to the eighth lesson on vulnerabilities, Security Misconfiguration.\n\nClick Next to continue the lesson..."
       break;
     }
     case this.pagenum=1: {
       this.showNext = true;
     this.msg="This vulnerability is a category that works as a catch-all for any incident that can occur related to configurations of different components of an API, such as its Database credentials and configurations, misconfiguted http headers, verbose error messages, and other parts which will be explained later in this lesson.\n It can be present in any part of the API and its components. It can even affect third party APIs your own API might use and can open up possiblity to exploit other types of vulnerabilities and attacks.";
     break;
     }
     case this.pagenum=2: {
       this.msg="OWASP defines it as unpatched flaws, common endpoints, services with default configuration and unprotected files and riectores that attackers can leverage to gain unathorized access or knowledge of a given system. Most of the knowledge needed for an available exploit of this kind will generally done using publicly known knowledge (default router pass, default DB pass, etc). \nIt can have a devastating effect on a system if exploited. It can let attackers access and change sensitive information on its users, access sensitive system information (which can lead to a full server compromise) and access to administrator functions. ";
       break;
       }
     case this.pagenum=3: {
       this.msg="Some characteristics to know if the API has this vulnerablity is if it includes:\n\n-Inappropiate secuity herdening in any part of the API stack or a cloud service that is used in the API.\n-Lack of latest security patches.\n-Security or cache control directeives aren't sent to clients.\n-Cross-Origin Resource Sharing (CORS) policy is missing or improperly set.\n-Error messages are verbose and iunclude sensitive information on the system (stack traces, paths,etc.)";
       
         break;
         }
     case this.pagenum=4: {
         this.msg="An example of this can be a simple scenario in which a given company has an up to date system with great security policies and component. It can even include advanced security by using a WAF, but left its database default users and credentials on. The problem can arise if not all credentials were properly checked to not be let in a default state. If this is the case any attacker could simply try a list of default passwords using a dictionary and access the admin account's credentials to view all the information in that databse.";
         //this.isDisabled = false; para que no se active la "pantalla"
         this.showNext = true;
         break;
           }
     case this.pagenum=5: {
         this.msg="TRY IT!\n\n As an attacker, we have been trying to access this server through pentesting different parts of its website. We discover its login uses active directory to authenticate it users to the administrative page. In Active directory there are 2 default users; Check if one of them are available!\n\nDefault Users:\n-User: Administrator | Password: admin\n-User: Guest | Password: (blank)";
        this.isDisabled = false;
         this.showNext=false;
         break;
         }
     case this.pagenum=6: {
         this.msg="For Hardening against this type of vulnerability it is important to consider the following:\n-Have procceses in place that will help test for all the default values, help review and update configurations manually before deployment.\n-It is critical to have all API communication from client to the API server to be sent of an encrypted communication channel (transport layer sec).\n-Limit which http verbs each api can access (limit to GET if it should only get, disable the rest).\n-Include Applicable Security headers\n-Restrict incoming content types/data to only the formats needed.\n-Implement proper Cross-Origin Resource Sharing policies that will be based on your business needs.";
         this.showNextLesson = false;
         this.showNext = true;  
         break;
           }
     case this.pagenum=7: {
         this.msg="In conclusion, this type of vulnerability is regarded as simple but if present can affect the critical parts of any organization. The most important takeaway is to never trust any default configuration and double check everything is enablde/disabled and set manually.\n\nTo Learn about a real-life scenario in which a bank was compromised using this type of misconfiguration read here: https://www.fugue.co/blog/a-technical-analysis-of-the-capital-one-cloud-misconfiguration-breach";
         this.showResp = true; 
         this.showNext = false;
         //this.showPrev = false;
         this.showNextLesson = true;
         break;
           }
         //COMPROBAR SI PERMITEN USAR ESTE LINK, ES DE UNA EMPRESA QUE OFRECE CLOUD SERVICES BASTANTE GRANDE Y CONFIABLE QUE HIZO UN WRITE UP SOBRE ESTA VULNERABILIDAD
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
 
  loginClick() {
    let input = (<HTMLInputElement>document.getElementById("user-input"))
      .value;
      let input2 = (<HTMLInputElement>document.getElementById("pass-input"))
      .value;
    //se usa lo de <> para que se sepa que es un html element que contiene una propiedad "value"
    console.log(input);
    if (input2 == "" && (input == "Guest" || input == "guest")) {
      this.showResult = true; //PARA QUE MUESTRE PANTALLA DE RESULTADO
      this.showNext = true;
      alert("Login Successful.\nRedirecting to Admin panel...");
      //talves enviar a otra pantalla?
    } else {
      alert("Wrong Credentials...");
    }
  }
 
  respShow(){
   this.showResp = !this.showResp;
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
