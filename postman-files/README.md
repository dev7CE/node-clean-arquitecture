# Project: Node Clean Architectute
Small-size project for clean architecture implementation
# 📁 Collection: Authentication 


## End-point: Login

### Auth Login

This endpoint allows users to log in and obtain an authentication token.

#### Request Body
- `email` (string, required): The email address of the user.
- `password` (string, required): The password of the user.

#### Response
- Status: 200 OK
- Content-Type: application/json
- `user` (object): An object containing user details, including `id`, `name`, and `email`.
- `token` (string): The authentication token obtained upon successful login.


### Method: POST
>```
>{{url}}/auth/login
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
	"email":"email@domain.com",
	"password":"AStrongPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Register
This POST request is used to register a new user for authentication at the specified endpoint. The request should include the user's name, email, and password in the raw request body.

### Request Body

- name (string, required): The name of the user.
- email (string, required): The email address of the user.
- password (string, required): The password for the user account.
    

Upon a successful registration, the response will have a status code of 200 and a JSON content type. The response body will contain the user's ID, name, and email, along with an authentication token.

### Response Body

- user (object): Contains the registered user's details including id, name, and email.
- token (string): The authentication token generated for the registered user.
### Method: POST
>```
>{{url}}/auth/register
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
	"name":"test10",
	"email":"email10@domain.com",
	"password":"AStrongPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List Users
This endpoint makes an HTTP GET request to {{url}}/auth to retrieve authentication details. The response will be in JSON format with the status code 200. An example response body is as follows:

``` json
[
    {
        "_id":"",
        "name":"",
        "email":"",
        "password":"",
        "roles":[""],
        "__v":0
    }
]

 ```
### Method: GET
>```
>{{url}}/auth
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer token_value|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|token_value|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
