# Drug Smuggling Reporting System

## Overview

The Drug Smuggling Reporting System is a web application designed to help airport security personnel report and review suspicious behavior that may be related to drug smuggling. The goal of the project was to create a simple and organized system where authorized users can log in, submit suspicious activity reports, review previous reports, and view urgent alerts.

This project was developed as a senior software engineering project and gave our team experience building a full-stack web application.

## Features

* User login and authentication
* Create and submit suspicious activity reports
* View past reports
* View urgent alerts
* Navigate between multiple application pages
* Basic role-based authentication
* Frontend and backend communication
* Error handling for incorrect login information

## Technologies Used

### Frontend

* React
* JavaScript
* HTML
* CSS
* Vite
* React Router
* Axios

### Backend

* Node.js
* Express.js
* Flask
* REST APIs
* CORS

### Development Tools

* Git
* GitHub
* Visual Studio Code
* npm

The current repository uses React 18 with Vite for the frontend and includes Express for backend functionality.

## Application Pages

The application contains several main pages:

* **Login** – allows users to enter their credentials before accessing the system.
* **Home** – provides the main landing page after authentication.
* **Create Report** – allows airport security personnel to enter information about suspicious behavior.
* **Past Reports** – displays previously submitted reports.
* **Urgent Alerts** – provides access to reports or situations that require immediate attention.

These pages are organized within the React application under the `src/pages` directory.

## Authentication

The project includes a basic authentication system using an Express backend.

The frontend sends login credentials to the `/auth` endpoint. The backend checks the username and password and returns an access token and user role when the credentials are correct. Incorrect credentials return an unauthorized response.

The authentication system used in this project is for demonstration and development purposes and should be replaced with a secure production authentication system before real-world deployment.

## Project Structure

```text
drug-smuggling-app-no-1/
│
├── src/
│   ├── assets/
│   ├── context/
│   ├── pages/
│   │   ├── CreateReport/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── PastReports/
│   │   └── UrgentAlerts/
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── backend/
├── Backend/
├── api/
├── pictures/
├── public/
├── server.js
├── package.json
├── vite.config.js
└── README.md
```

The repository contains separate frontend, backend, API, and supporting directories.

## Getting Started

### Prerequisites

Before running the project, install:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/klbynum/drug-smuggling-app-no-1.git
```

Navigate into the project:

```bash
cd drug-smuggling-app-no-1
```

### Install Dependencies

```bash
npm install
```

### Start the Frontend

```bash
npm run dev
```

The project uses Vite as its development server.

### Start the Authentication Server

In another terminal, run:

```bash
node server.js
```

The authentication server is configured to run on:

```text
http://localhost:5001
```

## Development Experience

This project provided hands-on experience with full-stack software development. While developing the application, our team worked with frontend development, backend APIs, authentication, routing, debugging, and version control.

I contributed as a developer by helping build and troubleshoot different parts of the application, including the user interface, login functionality, report features, navigation, and communication between the frontend and backend. The project also required learning new technologies such as Node.js and Flask and applying them during development.

## Skills Demonstrated

* Full-stack web development
* React development
* JavaScript programming
* Node.js and Express
* Flask
* API development
* Authentication
* Git and GitHub
* Debugging and troubleshooting
* Team collaboration
* Software design
* Problem solving

## Future Improvements

Possible improvements to the application include:

* Connect the application to a permanent database
* Implement secure password hashing
* Replace the demonstration access token with secure JWT authentication
* Add stronger role-based access control
* Improve report search and filtering
* Add report status tracking
* Improve form validation
* Add automated testing
* Deploy the frontend and backend to a cloud platform
* Improve security for production use

## Purpose

This application was created for educational purposes as part of a software engineering project. It demonstrates how web development technologies can be combined to create a reporting system for a real-world security-related scenario.

## Contributors

Developed collaboratively as a team senior seminar project.

## Repository

[Drug Smuggling Reporting System](https://github.com/klbynum/drug-smuggling-app-no-1)

