# Simple HTTP Server with MongoDB Integration 🚀

## Project Overview

This project implements a simple HTTP server using the Express.js framework in Node.js. It also integrates MongoDB for database operations.

### Features

- **Add User:** Users can register by sending a POST request to the `/home/add` endpoint with their details. The server adds the user data to the MongoDB database upon receiving the request.

- **Update User:** Users can update their information by sending a PATCH request to the `/home/update/:id` endpoint, where `:id` is the unique identifier of the user. The server retrieves the user's current data from the database, updates it with the new information provided in the request, and saves the updated data back to the database.

- **Delete User:** Users can delete their account by sending a DELETE request to the `/home/delete/:id` endpoint, where `:id` is the unique identifier of the user. The server removes the user's data from the database based on the provided ID.

- **Retrieve User Data:** Users can retrieve their own data or view other users' data by sending a GET request to the `/home/:id` endpoint to retrieve a specific user's data by ID, or to the `/home/allUsers` endpoint to retrieve data for all users. The server fetches the requested data from the MongoDB database and sends it back to the client.


## Prerequisites

- Node.js
- MongoDB

## Installation

 - Clone the repository:

   ```bash
   git clone https://github.com/sujanthapa01/simple-http-server-with-mongoDB.git  
   cd simple-http-server-with-mongoDB
   npm install

   ```

## Configuration

-  Create a .env file in the root directory of the project.
- Add the following environment variables:
   ```bash
  PORT=8000
  MONGOOSE_CONNECTION=<your-mongodb-connection-url>

   ```
## Usage

- To start the server, run the following command:

  ```bash
  npm start

  ```
- The server will start running at http://localhost:8000 by default, or at the port specified in the **`.env`** file. 

## Endpoints

- **`GET /home/allUsers:`** Retrieve all users from the database.
- **`GET /home/:id:`** Retrieve a user by ID.
- **`POST /home/add:`** Add a new user.
- **`PATCH /home/update/:id:`** Update a user by ID.
- **`DELETE /home/delete/:id:`** Delete a user by ID.`

## Project Structure

- **`connection.js:`** Establishes a connection to the MongoDB database.
- **`models/model.js:`** Defines the MongoDB schema and model for the Testusers collection.
- **`controller/controller.js:`** Contains controller functions for handling HTTP requests.
- **`router/router.js:`** Defines the Express router with routes for various endpoints.
- **`index.js:`** Main entry point of the application.
