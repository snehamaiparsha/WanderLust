#Wanderlust


#Prerequisites
Node.js (version 18 recommended)
MongoDB
Nodemon (installed globally)

#Installation Steps
1.Clone the Wanderlust repository from GitHub:
git clone https://github.com/gawandeabhishek/Wanderlust-Major-Project.git

2.Set up the database:

Create a .env file in the root directory of the project.

Add the following line to the .env file:
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust

3.Set up Cloudinary:
Go to Cloudinary and sign up for a free account.

Once logged in, obtain your Cloudinary CLOUD_NAME, CLOUD_API_KEY, and CLOUD_API_SECRET.

Add these values to the .env file:
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

4.Set the secret for your Cloudinary storage:
Add a SECRET key to your .env file and set it to a secure value:
SECRET=your_cloudinary_secret

5.Install project dependencies using npm:
npm install

6.Run the application using Nodemon:
nodemon app.js

7.Access the project:

Once the server is running, you can access the project at http://localhost:8080.
      
