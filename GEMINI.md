# Project Overview

This is a full-stack web application with a React frontend and an Express.js backend.

**Frontend:**
- **Framework:** React (bootstrapped with Create React App)
- **Location:** `frontend/`
- **Description:** A simple user interface that can be extended to interact with the backend.

**Backend:**
- **Framework:** Express.js
- **Location:** `backend/`
- **Description:** A simple API server that serves the frontend and provides a few API endpoints.

## Building and Running

### Installation

To install all dependencies for both the frontend and backend, run the following command from the root directory:

```bash
npm run install-all
```

### Development

**Frontend:**

To start the frontend development server, run the following command from the `frontend/` directory:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000`.

**Backend:**

To start the backend server, run the following command from the `backend/` directory:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## Deployment

This project can be deployed in two ways: separately (frontend on Vercel, backend on Render) or together in a single container (Docker).

### Deploying the Backend to Render

1.  Push your project to a GitHub repository.
2.  Go to the Render dashboard and create a new **Web Service**.
3.  Connect the GitHub repository you just created.
4.  Configure the service with the following settings:
    *   **Root Directory:** `backend`
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server.js`
5.  Go to the **Environment** tab and add a new environment variable:
    *   **Key:** `CORS_ORIGIN`
    *   **Value:** The URL of your deployed Vercel frontend (e.g., `https://your-frontend-app.vercel.app`). You will get this URL after deploying the frontend.
6.  Click **Create Web Service**. Render will build and deploy your backend.

### Deploying the Frontend to Vercel

1.  Push your project to a GitHub repository (if you haven't already).
2.  Go to the Vercel dashboard and import the project from your Git repository.
3.  Vercel should automatically detect that it's a Create React App project. Configure it with the following settings:
    *   **Framework Preset:** Create React App
    *   **Root Directory:** `frontend`
4.  Go to the **Environment Variables** section and add a new variable:
    *   **Key:** `REACT_APP_API_URL`
    *   **Value:** The URL of your deployed Render backend (e.g., `https://your-backend-app.onrender.com`).
5.  Click **Deploy**. Vercel will build and deploy your frontend.

### Alternative: Deployment with Docker

This project is also configured to be deployed as a single container using Docker. See the `Dockerfile` for details.

**1. Build the Docker image:**
```bash
docker build -t your-app-name .
```

**2. Run the Docker container:**
```bash
docker run -p 3000:3000 your-app-name
```

## Development Conventions

### Testing

To run the frontend tests, run the following command from the `frontend/` directory:

```bash
npm test
```

There are currently no tests for the backend.
