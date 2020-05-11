import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  data = [
    {
      "id": "A1",
      "name": "Angular",
      "category": "Framework",
      "latestVersion": "9.0.5",
      "documentation": "https://angular.io/docs",
      "type": "Front End",
      "description": "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."
    },
    {
      "id": "R1",
      "name": "React",
      "category": "Library",
      "latestVersion": "16.12.0",
      "documentation": "https://reactjs.org/docs/getting-started.html",
      "type": "Front End",
      "description": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
    {
      "id": "N1",
      "name": ".Net Core",
      "category": "Framework",
      "latestVersion": "3.1.2",
      "documentation": "https://dotnet.microsoft.com/learn",
      "type": "Back End",
      "description": ".NET Core is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is primarily developed by Microsoft and released under the MIT License."
    },
    {
      "id": "E1",
      "name": "Express",
      "category": "Framework",
      "latestVersion": "4.17.1",
      "documentation": "https://expressjs.com/en/4x/api.html",
      "type": "Back End",
      "description": "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
    },
    {
      "id": "J1",
      "name": "Jasmine",
      "category": "Framework",
      "latestVersion": "Edge",
      "documentation": "https://jasmine.github.io/pages/docs_home.html",
      "type": "Testing",
      "description": "Jasmine is an open-source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax. "
    },
    {
      "id": "K1",
      "name": "Karma",
      "category": "Test Runner",
      "latestVersion": "4.0.0",
      "documentation": "https://karma-runner.github.io/4.0/config/configuration-file.html",
      "type": "Testing",
      "description": "Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed."
    },
    {
      "id": "C1",
      "name": "Cypress",
      "category": "E2E Testing Framework",
      "latestVersion": "4.2.0",
      "documentation": "https://docs.cypress.io/guides/overview/why-cypress.html",
      "type": "Testing",
      "description": "Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications. This enables you to write faster, easier and more reliable tests."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
