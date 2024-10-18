mysql -u root -p

CREATE DATABASE task_management;

USE task_management;


CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    assigned_to INT,
    status ENUM('pending', 'in progress', 'completed') DEFAULT 'pending',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    due_date DATETIME,
    FOREIGN KEY (assigned_to) REFERENCES Users(id)
);


SHOW DATABASES;  -- This will list all databases
USE task_management;  -- Switch to your database
SHOW TABLES;  -- This will list all tables in the selected database





===========================================================================================
npm init -y
npm install express sequelize mysql2 bcryptjs jsonwebtoken body-parser cors






Go to GitHub and log in.
Click on the "+" icon in the top-right corner and select "New repository."
Fill in the repository name, description, and choose whether it will be public or private.
Click "Create repository."
2. Open your Terminal or Command Prompt
Navigate to the parent directory of your folders using the command line:
bash
Copy code
cd E:\assignments\XDBS
3. Initialize Git in the Parent Directory
Run the following command to initialize a Git repository:
bash
Copy code
git init
4. Add Your Files
Add all your files to the staging area:
bash
Copy code
git add .
5. Commit Your Changes
Commit the changes with a message:
bash
Copy code
git commit -m "Initial commit"
6. Connect to Your GitHub Repository
Add the remote repository. Replace USERNAME with your GitHub username and REPO_NAME with the name of your repository:
bash
Copy code
git remote add origin https://github.com/USERNAME/REPO_NAME.git
7. Push Your Changes to GitHub
Push the changes to the GitHub repository:
bash
Copy code
git push -u origin master
8. Verify on GitHub
Go to your GitHub repository page to verify that your files have been uploaded.
Notes:
If you have multiple branches (e.g., main instead of master), make sure to adjust the push command accordingly:

bash
Copy code
git push -u origin main
If you have any files or folders you want to ignore (like node_modules), create a .gitignore file in your root directory before adding files.







npx create-react-app hotel-booking-system-frontend
cd hotel-booking-system-frontend
mkdir src/components src/pages src/services
npm install react-router-dom axios bootstrap



mkdir hotel-booking-system-backend
cd hotel-booking-system-backend
npm init -y
npm init -y
npm install express sequelize mysql2 bcryptjs jsonwebtoken body-parser cors


