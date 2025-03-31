# 🍕 Fast React Co.

An interactive, real-time pizza ordering app built with **React**, **Redux Toolkit**, **React Router**, and bootstrapped with **Vite**. It includes routing, global state management, user flows for adding items to a cart, creating and tracking orders, and geolocation-based features.

🔗 **Live Demo**: [https://fast-matinz03-pizza.vercel.app/](https://fast-matinz03-pizza.vercel.app/)

---

## 🚀 Features

- 👤 **User Onboarding**  
  Start your order by entering your name.

- 🍽️ **Pizza Menu**  
  Displays dynamic list of pizzas with real-time availability and pricing.

- 🛒 **Shopping Cart & Quantity Control**  
  Add, remove, and update items directly from the cart using Redux Toolkit.

- 🧾 **Order Creation & Validation**  
  Place orders with name, phone number, and optional priority. Autofill address via geolocation.

- 🔍 **Order Status Page**  
  Track real-time order progress by searching the order number.

- 🔄 **Full Routing System**  
  Built with `react-router-dom` v6 including loaders and actions for server interaction.

---

## 🛠️ Tech Stack

- **React** (scaffolded with [Vite](https://vitejs.dev))
- **Tailwind CSS** for rapid UI styling
- **Redux Toolkit** for global state
- **React Router v6** for nested routes and route-based data fetching
- **Custom Actions & Loaders** for handling server interactions
- **Geolocation API** to fetch user location
- **Responsive UI** with a clean and modern layout
- **Vercel Deployment** connected via GitHub repo for continuous deployment

---

## 📁 Folder Structure
src/ ├── features/ │ ├── cart/ │ ├── menu/ │ ├── order/ │ └── user/ ├── styles/ # Global styles and shared CSS ├── ui/ │ ├── AppLayout.jsx │ ├── Home.jsx │ └── Error.jsx ├── store.js └── main.jsx

---
##🧠 What I Learned
- **Advanced use of react-router-dom** with loaders/actions

- **Clean global state** logic with Redux slices

- **Geolocation integration** for dynamic user data

- **Full-stack-like workflows** with frontend simulation

- **Vite-powered development workflow** and deployment to Vercel


---
## 📦 Getting Started

```bash
git clone https://github.com/your-username/fast-react-co.git
cd fast-react-co
npm install
npm run dev


