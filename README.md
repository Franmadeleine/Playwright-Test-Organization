<img src="./banner.png" alt="Capa do Projeto" width="600"/>

📌 About the Project

This project focuses on applying best practices in organizing and refactoring automated tests using the Playwright framework. The tests were designed to validate the sign-up flow of a web application, with emphasis on negative scenarios — cases where the user submits invalid or incomplete data.

🧪 What Was Done

Created a signUp folder to separate tests by functionality.

Grouped tests using test.describe for better structure.

Used beforeEach to avoid code repetition and ensure all tests start on the correct page.

Validated error messages for required fields and invalid inputs.

🚀 Technologies Used

Playwright

JavaScript / TypeScript

VS Code

Git & GitHub

📁 Project Structure


tests/

├── signUp/

│   ├── signUpNegative.spec.js

│   └── signUpPositive.spec.js

├── signIn/

│   └── signInPositive.spec.js
