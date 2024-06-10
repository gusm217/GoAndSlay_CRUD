# GoAndSlay_RESTful API
A RESTful CRUD API with an in memory database. 

### Requisites
* Node.js;

### Setup
* Clone the repository;
* Install dependencies (npm install);
* Test it! (tested with [Hoppscotch](https://hoppscotch.io/)).

## HTTP

## POST - `/users`

Create a new user.

**Request body**:
```json
{
  "name": "any_name",
  "email": "any_valid@email.com",
  "age": 20  
}
```
**Response body**:
```json
{
  "id": "bb35deaf-adcf-469e-bc1d-4a90f567cb1f",
  "name": "any_name",
  "email": "any_valid@email.com",
  "age": 20
}
```

## GET - `/users`

Return a list of all users.

**Response body**:
```json
{
    "id": "bb35deaf-adcf-469e-bc1d-4a90f567cb1f",
    "name": "any_name",
    "email": "any_valid@email.com",
    "age": 20
  }
```

## GET - `/users/:id`

Return a user by Id.

**Request param**:
```json
/users/bb35deaf-adcf-469e-bc1d-4a90f567cb1f
```
**Response body**:
```json
{
    "id": "bb35deaf-adcf-469e-bc1d-4a90f567cb1f",
    "name": "any_name",
    "email": "any_valid@email.com",
    "age": 20
  }
```

## PUT - `/users/:id`  

Update a user data.

**Request param**:
```json
/users/bb35deaf-adcf-469e-bc1d-4a90f567cb1f
```
**Request body**:
```json
{
  "name": "new_name"
}
```
**Response body**:
```json
{
    "id": "bb35deaf-adcf-469e-bc1d-4a90f567cb1f",
    "name": "new_name",
    "email": "any_valid@email.com",
    "age": 20
  }
```

## DELETE - `/users/:id`
**Request param**:
```json
/users/bb35deaf-adcf-469e-bc1d-4a90f567cb1f
```
**Response status**:
```json
status: 204
```
