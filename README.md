# CSE-290R-Final-Report

### **Project: Responsive Developer Portfolio**

#### **Overview**

A lightweight, three-page portfolio built with vanilla HTML, CSS, and JavaScript. The project demonstrates clean architecture, semantic HTML, and a custom-built responsive navigation system.

#### **Folder Structure**

To ensure the links work correctly, maintain the following directory layout:

* `/index.html` (Home Page) 


* `/about/index.html` (About Page) 


* `/contact/index.html` (Contact Page) 


* `/css/style.css` (Global Styles) 


* `/js/main.js` (Navigation & Validation Logic) 



#### **Key Technical Features**

* **Path Management:** Uses relative pathing (`../`) to allow shared assets (CSS/JS) to be accessed by pages nested in subdirectories.


* **Mobile-First Navigation:** A custom "Burger" menu that toggles visibility via JavaScript without heavy animation libraries.


* **Form UX:** Includes basic JavaScript validation to prevent empty submissions and provide immediate user feedback.


* **Accessibility:** Utilizes semantic tags like `<header>`, `<main>`, and `<nav>` to improve SEO and screen reader compatibility.



#### **Deployment Instructions**

1. **Local Testing:** Open `index.html` in any modern browser. Use **F12 (Inspect)** to toggle "Device Toolbar" and test the mobile menu at widths below **768px**.


2. **Hosting:** * **GitHub Pages:** Push the entire folder structure to a GitHub repository and enable "Pages" in the settings.


* **Absolute Paths:** If moving to a professional server, you can transition from `../js/main.js` to `/js/main.js` for more robust linking.
