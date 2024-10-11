# How to run this project

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

4. **Add the .env file**
Add the following configuration setting:

  ```
  PORT=5000
  MONGOURI=mongodb://localhost:27017/task-db?retryWrites=true&w=majority
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