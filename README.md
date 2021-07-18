# Acknowledgement
This is a repository containing learning notes and code from the [Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)](https://www.youtube.com/watch?v=7CqJlxBYj-M).

# Run the Project
- Backend server:  Run `npm start` under the `backend` folder, the default URL is `http://localhost:5000`
- Frontend server: Run `npm start` under the main folder, the web page can be viewed at `http://localhost:3000`

# Steps: How to Build a Web App with the MERN Stack

## Database: Mongoose
1. Create a project and a cluster on MongoDB Atlas.
2. Add whitelist IPs(under Network Access) and DB users (under Database Access).
3. Connect the application and copy the connection string for future use.

## Backend: Node JS & Express
1. Create backend folder and install packages: `express`, `cors`, `mongoose`, `dotenv`, `nodeman`.
2. Define server architecture in `backend/server.js`.
3. Define database schema(s) under `backend/models`.
4. Define API routes under `backend/routes`.
5. Use tools like `Insomnia` of `Postman` to test the correctness of the APIs.

## Frontend: React
1. Create a react app: `npx create-react-app [APP NAME]`
2. Modify the default files: 
3. Define custom React components under src/components
4. Connect frontend & backend through REST APIs


