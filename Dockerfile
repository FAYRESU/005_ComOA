# Stage 1: Build the React frontend
FROM node:18-alpine AS build

WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json
COPY frontend/package.json ./
COPY frontend/package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY frontend/ ./

# Build the frontend
RUN npm run build

# Stage 2: Setup the Node.js backend
FROM node:18-alpine

WORKDIR /app

# Copy backend package.json and package-lock.json
COPY backend/package.json ./backend/
COPY backend/package-lock.json ./backend/

# Install backend dependencies
RUN cd backend && npm install --production

# Copy the backend source code
COPY backend/ ./backend/

# Copy the built frontend from the build stage
COPY --from=build /app/frontend/build ./frontend/build

# Expose the port the app runs on
EXPOSE 3000

# Command to start the server
CMD ["node", "backend/server.js"]
