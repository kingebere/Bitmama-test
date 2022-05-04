# Changera Assessment

This is a job interview for Changera .

[My Github Account](https://github.com/kingebere) :point_left:

## Getting started

# Github User App

Web app built with React, Node.js, and
Express for getting Github User repository
data with user authentication using Github OAuth

## Environment Variables Setup:

To run this project, you will need to create .env file in `my-react-app directory` and `server directory`
and add the following environment variables to your .env file

.env in server directory

`GITHUB_APP_CLIENT_SECRET = YOUR_GITHUB_APP_CLIENT_SECRET`
`GITHUB_APP_CLIENT_ID = YOUR_GITHUB_APP_CLIENT_ID`

.env in my-react-app directory inside root directory

`REACT_APP_CLIENT_ID = YOUR_GITHUB_APP_CLIENT_ID`

## Run Locally

Clone the project

```bash
  git clone
```

Go to the project directory
Install dependencies for both client and server side to start the app

```bash
  cd server
  npm i && npm start
  cd my-react-app
  npm i && npm start
```

## Built with

- [React]
- Redux

## Issues encountered

- Missing Starred Repositories numbers and repository language color in the API
- Updated date from repository was in ISOstring

## Solution

- Added static value for starred repositories
- Converted to milliseconds and then to days
