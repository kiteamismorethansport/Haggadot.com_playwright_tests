# Haggadah Search and Share Tests

This project contains automated tests for the user story "Search for Haggadah and Share" on the haggadot.com website. The tests are written using Playwright and follow the Page Object Model pattern for better maintainability and readability.

## User Story

**Search for Haggadah and Share**

As a user, I want to be able to search and share my favorite Haggadahs so I can spread the word around Jewish rituals.

**Acceptance Criteria:**
1. On haggadot.com, I can search for a Haggadah using a keyword.
2. When I do so, a list of Haggadahs matching the keyword is presented.
3. I can share a specific Haggadah from the results.
4. When I share the Haggadah, a link is presented to me that I can copy for sharing purposes.
5. I can also share the Haggadah as a post on Facebook, Twitter, or LinkedIn.

## Project Structure

project-root/<br/>
│<br/>
├── tests/<br/>
│ ├── searchAndShareHaggadah.spec.js<br/>
│ └── ... (other test files)<br/>
│<br/>
├── pageObjects/<br/>
│ ├── HomePage.js<br/>
│ ├── SearchResultsPage.js<br/>
│ ├── SharePage.js<br/>
│<br/>
├── playwright.config.js<br/>
├── package.json<br/>
└── ... (other configuration files and folders)  <br/>

- **tests/**: Contains test files.
- **pageObjects/**: Contains Page Object classes for different pages and components of the application.
- **playwright.config.js**: Playwright configuration file.
- **package.json**: Contains project dependencies and scripts.

## Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/kiteamismorethansport/Haggadot.com_playwright_tests.git
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Install Playwright browsers:**
    ```sh
    npx playwright install
    ```

## Running Tests

1. **Run all tests:**
    ```sh
    npx playwright test
    ```

2. **Run a specific test file:**
    ```sh
    npx playwright test tests/searchAndShareHaggadah.spec.js
    ```

3. **View test results:**
    ```sh
    npx playwright show-report
    ```