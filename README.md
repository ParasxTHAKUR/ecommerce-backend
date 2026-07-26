# E-Commerce Backend API

A RESTful backend API for an e-commerce platform, built with Node.js, Express, and MongoDB. Supports user authentication, product management, cart functionality, and order processing with role-based access control.

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Role-based access control (user vs admin)
- Product catalog management (admin-only create/update/delete)
- Shopping cart tied to logged-in users
- Order creation from cart, with order history
- Input validation and centralized error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator

## Getting Started

### Prerequisites
- Node.js installed
- A MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ParasxTHAKUR/ecommerce-backend.git
cd ecommerce-backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory (see `.env.example` for reference)

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key

4. Run the server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Auth Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | /api/auth/register | Register a new user | Public |
| POST | /api/auth/login | Login and receive JWT token | Public |

### Product Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | /api/products | Get all products | Public |
| GET | /api/products/:id | Get a single product | Public |
| POST | /api/products | Create a new product | Admin only |
| PUT | /api/products/:id | Update a product | Admin only |
| DELETE | /api/products/:id | Delete a product | Admin only |

### Cart Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | /api/cart | Get logged-in user's cart | Logged-in users |
| POST | /api/cart | Add item to cart | Logged-in users |
| PUT | /api/cart/:itemId | Update item quantity | Logged-in users |
| DELETE | /api/cart/:itemId | Remove item from cart | Logged-in users |

### Order Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | /api/orders | Create order from cart | Logged-in users |
| GET | /api/orders | Get logged-in user's orders | Logged-in users |
| GET | /api/orders/:id | Get a single order | Owner or Admin |
| PUT | /api/orders/:id/status | Update order status | Admin only |

## Authentication

Protected routes require a JWT token in the request header:

Tokens are received upon successful registration or login.

## Author

Paras Thakur