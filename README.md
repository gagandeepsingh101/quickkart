
# 🛒 QuickKart

QuickKart is a full-stack e-commerce application built with **React** on the frontend and **Node.js/Express** on the backend.

## 🚀 Live Links

- **Frontend**: [https://quickkart-eight.vercel.app](https://quickkart-eight.vercel.app)  
- **Backend API**: [https://quickkart-3g05.onrender.com](https://quickkart-3g05.onrender.com)

---

## 🛠 Tech Stack

### **Frontend**

- ⚛️ **React** - JavaScript library for building user interfaces
- ⚡ **Vite** - Fast build tool and development server
- 🏬 **Redux Toolkit** - State management (authentication, shopping, admin functions)
- 🔀 **React Router DOM** - Client-side routing
- 🔗 **Axios** - HTTP client for API requests
- 🎨 **Radix UI** - Headless UI component library
- 💅 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Lucide React** - Icon library

### **Backend**

- 🚀 **Node.js** - JavaScript runtime
- 🏗 **Express.js** - Web framework
- 🗄 **MongoDB** - NoSQL database
- 📜 **Mongoose** - Object modeling for MongoDB
- 🔐 **JWT** - Authentication with JSON Web Tokens
- 🔑 **bcryptjs** - Password hashing
- ☁️ **Cloudinary** - Cloud storage for images
- 💳 **PayPal REST SDK** - Payment processing
- 📂 **Multer** - File upload middleware

---

## 🛠 Environment Setup

### **Prerequisites**

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance

### **Frontend Setup**

```bash
cd client
npm install
```

Create a `.env` file in the `client/` directory:

```plaintext
VITE_API_URL=http://localhost:5000/api
```

Start the frontend server:

```bash
npm run dev
```

**Frontend will be available at** `http://localhost:5173`

---

### **Backend Setup**

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```plaintext
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
```

Start the backend server:

```bash
npm run dev
```

**Backend API will be available at** `http://localhost:5000`

---

## 🎯 Key Features

### **User Features**

✔️ User authentication (register, login, logout)  
✔️ Browse and search products  
✔️ Filter products by category, brand, price  
✔️ Shopping cart management  
✔️ Order placement and PayPal payment integration  
✔️ Manage saved addresses  
✔️ Product reviews and ratings  

### **Admin Features**

✔️ Dashboard with statistics  
✔️ Product management (add, edit, delete)  
✔️ Order management (status updates)  
✔️ Feature image management  

---

## 📁 Project Structure

### **Frontend**

```
client/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images
│   ├── components/         # Reusable components
│   │   ├── admin-view/     # Admin UI components
│   │   ├── auth/           # Authentication UI
│   │   ├── common/         # Common UI elements
│   │   ├── shopping-view/  # Shopping experience UI
│   │   └── ui/             # UI elements (buttons, cards, etc.)
│   ├── config/             # Configuration files
│   ├── lib/                # Helper functions
│   ├── pages/              # Page components
│   │   ├── admin-view/     # Admin pages
│   │   ├── auth/           # Login/Register pages
│   │   ├── shopping-view/  # Shopping pages
│   ├── store/              # Redux store
│   │   └── slices/         # Redux slices
│   ├── App.jsx             # Main application
│   ├── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json            # Dependencies
└── vite.config.js          # Vite configuration
```

### **Backend**

```
server/
├── controllers/            # API Controllers
│   ├── admin/              # Admin controllers
│   ├── auth/               # Authentication controllers
│   ├── common/             # Common functionalities
│   ├── shop/               # Shopping-related logic
├── helpers/                # Utility functions
│   ├── cloudinary.js       # Cloudinary integration
│   ├── db.js               # MongoDB connection
│   ├── paypal.js           # PayPal SDK setup
├── models/                 # Mongoose Models
│   ├── Address.js
│   ├── Cart.js
│   ├── Feature.js
│   ├── Order.js
│   ├── Product.js
│   ├── Review.js
│   ├── User.js
├── routes/                 # API Routes
├── .env                    # Environment variables
├── package.json            # Dependencies
└── server.js               # Main server file
```

---

## 📡 API Routes

### **Authentication**

- `POST /api/auth/register` - Register new user  
- `POST /api/auth/login` - Login user  
- `POST /api/auth/logout` - Logout user  
- `GET /api/auth/check-auth` - Verify authentication  

### **Products**

- `GET /api/products/get` - Get all products  
- `GET /api/products/get/:id` - Get product details  
- `POST /api/admin/products/add` - Add a product (Admin)  
- `PUT /api/admin/products/edit/:id` - Edit a product (Admin)  
- `DELETE /api/admin/products/delete/:id` - Delete a product (Admin)  

### **Cart**

- `POST /api/cart/add` - Add item to cart  
- `GET /api/cart/get` - Get cart items  
- `PUT /api/cart/update` - Update cart item  
- `DELETE /api/cart/delete/:id` - Remove cart item  

### **Orders**

- `POST /api/orders/create` - Create order  
- `GET /api/orders/get` - Get user orders  
- `GET /api/admin/orders/get` - Get all orders (Admin)  
- `PUT /api/admin/orders/update/:id` - Update order status (Admin)  

### **Reviews**

- `POST /api/reviews/add` - Add product review  
- `GET /api/reviews/get/:productId` - Get product reviews  

---

## 🎨 Styling & UI Components

- **Tailwind CSS** with custom themes  
- **Radix UI** for headless components  
- **Lucide Icons** for modern UI  
- **Class Variance Authority** for dynamic styles  

---

## 📦 State Management

Redux Toolkit slices:

- **Authentication** - User info, login status  
- **Shopping** - Cart, orders, reviews  
- **Admin** - Product & order management  

---

## ⚡ Scripts

### **Frontend**

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### **Backend**

```bash
npm run dev      # Start development server
npm start        # Start production server
```

---

## 🔑 Admin Credentials

To access the **Admin Panel**, use the following credentials:

- **Email**: admin123@gmail.com
- **Password**: admin1234

---

## 💳 PayPal Sandbox (Local Payments Only)

⚠️ **PayPal payments work only on localhost (not in live deployment).**  
Use the following **PayPal sandbox account** to test payments:

- **Email**: `sb-12e9238108408@personal.example.com`  
- **Password**: `Ta/XJSk5`


