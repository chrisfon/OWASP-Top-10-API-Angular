import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
 
 msg="Welcome to the context lesson. First thing we should know about is what APIs are and how are they used?";
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
      this.msg="Welcome to the context lesson. First thing we should know about is what APIs are and how are they used?"
      break;
    }
    case this.pagenum=1: {
      this.showNext = true;
    this.msg="API is an abbreviation for Aplication Programming Interface. They are mechanisms that enable two software components to communicate with eachother using a set of definitions and protocols through HTTP method calls. You can think of them as contracts between two applications, where the contracts defines how they will communicate (protocol) and what they will do (function). It will act as a gateway to access information and data.\n\n We will base our lessons of RESTful APIs.\n RESTFul APIs follow a set of rules and are generally used for APIs that will mainly interact with files, objects and media components.";
    break;
    }
    case this.pagenum=2: {
      this.msg="API communicate through the use of HTTP methods. The most common methods are:\n\n-GET: To retrieve data and files from a server. It does not change the state of any resource on the server. It can be used to get a list of information or search for a specific object using a unique identifier.\n-POST: Sends data to the server for processing. It generally is sent in XML or JSON format and does change/update the state of the resources called upon in the server.\nHEAD: Returns metadata about the data accessed, does not return the data by itself. Does not affect any state of any resource in the server.\nContinued next page...";
      break;
      }
    case this.pagenum=3: {
      this.msg="PUT: This method replaces or changes a resource in the server. Generally it uses a unique identifier to know which resource to change. If it tries to change a rouse that does not exist it will create a new resource. It commonly uses JSON and XML formats.\nDELETE: This method removes a resource from the server. It generally uses a unique identifier to know which resource to delete. It changes the state of resources on the server.";
      this.showNext = true;
      this.isDisabled = true; 
        break;
        }
    case this.pagenum=4: {
        this.msg="Most RESTful APIs will accept and return data in a JSON or XML format which we then can change with a programming language to proces the data however a developer would like. In some cases it can return data in plain text, HTML, or YAML.\n\n Try it in the example window, by clicking the highlighted button to see how a JSON file request and response would look like and continue";
        this.isDisabled = false; 
        this.showNext = false;
        break;
          }
    case this.pagenum=5: {
        this.msg="An example of usages of API can be something as simple as calling to a weather API (with GET and some IDs in this case) that will return current weather conditions of specified latitud and longitud (included in the address)";
        
        break;
        }
    case this.pagenum=6: {
        this.msg="Although APIs have a great upside of providing tons of utility it can also represent a security risk for any company that develops and/or consumes one. It is important that any developer follows the best security practices when making or consuming an API because it can lead to incidents such as data leaks, loss of trust in the company and loss of integrity in data.\n A solution that will help mitigate some of these issues can be the use of a Secutiy Framework that will provide a guide to help avoid having vulnerabilities and follow the most secure practices when developing an API.";
        this.showNextLesson = false;
        this.showNext = true;  
        break;
          }
    case this.pagenum=7: {
        this.msg="Throughout the lessons provided we will learn about the most common vulnerabilities and recommendations for how to deal with these vulnerablitiles based on the OWASP Security Framework.";
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
  this.showNext = true;
 }

  constructor() { }

  ngOnInit(){
  }

}
