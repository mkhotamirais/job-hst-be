# How to run this project
This project was created to fulfill the assignment from Company HABIB for smart technology as Web Developer. 

## Prerequisite
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- Project uses [TypeScript](https://www.typescriptlang.org/), which will be installed with dependencies.
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas for cloud database)

## Installation
1. **Clone the repository**   
Clone the project to your local machine by running:

  ```bash
  git clone https://github.com/mkhotamirais/job-hst-be.git
  ```
2. **Navigate into the project direction**  
After cloning, navigate to the project folder:

  ```
  cd job-hst-be
  ```
3. **Install dependencies**   
Install the required packages using npm:
  ```
  npm install
  ```

## Add the .env file
Create .env file at the root of the project. Add the following configuration setting:

  ```
  PORT=5000
  MONGO_URI=mongodb://127.0.0.1:27017/task-db?retryWrites=true&w=majority
  ```

## Running the development server   
To start the development server, run the following command:

  ```
  npm run dev
  ```
The project should now be running at:

  ```
  http://localhost:5000
  ```
