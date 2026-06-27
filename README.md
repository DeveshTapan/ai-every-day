# AI Every Day

A beginner-friendly static website about Artificial Intelligence in daily life.

This website was created using Codex and published through GitHub Pages. It is now also integrated with a Phase 1 Playwright TypeScript UI automation framework for functional and regression testing.

## Live Website

The website is published using GitHub Pages.

Website URL:

```text
https://deveshtapan.github.io/ai-every-day/
```

## Project Overview

This is a static HTML, CSS, and JavaScript website.

Main website files:

```text
index.html
kids.html
personal.html
professional.html
responsible.html
script.js
styles.css
assets/
```

## Automation Overview

Phase 1 Playwright automation framework has been added to validate the basic UI functionality of the website.

Automation technology stack:

```text
Tool: Playwright
Language: TypeScript
Report: Playwright HTML Report
Execution: Local VS Code / Terminal
Repository: GitHub
```

## Phase 1 Automation Scope

Phase 1 covers:

* Home page load validation
* Page title / main heading validation
* Navigation link validation
* Validation of key pages:

  * index.html
  * kids.html
  * personal.html
  * professional.html
  * responsible.html
* CSS file load validation
* JavaScript file load validation
* Image/assets load validation
* Footer visibility validation
* Basic regression tagging using `@regression`

## Automation Framework Structure

```text
pages/
  HomePage.ts
  Navigation.ts

tests/
  functional/
    website-functional.spec.ts
  regression/
    website-regression.spec.ts

utils/
  staticServer.ts
  testHelpers.ts

playwright.config.ts
package.json
package-lock.json
```

## Important Files

| File / Folder                                 | Purpose                                        |
| --------------------------------------------- | ---------------------------------------------- |
| `pages/HomePage.ts`                           | Reusable home page actions and validations     |
| `pages/Navigation.ts`                         | Reusable navigation actions                    |
| `tests/functional/website-functional.spec.ts` | Functional UI test cases                       |
| `tests/regression/website-regression.spec.ts` | Regression test cases                          |
| `utils/testHelpers.ts`                        | Common helper functions                        |
| `utils/staticServer.ts`                       | Local static server support for test execution |
| `playwright.config.ts`                        | Playwright configuration                       |
| `package.json`                                | Project scripts and dependencies               |

## Prerequisites

Before running the project, make sure these are installed:

```text
Node.js
npm
Git
VS Code
Playwright browsers
```

Check installed versions:

```bash
node --version
npm --version
git --version
```

## Install Dependencies

After cloning the repository, run:

```bash
npm install
```

## Run Website Locally

To run the website locally:

```bash
npm run serve
```

The website will be available at:

```text
http://localhost:3000
```

## Run All Playwright Tests

To run all Playwright tests:

```bash
npm test
```

Expected current result:

```text
15 passed
```

## Run Regression Tests Only

To run only regression tests:

```bash
npm run test:regression
```

Expected current result:

```text
8 passed
```

## Open Playwright HTML Report

To open the latest Playwright HTML report:

```bash
npm run test:report
```

The report shows:

* Total tests
* Passed tests
* Failed tests
* Execution time
* Browser used
* Test details

## Useful Playwright Commands

Run all tests:

```bash
npm test
```

Run regression tests only:

```bash
npm run test:regression
```

Open HTML report:

```bash
npm run test:report
```

Open Playwright interactive UI mode:

```bash
npm run test:ui
```

Run website locally:

```bash
npm run serve
```

## Current Phase 1 Status

Phase 1 automation framework has been created and validated successfully.

Current validation:

```text
All tests: 15 passed
Regression tests: 8 passed
```

## GitHub Commit Reference

Phase 1 framework was committed with the message:

```text
Add Phase 1 Playwright UI automation framework
```

## What Is Covered in Phase 1

Covered:

```text
Functional Testing
Basic Regression Testing
Page Object Model
Reusable Utilities
Local Static Server Setup
HTML Reporting
```

Not covered yet:

```text
Responsive Testing
Accessibility Testing
Security Testing
API Testing
GitHub Actions CI/CD
```

## Planned Next Phases

### Phase 2: Responsive Testing

Add tests for:

```text
Desktop view
Tablet view
Mobile view
Layout stability
Navigation visibility
Content responsiveness
```

### Phase 3: Accessibility Testing

Add accessibility validation using:

```text
@axe-core/playwright
```

Potential checks:

```text
Missing alt text
Heading structure
ARIA issues
Label issues
Major accessibility violations
```

### Phase 4: Safe Basic Security Checks

Add only safe and passive checks:

```text
No exposed .env file
No exposed config files
No visible stack trace
No mixed content
No sensitive information in page source
```

No aggressive testing such as:

```text
SQL injection
XSS exploitation
Fuzzing
Brute force
Load testing
```

### Phase 5: GitHub Actions

Add CI workflow to run Playwright tests automatically on:

```text
Push
Pull request
```

## Learning Purpose

This project demonstrates how Codex can be used as an AI coding agent to create a website and then add a Playwright TypeScript automation framework for UI testing.

The current workflow is:

```text
Codex
  ↓
Website creation
  ↓
GitHub publishing
  ↓
Playwright framework creation
  ↓
Local test execution
  ↓
HTML report generation
  ↓
GitHub commit and push
```

## Summary

This repository now contains both:

```text
Static AI-content website
+
Phase 1 Playwright TypeScript UI automation framework
```

This is a hands-on learning project for:

```text
Codex
VS Code
GitHub
Playwright
TypeScript
Functional Testing
Regression Testing
Automation Framework Design
```

## Quick Test Commands

Run functional test cases:

```powershell
npm.cmd test -- tests/functional/website-functional.spec.ts
```

Run regression test cases:

```powershell
npm.cmd run test:regression
```

Open the latest Playwright HTML report:

```powershell
npx.cmd playwright show-report
```

***Below is the prompt to give in codex***
Run the ai-every-day regression test suite without modifying source files. First check git status, then run:
npm.cmd run test:regression
Summarize total tests, passed/failed counts, failed test names, overall status, and final Git status. Do not commit, push, edit files, or open the Playwright HTML report.