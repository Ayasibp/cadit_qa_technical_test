## Prerequisite

- Install `nodemon` globally using below command if not installed already

  ```sh
  npm i -g nodemon
  ```

- **PostgreSQL**

## 🚀 Getting Started

You can download or clone this repo using below command:

```sh
git clone git@github.com:Ayasibp/cadit_qa_technical_test.git
```

## ⚙️ Local Setup

- After cloning enter into folder.
- Install dependencies

  ```sh
  npm install
  ```

- Create file called `.env`
- Copy `.env.example` file content `.env` file.

- Run locally

  ```sh
  npm start
  ```

## Tests & Coverage

- Run tests _(unit/integration)_

  ```sh
  npm test
  ```

## Environment Variables

| Variable | Description              | Default Value |
| -------- | ------------------------ | ------------- |
| DB_HOST  | Database connection host | `localhost`   |
| DB_PORT  | Database port            | `5432`        |
| DB_NAME  | Database name            | `postgres`    |
| DB_USER  | Database username        | `postgres`    |
| DB_PASS  | Database password        | `postgres`    |

## Need to be improved

```
First task
  1. add sort on api get all movies
  2. add validation to check params on get all movies, get movies detail
  3. add more cases on unit test
  4. need to fix integration test, because currently still didnt work
  5. swagger for api documentation
  6. improve to use TS rather than JS

Second Task
  1. need to add more detail test cases for leave management system
  2. double check if theres any redundant test cases
```

## Challenge / Blocker

```
 1. first time use express JS to create API
 2. need more effort to create boiler plate
 3. need to be more familiar with jest on express js
 4. working time
```
