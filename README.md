# RescueFleetSystem

# Ambulance Management System (Web Application)

This project is a web-based ambulance management system designed to streamline emergency response and improve coordination between patients, ambulance drivers, and hospital staff.

## Table of Contents

* [Project Description](#project-description)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)


## Project Description

This system aims to provide a reliable and efficient web platform for managing ambulance requests, dispatching, and tracking. It focuses on real-time location tracking, seamless communication, and data security to ensure timely and effective emergency response.

## Features

* **User Management:**
    * User registration and authentication (patient, ambulance driver, hospital staff, admin).
    * Role-based access control (RBAC).
    * User profile management.

* **Geospatial Functionality:**
    * Real-time location tracking of ambulances.
    * Geocoding and reverse geocoding.
    * Distance and proximity calculations.
    * Map integration (e.g., Google Maps, OpenStreetMap).

* **Request Management:**
    * Ambulance request submission.
    * Request dispatching and assignment.
    * Request status tracking.
    * Request history.

* **Real-time Communication:**
    * Notification system (SMS, email, in-app).
    * In-app messaging/calling (optional).

* **Hospital and Ambulance Management:**
    * Hospital staff interface for patient and bed management.
    * Ambulance driver interface for availability and status updates.
    * Admin panel for system management.

* **Data Security:**
    * Data encryption (in transit and at rest).
    * Secure authentication and authorization.
    * Compliance with data privacy regulations.

* **Responsive Web Design:**
    * Ensure the web application functions well on desktop and mobile browsers.

* **Feedback system:**
    * In app feedback and rating system.

## Technologies Used

* **Backend:**
    * Node.js
    * Express.js
    * MongoDB (with Mongoose)
    * WebSockets or Socket.IO (for real-time updates)

* **Frontend:**
    * React, Angular, or Vue.js (or plain HTML/CSS/JavaScript)
    * Map libraries (Leaflet, Google Maps API)
    
* **Other:**
    * SMS API (e.g., Twilio)
    * Email API (e.g., SendGrid)

## Installation

1.  **Clone the repository:**

    git clone [https://github.com/nnneh/RescueFleetSystem.git]
    cd [project directory]


2.  **Install backend dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**
    
    ```bash
    cd client
    npm install
    ```

4.  **Configure environment variables:**
    * Create a `.env` file in the `backend` directory.
    * Add necessary environment variables (e.g., database connection string, API keys).
    * Create a `.env` file in the `frontend` directory, if needed.

5.  **Start the backend server:**

    ```bash
    cd server
    npm run dev
    ```

6.  **Start the frontend application:**

    ```bash
    cd client
    npm run dev
    ```

## Usage

* Patients can request ambulances through the web interface.
* Hospital staff can manage requests and dispatch ambulances through the web interface.
* Ambulance drivers can update their availability and request status through the web interface.
* Administrators can manage users, hospitals, and ambulances through the admin panel.

