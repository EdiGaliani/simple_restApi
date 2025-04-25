# User Management REST API

This is a simple RESTful API built with **Node.js**, **Express**, and **MySQL** for managing users. It supports full CRUD operations and includes features like environment variable configuration, CORS support, and basic input validation.

## Features

- 🌐 **CORS** enabled to allow cross-origin requests
- 🔐 **Environment variables** with `.env` file for secure configuration
- 📄 **CRUD operations** on users (`GET`, `POST`, `PUT`, `DELETE`)
- 📥 **Basic input validation** to ensure data integrity
- ⚙️ Easy to extend with **middlewares** (e.g., logging, authentication)

## Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **dotenv**
- **CORS**

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or above)
- [MySQL](https://www.mysql.com/) (or any MySQL-compatible database)

### Steps to run the project

1. **Clone this repository**:

   ```bash
   git clone https://github.com/EdiGaliani/simple_restApi.git
   cd simple_restApi
   
2. **Install dependencies**:

    ```bash
    npm install
    
3. **Create a `.env` file in the root directory and add your MySQL database credentials**:

    ```bash
    PORT=3001
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_HOST=localhost
    DB_NAME=UserDb

4. **Run the server**:

    ```bash
    node index.js
    
5. **Test the API**:

   The server should now be running on http://localhost:3001. You can test the endpoints using Postman, Insomnia, or any HTTP client of your choice.
   

## Endpoints

Method | Route | Description | Request Body Example
|------|-------|-------------|---------------------|
GET | /users | List all users | N/A
GET | /users/:id | Get a user by ID | N/A
POST | /users | Create a new user | { "name": "Edi Gali", "age": 30 }
PUT | /users | Update an existing user | { "id": 1, "name": "Edi Gali", "age": 32 }
DELETE | /users/:id | Delete a user by ID | N/A
