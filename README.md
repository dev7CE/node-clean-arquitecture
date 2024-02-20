# Project: Node Clean Architecture
API built under Clean Architecture practices.

## Installation


* Download or clone the project
* Install npm packages: 

```bash
  npm install
```
* Create a copy of `docker.compose.template.yml` file and rename as `docker.compose.yml`.
    * In this file, set custom credentials and port access as you need. Let default values if you plan to use this as a demo. 
* Create a copy of `.env.template` file and rename as `.env`. In this file change below variables if required:
    * Exprees.js `PORT`. Default value is 3000 
    * Mongo Database variables:
      * `MONGO_URL` connection variable. Notice, depends on `docker.compose.yml` file configuration. 
      * `MONGO_DB_NAME` corresponds to Database name, which can be customized.
    * `JWT_SEED` secret. Use for secret for JSON Web Token generation. This should be unique value, and you can generate it by using `openssl rand -hex 32` command (please refer to [~/references/command-list](https://github.com/dev7CE/node-clean-arquitecture/blob/main/references/command-list))  
* Run application:
```bash
  npm run dev
```

## Usage

Test endpoints by following one of options:
* Create new request based on ['~/postman-files'](https://github.com/dev7CE/node-clean-arquitecture/tree/main-DOCUMENTATION/postman-files) documentation. 
* Import both postman collection and environment files located in ['~/postman-files'](https://github.com/dev7CE/node-clean-arquitecture/tree/main-DOCUMENTATION/postman-files) folder.

PLEASE refere to ['~/postman-files/README'](https://github.com/dev7CE/node-clean-arquitecture/tree/main-DOCUMENTATION/postman-files#project-node-clean-architectute) to read about endpoints available for this API.
