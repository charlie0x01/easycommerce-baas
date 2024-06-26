<img src="./assets/easy-commerce-logo.png" alt="easy-commerce-logo" width="600px" >

## Overview

**EasyCommerce** is a streamlined Backend as a Service (BaaS) solution designed to provide essential backend functionalities for e-commerce platforms. This API simplifies the development process by handling user management, product handling, and order processing, allowing developers to focus on building engaging front-end experiences.

### Learning Objectives
- Typescript Programming.
- NodeJS - How it works.
- Backend Communication Protocols & Design Patterns.
- Express Baisc to Advance
- Database (NoSQL/SQL)
- ORMs / ODMs (sequalize, mongoose)
- Zod - Input Validation
- Monorepo / Turborepo
- Serverless Backends
- API Documentation (Swagger/OpenAPI)
- Autogenerated clients
- Authentication using external libraries
- Scaling Node.js, performance benchmarks
- Deploying npm packages
- Containerization, Docker
- Deploying to AWS servers
- Nginx and reverse proxies
- Securing the APIs

## Features

### Core Features

- **User Management**
  - User registration and login with secure password handling.
  - JWT-based authentication for protected routes.
  - User profile management (view and update profiles).

- **Product Management**
  - CRUD operations for products (Create, Read, Update, Delete).
  - Basic product catalog with search and filtering capabilities.

- **Order Management**
  - Shopping cart operations (add, remove items).
  - Order placement and basic tracking.

- **API Documentation**
  - Comprehensive API documentation with OpenAPI (Swagger).

### Future Enhancements

- Advanced admin features (product and order management by admins).
- Detailed analytics and reporting.
- Scalability and performance enhancements (caching, load balancing).
- Advanced security and compliance measures.
- Automated client SDK generation for multiple platforms.
- Serverless function integration for specific tasks.
- Full containerization and deployment with Kubernetes.


## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Language**: TypeScript
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger/OpenAPI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or cloud instance)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/easycommerce.git
   cd easycommerce
   ```
2. **Install dependencies**:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```
3. **Setup enviroment variables**:

   Create a `.env` file in the root directory and configure the following variables
   ```bash
   PORT=3000
   MONGODB_URI='replace-with-your-mongodb-uri'
   JWT_SECRET_KEY='replace-with-your-jwt-secret-key'
   ```
4. **Start the backend server**:
   ```bash
    npm run dev
    # or you can use yarn
    yarn run dev
    ```

   The API will be available at `http://localhost:3000`

  ### Usage

  - Access the API documentation at `http://localhost:3000` to explore and interact with the API endpoints.
  - Use tools like `Postman` to test API endpoints during development.

  ## API Endpoints

  Below are some of the key API endpoints provided by EasyCommerce. For a complete list and detailed descriptions, refer to the API documentation.

  ### User Management
  - POST /api/users/register - Register a new user.
  - POST /api/users/login - Authenticate a user and get a token.
  - GET  /api/users/{user_id}/profile - Retrieve the profile of the logged-in user.
  - PUT  /api/users/{user_id}/profile/update - Retrieve the profile of the logged-in user.

  ### License
  This project is licensed under the MIT License - see the LICENSE file for details.