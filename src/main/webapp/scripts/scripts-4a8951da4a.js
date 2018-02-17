"use strict";angular.module("yong1App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).constant("_",window._).run(["$rootScope",function(e){e._=window._}]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/kickstart",{templateUrl:"views/kickstart.html",controller:"KickCtrl",controllerAs:"kick"}).otherwise({redirectTo:"/"})}]),angular.module("yong1App").controller("MainCtrl",["$scope","$http",function(e,o){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],e.questions={storage:{dataType:{q:"What type of data is present in your system?",options:["Structured","Semi Structured","UnStructured"],type:"radio"},workloads:{q:"What type of workloads are you targeting?",options:["Batch","Analytical","Transactional","Database workloads"],type:"radio"},relational:{q:"Is your data relational and need fully managed, high performance database service?",options:["Yes","No"],type:"radio"}},compute:{firebase:{q:"Are you building a mobile or HTML application that does its heavy lifting, processing-wise, on the client?",options:["Yes","No"],type:"radio"},gcf:{q:"Are you building a system based more on events than user interaction? In other words, are you building an app that responds to uploaded files, or maybe logins to other applications?",options:["Yes","No"],type:"radio"},os:{q:"Do you need a logical infrastructure powered by Kubernetes (the open source container orchestration system) which will help increase the velocity and improve operability by separating the app from the OS?",options:["Yes","No"],type:"radio"},flexible:{q:"Do you need a flexible, zero Ops platform for building highly available apps which will help you focus on writing code and minimize operational overhead (Platform-as-a-service (PaaS))  ?",options:["Yes","No"],type:"radio"}},network:{virtual:{q:"Do you need private isolated virtual network partition for all resources?",options:["Yes","No"],type:"radio"},ip:{q:"What type of IP Address is required?",options:["Static","Dynamic"],type:"radio"},firewall:{q:"3.Does your network require firewall to control access to the instances?",options:["Yes","No"],type:"radio"},firewallRules:{q:"Tick which all firewall rules are required to be configured?",options:["Action: Allow or deny","Direction: Ingress or Egress","Source & Destination IPS","Protocol and port","Specific instance names","Priorities and tiebreakers"],type:"checkbox"}}},e.answers={},e.checkForm=function(){var t={};t.answers=e.answers,t.questions=e.questions,console.log(t),o.post("http://10.200.101.34:8080/cre/add/",{types:[{categoryType:"Storage",quesChoiceMap:{q1:"c1",q2:"c2"}},{categoryType:"Network",quesChoiceMap:{q1:"c1",q2:"c2"}}]})},e.formFields={storage:{dataType:{question:"What type of data is present in your system?",answer:""},workloads:{question:"What type of workloads are you targeting?",answer:""},relational:{question:"Is your data relational and need fully managed, high performance database service?",answer:""},transactional:{question:"Do you need transactional consistency, global scale and high availability?",answer:""}},compute:{logical:{question:"",answer:""},flexible:{question:"Do you need a flexible, zero Ops platform for building highly available apps which will help you focus on writing code and minimize operational overhead (Platform-as-a-service (PaaS))  ?",answer:""},virtual:{question:"Do you need Virtual machines with network-attached and ultra-high performance local storage options with complete control over your infrastructure (Infrastructure-as-a-service(IaaS))?",answer:""},os:{question:"Which OS you need to install for running your application?",answer:""}},network:{partition:{question:"Do you need private isolated virtual network partition for all resources?",answer:""},ip:{question:"What type of IP Address is required?",answer:""},firewall:{question:"Does your network require firewall to control access to the instances?",answer:""}}};var t="./api/postFormData";e.submitForm=function(){alert("Request to submit form");var e="";o.post(t,e)},e.createCustomJson=function(e){var o={"CloudRes&CostRecommEng":{Storage:{q1:{question:e.storage.dataType.question,choice:e.storage.dataType.answer},q2:{question:e.storage.workloads.question,choice:e.storage.workloads.answer},q3:{question:e.storage.relational.question,choice:e.storage.relational.answer},q4:{question:e.storage.transactional.question,choice:e.storage.transactional.answer}}},Compute:{q1:{question:e.compute.logical.question,choice:e.compute.logical.answer},q2:{question:e.compute.flexible.question,choice:e.compute.flexible.answer},q3:{question:e.compute.virtual.question,choice:e.compute.virtual.answer},q4:{question:e.compute.os.question,choice:e.compute.os.answer}},Network:{q1:{question:e.network.partition.question,answer:e.network.partition.answer}}};console.log("The json is::",o)}}]),angular.module("yong1App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yong1App").controller("KickCtrl",["$scope","$http","_",function(e,o,t){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],e.questions={storage:{q1:{q:"What type of data is present in your system?",options:["Structured","Semi Structured","UnStructured"],type:"radio"},q2:{q:"What type of workloads are you targeting?",options:["Batch","Analytical","Transactional","Database workloads"],type:"radio"},q3:{q:"Is your data relational and need fully managed, high performance database service?",options:["Yes","No"],type:"radio"}},compute:{q1:{q:"Are you building a mobile or HTML application that does its heavy lifting, processing-wise, on the client?",options:["Yes","No"],type:"radio"},q2:{q:"Are you building a system based more on events than user interaction? In other words, are you building an app that responds to uploaded files, or maybe logins to other applications?",options:["Yes","No"],type:"radio"},q3:{q:"Do you need a logical infrastructure powered by Kubernetes (the open source container orchestration system) which will help increase the velocity and improve operability by separating the app from the OS?",options:["Yes","No"],type:"radio"},q4:{q:"Do you need a flexible, zero Ops platform for building highly available apps which will help you focus on writing code and minimize operational overhead (Platform-as-a-service (PaaS))  ?",options:["Yes","No"],type:"radio"}},network:{q1:{q:"Do you need private isolated virtual network partition for all resources?",options:["Yes","No"],type:"radio"},q2:{q:"What type of IP Address is required?",options:["Static","Dynamic"],type:"radio"},q3:{q:"3.Does your network require firewall to control access to the instances?",options:["Yes","No"],type:"radio"},q4:{q:"Tick which all firewall rules are required to be configured?",options:["Action: Allow or deny","Direction: Ingress or Egress","Source & Destination IPS","Protocol and port","Specific instance names","Priorities and tiebreakers"],type:"checkbox"}}},e.answers={},e.checkForm=function(){for(var o in e.answers){var t={};t.categoryType=o||{},t.quesChoiceMap=t.quesChoiceMap||{};var a=t.quesChoiceMap;if(a[e.answers.storage]=e.answers.storage,console.log("Object is",t),e.answers.hasOwnProperty(o)){var r=e.answers[o];for(var i in r)r.hasOwnProperty(i)&&console.log(i+" = "+r[i])}}console.log(e.answers)}}]);