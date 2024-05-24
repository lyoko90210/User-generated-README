
# User-generated-README

## Description

The User-generated-README is a command-line application designed to quickly create a professional README.md file for new projects. It prompts the user for specific details about the project and then generates a comprehensive README file with all the necessary sections.

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation

To use the User-generated-README, follow these steps:
1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory.
   ```bash
   cd readme-generator
   ```
3. Install the necessary dependencies.
   ```bash
   npm install
   ```

## Usage

To generate a README file, run the application and follow the prompts:
1. Start the application.
   ```bash
   node index.js
   ```
2. Enter the required information when prompted:
   - Project Title
   - Description
   - Installation Instructions
   - Usage Information
   - Contribution Guidelines
   - Test Instructions
   - License Choice
   - GitHub Username
   - Email Address

3. The application will generate a `README.md` file in the project directory.

[Watch a video demonstration of the application here.](https://youtu.be/CQkf-39S6FU?si=NMcIySNxrx4e_uAM)

## License

The application provides several license options. When a license is chosen, a badge for that license is added near the top of the README, and a notice explaining the license is included in the License section.

## Contributing

To contribute to this project, please fork the repository, create a new branch, and submit a pull request. Detailed guidelines are provided in the README file.

## Tests

Instructions for running tests are included in this section. Typically, it would involve running a command like:
```bash
npm test
```

## Questions

For any questions or feedback, please contact me via:
- GitHub: [Daniel D](https://github.com/lyoko90210)
- Email: [danieldennis801@gmail.com](mailto:danieldennis801@gmail.com)

---

## Getting Started

1. **Create a `.gitignore` file**:
   Ensure that the `node_modules/` directory and `.DS_Store` files are ignored by Git. Add these lines to the `.gitignore` file:
   ```
   node_modules/
   .DS_Store
   ```

2. **Setup `package.json`**:
   Run `npm init` to create a `package.json` file before installing any dependencies. This file should list all required dependencies for the project.


## Example Command-Line Prompts

Here's an example of what the command-line prompts might look like when using the README Generator:
```
Enter your project title: My Awesome Project
Enter a description for your project: This project does amazing things.
Enter installation instructions: npm install
Enter usage information: node app.js
Enter contribution guidelines: Fork the repo and submit a PR
Enter test instructions: npm test
Choose a license for your application: MIT, Apache 2.0, GPL 3.0, BSD 3-Clause
Enter your GitHub username: DanielDennis
Enter your email address: danieldennis801@gmail.com
```

The application will then generate a `README.md` file with the provided information, formatted professionally and ready to use.

---



