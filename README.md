## Happy Coding LMS (MERN)

Elegant Udemy-style LMS built for a final-year CSE portfolio. Includes a glassmorphism UI, basic auth, course browsing, and a student dashboard.

### Stack

- **Frontend**: React, Vite, React Router
- **Styling**: Tailwind-style utility classes + custom glassmorphism CSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Auth**: JWT-based login/register (demo grade)

### Structure

- `client/` – React frontend (deployable to Vercel)
- `server/` – Node/Express API

### Getting Started

1. **Install dependencies**

   ```bash
   cd server
   npm install

   cd ../client
   npm install
   ```

2. **Run backend**

   ```bash
   cd server
   npm run dev
   ```

3. **Run frontend**

   ```bash
   cd client
   npm run dev
   ```

4. **Build & deploy**

- Push to GitHub
- Import the repo into Vercel and point the root to `client/`

