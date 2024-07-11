<img src="./assets/easy-commerce-logo.png" alt="easy-commerce-logo" width="550px" >

## Overview

**EasyCommerce** is a streamlined Backend as a Service (BaaS) solution designed to provide essential backend functionalities for e-commerce platforms. This API simplifies the development process by handling user management, product handling, and order processing, allowing developers to focus on building engaging front-end experiences.

### Learning Objectives
- Typescript Programming.
- NodeJS - How it works.
- Backend Communication Protocols & Design Patterns.
- Express Baisc to Advance
- Database (NoSQL/SQL)
- ORMs / ODMs (sequalize, mongoose)
- Joi - Input Validation
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
  - [ ] Registration: Allow new users to sign up.
  - [ ] Authentication: Allow users to log in (e.g., using JWT, OAuth).
  - [ ] Profile Management: View and update user profile details.
  - [ ] Role Management: Assign roles (e.g., admin, customer) to users.
  - [ ] Permission Management: Allow Operations (e.g., admin, customer) to users.
  - [ ] Password Management: Allow users to change or reset their passwords.

- **Orders Management**
  - [ ] Create Order: Place a new order.
  - [ ] View Order: View details of a specific order.
  - [ ] Update Order: Modify an order (e.g., change status, update items).
  - [ ] Cancel Order: Allow users to cancel an order.
  - [ ] Order History: View all past orders of a user.

- **Payments**
  - [ ] Create Payment: Process a payment for an order.
  - [ ] View Payment: View details of a specific payment.
  - [ ] Refund Payment: Process a refund for an order.
  - [ ] Payment History: View all payments made by a user.

- **Inventory Management**
  - [ ] Add Product: Add a new product to the inventory.
  - [ ] Update Product: Update details of an existing product.
  - [ ] Delete Product: Remove a product from the inventory.
  - [ ] View Products: List all available products.
  - [ ] Stock Management: Update the stock quantity of products.

- **Categrory Management**
  - [ ] Add Category: Create a new product category.
  - [ ] Update Category: Modify an existing category.
  - [ ] Delete Category: Remove a category.
  - [ ] View Categories: List all product categories.
  - [ ] Assign Products to Category: Categorize products.

- **API Documentation**
  - [ ] Comprehensive API documentation with OpenAPI (Swagger).

### Future Enhancements

- [ ] Advanced admin features (product and order management by admins or other users).
- [ ] Detailed analytics and reporting.
- [ ] Scalability and performance enhancements (caching, load balancing).
- [ ] Advanced security and compliance measures.
- [ ] Full containerization and deployment with Kubernetes.


## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB & MySQL
- **Language**: TypeScript
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger/OpenAPI

## Git Branching Strategy
Gitflow is a popular branching strategy that uses two main branches: `master` and `develop`.

<img src="./assets/gitflow.svg" alt="database-schema-design" >

The `master` branch contains production-ready code, while the `develop` branch contains the latest development code. `Feature` branches are created off the `develop` branch, and when the `feature` is complete, it is merged back into the `develop` branch. When the `develop` branch is ready for release, it is merged into the `master` branch, and a new release is created.

## Database Schema Design
<img src="docs\database schema\easycommerce.drawio.svg" alt="database-schema-design" >

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
   # mysql database
   DATABASE="database-name"
   HOST="127.0.0.1"
   USER="sql-server-username"
   PASSWORD="your-database-password"
   # mongodb database
   MONGODB_URI='replace-with-your-mongodb-uri'
   # json web token secret key
   JWT_SECRET_KEY='replace-with-your-jwt-secret-key'
   # server port no.
   PORT=8000
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