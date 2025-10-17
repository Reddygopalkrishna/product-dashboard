🚀 Live Demo

🔗 Vercel Link: [https://your-netlify-link.netlify.app](https://product-dashboard-sand-tau.vercel.app/)


📋 Table of Contents

Project Overview

Features

Tech Stack

Folder Structure

Implementation Details

Design Decisions

Challenges & Learnings

Setup Instructions

Screenshots

🧩 Project Overview

The Product Dashboard allows users to:

Add, edit, and delete products

Filter and sort products by category or price

Search by product name

Toggle between Dark and Light mode

View all products in a responsive grid layout

This project simulates a real-world product management interface and showcases my front-end skills, component organization, and state management techniques.

✨ Features

✅ Add new product (via modal form)
✅ Edit or delete existing products
✅ Sort by price (ascending / descending)
✅ Filter by category
✅ Search by product name
✅ Dark/Light mode toggle
✅ Image upload (for product preview)
✅ Fully responsive layout
✅ Smooth hover and modal animations

🛠️ Tech Stack
Category	Technology
Frontend Framework	React.js (Vite)
Styling	Tailwind CSS
Icons	Lucide React
State Management	React Hooks (useState)
Deployment	Vercel

🗂️ Folder Structure
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── ProductCard.jsx
 │   └── ProductFormModal.jsx
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── assets/

⚙️ Implementation Details
1️⃣ State Management

Used React Hooks (useState) for local state.
All product data is managed in the App.jsx parent and passed as props to child components.

2️⃣ Adding a Product

When the user clicks the “+ Add Product” button:

A modal opens (ProductFormModal.jsx)

Form captures inputs (name, category, price, stock, image)

On submit → adds to state array products

3️⃣ Editing / Deleting Products

Each product card includes edit and delete icons (Lucide icons).

Edit repopulates modal form with existing data.

Delete removes the product from state.

4️⃣ Sorting & Filtering

Sort: Sorts array by price ascending or descending.

Filter: Displays products of selected category.

Search: Filters products whose names include the search query.

5️⃣ Dark/Light Mode

Implemented with Tailwind’s built-in dark mode class toggle:

document.documentElement.classList.toggle("dark");

6️⃣ Responsiveness

Used Tailwind’s responsive utilities (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

Works perfectly on mobile, tablet, and desktop.

🎨 Design Decisions

Minimalistic UI: Focused on readability and quick interactions.

Card-based layout: Improves scalability for larger product lists.

Modal-based form: Keeps UI clean without navigation changes.

Tailwind CSS: Chosen for faster, utility-first styling.

Component isolation: Each feature is modular and reusable.

🧠 Challenges & Learnings
Challenge	Solution / Learning
Handling modal edit vs add state	Managed by maintaining a single editProduct state and passing props
Managing filter + sort + search simultaneously	Applied chained filtering logic using filteredProducts derived from products
Tailwind dark mode configuration	Added dark class toggle on html element for global theme switch
Clean UI structure	Used grid and flex utilities for consistent spacing and alignment
⚡ Setup Instructions

To run locally:

# Clone repository
git clone https://github.com/yourusername/product-dashboard.git

# Navigate to project
cd product-dashboard

# Install dependencies
npm install

# Start development server
npm run dev


Open your browser and go to:
👉 http://localhost:5173

🖼️ Screenshots

(Optional – Add screenshots later)
Example:

Dashboard (Light Mode)

Dashboard (Dark Mode)

Add Product Modal
