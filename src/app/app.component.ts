import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  subtitle: string;
  isbn13: number;
  image: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BookStore Website';
  products = [
    {
      id: 1,
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      isbn13: 97819129051,
      price: 19.99,
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609"
    },
    {
      id: 2,
      title: "MongoDB and Python",
      subtitle: "Patterns and processes for the popular document-oriented database",
      isbn13: 9781449310370,
      price: 6.88,
      image: "https://itbook.store/img/books/9781449310370.png",
      url: "https://itbook.store/books/9781449310370"

    },
    {
      id: 3,


      title: "Building Node Applications with MongoDB and Backbone",
      subtitle: "Rapid Prototyping and Scalable Deployment",
      isbn13: 9781449337391,
      price: 4.85,
      image: "https://itbook.store/img/books/9781449337391.png",
      url: "https://itbook.store/books/9781449337391"
    },
    {
      id: 4,
      title: "Practical MongoDB",
      subtitle: "Architecting, Developing, and Administering MongoDB",
      isbn13: 9781484206485,
      price: 41.65,
      image: "https://itbook.store/img/books/9781484206485.png",
      url: "https://itbook.store/books/9781484206485"
    },
    {
      id: 5,
      title: "The Definitive Guide to MongoDB, 3rd Edition",
      subtitle: "A complete guide to dealing with Big Data using MongoDB",
      isbn13: 9781484211830,
      price: 49.99,
      image: "https://itbook.store/img/books/9781484211830.png",
      url: "https://itbook.store/books/9781484211830"
    },
    {
      id: 6,
      title: "MongoDB Performance Tuning",
      subtitle: "Optimizing MongoDB Databases and their Applications",
      isbn13: 9781484268780,
      price: 34.74,
      image: "https://itbook.store/img/books/9781484268780.png",
      url: "https://itbook.store/books/9781484268780"
    },
    {
      id: 7,
      title: "Pentaho Analytics for MongoDB",
      subtitle: "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
      isbn13: 9781782168355,
      price: 16.99,
      image: "https://itbook.store/img/books/9781782168355.png",
      url: "https://itbook.store/books/9781782168355"
    },
    {
      id: 8,
      title: "Terraform: Up and Running, 3rd Edition",
      subtitle: "Writing Infrastructure as Code",
      isbn13: 9781098116743,
      price: 41.99,
      image: "https://itbook.store/img/books/9781098116743.png",
      url: "https://itbook.store/books/9781098116743"
    },
    {
      id: 9,
      title: "Flutter and Dart Cookbook",
      subtitle: "Developing Full-Stack Applications for the Cloud",
      isbn13: 9781098119515,
      price: 50.52,
      image: "https://itbook.store/img/books/9781098119515.png",
      url: "https://itbook.store/books/9781098119515"
    },
    {
      id: 10,
      title: "Python Data Science Handbook, 2nd Edition",
      subtitle: "Essential Tools for Working with Data",
      isbn13: 9781098121228,
      price: 56.16,
      image: "https://itbook.store/img/books/9781098121228.png",
      url: "https://itbook.store/books/9781098121228"
    },
    {
      id: 11,
      title: "Raspberry Pi Cookbook, 4th Edition",
      subtitle: "Software and Hardware Problems and Solutions",
      isbn13: 9781098130923,
      price: 14.99,
      image: "https://itbook.store/img/books/9781098130923.png",
      url: "https://itbook.store/books/9781098130923"
    },
    {
      id: 12,
      title: "Azure Maps Using Blazor Succinctly",
      subtitle: "Guide to Azure",
      isbn13: 9781642002263,
      price: 10.00,
      image: "https://itbook.store/img/books/9781642002263.png",
      url: "https://itbook.store/books/9781642002263"
    },
    {
      id: 13,
      title: "Full Stack Quarkus and React",
      subtitle: "Hands-on full stack web development with Java, React, and Kubernetes",
      isbn13: 9781800562738,
      price: 39.99,
      image: "https://itbook.store/img/books/9781800562738.png",
      url: "https://itbook.store/books/9781800562738"
    },
    {
      id: 14,
      title: "Mathematics for Game Programming and Computer Graphics",
      subtitle: "Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments",
      isbn13: 9781801077330,
      price: 49.99,
      image: "https://itbook.store/img/books/9781801077330.png",
      url: "https://itbook.store/books/9781801077330"
    },
    {
      id: 15,
      title: "Architecting and Building High-Speed SoCs",
      subtitle: "Design, develop, and debug complex FPGA-based systems-on-chip",
      isbn13: 9781801810999,
      price: 32.99,
      image: "https://itbook.store/img/books/9781801810999.png",
      url: "https://itbook.store/books/9781801810999"
    },
    {
      id: 16,
      title: "Web Development with Julia and Genie",
      subtitle: "A hands-on guide to high-performance server-side web development with the Julia programming language",
      isbn13: 9781801811132,
      price: 39.99,
      image: "https://itbook.store/img/books/9781801811132.png",
      url: "https://itbook.store/books/9781801811132"
    },
    {
      id: 17,
      title: "Java Memory Management",
      subtitle: "A comprehensive guide to garbage collection and JVM tuning",
      isbn13: 9781801812856,
      price: 34.99,
      image: "https://itbook.store/img/books/9781801812856.png",
      url: "https://itbook.store/books/9781801812856"
    },
    {
      id: 18,
      title: "Test-Driven Development with C++",
      subtitle: "A simple guide to writing bug-free Agile code",
      isbn13: 9781803242002,
      price: 44.99,
      image: "https://itbook.store/img/books/9781803242002.png",
      url: "https://itbook.store/books/9781803242002"
    },
    {
      id: 19,
      title: "Software Test Design",
      subtitle: "Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
      isbn13: 9781804612569,
      price: 44.99,
      image: "https://itbook.store/img/books/9781804612569.png",
      url: "https://itbook.store/books/9781804612569"
    },
    {
      id: 20,
      title: "Microservices with Go",
      subtitle: "Building scalable and reliable microservices with Go",
      isbn13: 9781804617007,
      price: 29.99,
      image: "https://itbook.store/img/books/9781804617007.png",
      url: "https://itbook.store/books/9781804617007"
    },
    {
      id: 21,
      title: "Web Development with MongoDB and NodeJS, 2nd Edition",
      subtitle: "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
      isbn13: 9781785287527,
      price: 39.99,
      image: "https://itbook.store/img/books/9781785287527.png",
      url: "https://itbook.store/books/9781785287527"
    }
  ]

  cartItem: Array<Product> = []
  total: any = 0


  insertProduct(e: Product) {
    this.cartItem.push(e);
    this.total = parseFloat((this.total + e.price).toFixed(2));
  }

  removeItem(id: number) {
    let itemIndex = this.cartItem.findIndex(obj => obj.id === id);
    this.total = parseFloat((this.total - this.cartItem[itemIndex].price).toFixed(2));
    this.cartItem.splice(itemIndex, 1);
  }
}
