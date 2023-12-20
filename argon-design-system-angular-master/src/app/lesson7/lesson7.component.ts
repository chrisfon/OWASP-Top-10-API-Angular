import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit {


  msg="Welcome to the sixth vulnerability we will be learning about Unrestricted Access to Sensitive Business Flows. \n\nClick Next to continue...";
  pagenum = 0;
  showNextLesson = false;
  showResp = false;
  showNext = true;
  showPrev = true;
  compDisabled=false;
  isDisabled = true;
  isScript = false;
  showScript = false;
  tickBought = 0;
  tickLeft = 200;
  request = "GET api/v1/latitude=52.52&longitude=13.41&current=temperature HTTP1.1 200\nHost:api.open-meteo.com/\nContent-Type: application/json\nConnection: keep-alive\nContent-Length: 35\n Expires: 0"
  response="{\n'latitude': 52.52,\n'longitude': 13.419998,\n'timezone': 'GMT',\n'timezone_abbreviation': 'GMT',\n'elevation': 38.0\n'temperature': 2.4\n}"
  script = "params={\n'token_id':1h1818912h84ndf\n'ticket_amount':20,\n'ticket_price':20\n'payment_method':Paypal_1\n}\n\nresponse=request.post(ITSTickets.com/api/tickets/buy, data=params)\n\n if response.status_code=200:\n  print('success')\nelse:\n  print('error')"
 
  changeMsg(){
   //this.pagenum += 1;
   
   switch(this.pagenum){
     case this.pagenum=0: {
       this.msg="Welcome to the sixth vulnerability we will be learning about Unrestricted Access to Sensitive Business Flows. \n\nClick Next to continue..."
       break;
     }
     case this.pagenum=1: {
       this.showNext = true;
     this.msg="This type of vulnerability does not target a specific bad practice or tries to exploit a bad piece of code, instead it targets the logic of the business in relation to the website. It can be tough to spot since it will vary for each different application/website. Generally attacker use a script to automate an attack where the vulnerability is present.";
     break;
     }
     case this.pagenum=2: {
       this.msg="OWASP defines Unrestricted Access to Sensitive Business Flows as a overexposed business flow in an API endpoint. The impact and risk will vary from industry to industry but the logic behind it remains the same. This vulnerability can be present due to lack of mechanisms that will limit amount of requests and check if the requests are legitimately from a user and not automated.\n Attackers looking to exploit this vulnerabilty will look to disrupt or spam a business flow, commonly used techniques would be scalping in e-commerce websites, spamming a system with comments/posts in social media sites, spamming reservations in airlines, restaraunts, etc.";
       break;
       }
     case this.pagenum=3: {
       this.msg="As an example of this we can think of a ticket sales website that implements an api to purchase tickets for concerts and events. They do not have any mechanism to assure whoever makes the API request is human, nor do they have any mechanism to limit how often tickets can be bought. In this scenario an attacker could create a script to spam buy requests and buy majority of the tickets to the event or concert, then sell them at a greater price for a profit.";
       this.showScript = false;
         break;
         }
     case this.pagenum=4: {
         this.msg="TRY IT\nA script that could accomplish the attack described in our example will send a request (in this case POST) to the API with the information identifying the event and calling the buy function with the payment data included. Click Reserve now! to see how it should work, then run the script and continue";
         this.tickBought = 0;
         this.tickLeft = 0;
         this.isDisabled = false; 
         this.showScript = true;
         
         this.showNext = false;
         this.showPrev = false;
         break;
           }
     case this.pagenum=5: {
         this.msg="In our example the impact it had over the business running the website isn't necesarily financial since they will get paid for evrey ticket bought automatically but it can affect other areas such as trust in the company and quality of service towards their users. The attacker would benefit if/when he sales the tickets at a higher price in a secondary market (in some cases even through the same site).";
         this.showScript = false;
         break;
         }
     case this.pagenum=6: {
         this.msg="To Mitigate against this type of attack OWASP recommends:\n- Planning to avoid and mitigate for this type of attack in two layer; Business (business flow) and Engineering (protecition mechanisms to be used).\n- Have a mechanism to slowdown automated threats such as Device fingerprinting, Captchas, biometric solutions.\n- Mechanism to detect non-human patterns. (in our exmaple detecting a ticket added to cart, going to pay now page, etc.)\n- Blocking commonly used IPs for automated attacks (such as from countries that dont affect your business, Tor exit nodes, etc.)";
           break;
           }
     case this.pagenum=7: {
         this.msg="As mentioned before this vulnerability can be difficult to spot due to it being more logic based and not necessarily an error in best practices, specially in apps that have its different parts developed separately. It's important for any company to plan its mitigation strategy around its business logic and have automated attack in consideration when trying to avoid this kind of vulnerability.\n If you would like to read about a case in which this vulnerability was exploited in ticketmaster you can read more about it here https://www.pcmag.com/news/3-scalpers-fined-for-using-bots-to-scoop-up-tickets-on-ticketmaster";
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
 
 buyTicket(){
  this.isScript = true;
  this.showNext = true;
  this.showPrev = true;
  if (this.tickBought < 2){
    this.tickBought += 1;
    this.tickLeft -= 1;
    alert("Ticket added to cart!")
  }else if(this.tickBought>199){
    alert("No more tickets left.")
  }
  else{
    alert("Maximum two tickets per customer.")
  }
  
 }
 
scriptTicket(){
  if (this.tickBought>199){
    alert("No more tickets left, continue to the next step...")
  }else if (this.tickLeft>20){
    this.tickBought += 20;
    this.tickLeft -= 20;
  }else{
    let result = 200 - this.tickBought;
    this.tickBought += result;
    this.tickLeft -= result;
  }
  
}

  respShow(){
   this.showResp = !this.showResp;
  }
 


  constructor() { }

  ngOnInit(): void {
  }

}
