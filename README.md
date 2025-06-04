# PizzaTech

PizzaTech is a simple MERN stack application to manage pizzas. It includes a Node/Express backend with MongoDB and a React frontend. Docker and GitHub Actions are used for containerization and CI/CD.

## Requirements
- Node.js 18+
- Docker & Docker Compose

## Setup
1. Copy `backend/.env.example` to `backend/.env` and update the MongoDB URI and port if needed.
2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Start development servers with Docker Compose:
   ```bash
   docker-compose up
   ```
   Backend will run on `http://localhost:5000` and frontend on `http://localhost:3000`.

## CI/CD
A GitHub Actions workflow is provided in `.github/workflows/ci.yml` which installs dependencies, runs tests, builds Docker images and deploys to an EC2 instance using SSH. Configure the `EC2_IP` and `SSH_KEY` secrets in your repository settings.

## Docker
Each app has its own Dockerfile and a `docker-compose.yml` orchestrates them together for local development and production deployment.
