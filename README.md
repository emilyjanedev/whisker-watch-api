# WhiskerWatch API

## Environement Setup

Firebase Storage account required.

1. Copy the `.env.example` file and rename it to `.env`
2. Fill in the empty variables with your credentials for Firebase Storage.
3. Create a MySQL database named `whisker-watch-db`
4. In your terminal run `npm install` to install all dependencies
5. In your terminal run `npm run db:migrate` to create the database tables
6. In your terminal run `npm run db:seed` to populate the tables with data
7. Lastly, run `npm start` to run your server

## Endpoints

- The base URL for this API is `http://localhost:8080/api`

### Pets

**GET /pets**

- Get list of pets

Response:

```json
[
    {
        "id": 1,
        "user_id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
        "pet_image": "https://firebasestorage.googleapis.com/v0/b/whiskerwatch-3d96d.firebasestorage.app/o/pet-images%2Fimg_1570.jpg-33d129dc-c38b-4f65-b5b1-495cc71238f1?alt=media&token=8dc6fe0f-ea71-4eec-a5cd-e6c95de65cab",
        "status": "lost",
        "pet_name": "Cheeto",
        "pet_type": "Cat",
        "lng": -123.1174384,
        "lat": 49.2805916,
        "city": "Vancouver",
        "address": "777 Richards Street, Vancouver, BC, Canada",
        "pet_age": 3,
        "description": "Cheeto somehow snuck out of our apartment, into the elevator, and onto the street! Have you seen him?",
        "pet_temperament": "Timid",
        "missing_since": "2024-11-26T16:00:00.000Z",
        "pet_size": "S",
        "contact_name": "Zak",
        "contact_email": "zak@gmail.com",
        "created_at": "2024-12-02T03:41:16.000Z",
        "updated_at": "2024-12-02T03:41:16.000Z"
    },
    ...
]
```

**POST /pets**

- Add a new pet

Request Body:

```json
{
  "user_id": "JjxS0CSLoEXDEPIdPYCogPh4X1Y2",
  "pet_image": "(binary)",
  "pet_name": "Monkey",
  "pet_type": "Dog",
  "lat": 49.312059,
  "lng": -122.9519206,
  "city": "North Vancouver",
  "address": "726 Baycrest Drive, North Vancouver, BC, Canada",
  "pet_age": 4,
  "description": "Monkey got out last night! Have you seen him?",
  "pet_temperament": "Friendly",
  "missing_since": "Fri, 29 Nov 2024 08:00:00 GMT",
  "pet_size": "XS",
  "contact_name": "Emily",
  "contact_email": "ejschur@gmail.com"
}
```

Response:

```json
{
  "id": 12,
  "user_id": "JjxS0CSLoEXDEPIdPYCogPh4X1Y2",
  "pet_image": "https://firebasestorage.googleapis.com/v0/b/whiskerwatch-3d96d.firebasestorage.app/o/pet-images%2Ffunny-derpy-dogs-4-610bf8dff3ed4__700.jpg-4ad39899-9018-44c1-ba07-454c5835f55a?alt=media&token=2f0a2dc8-d596-42d8-9454-bffd83e9d602",
  "status": "lost",
  "pet_name": "Monkey",
  "pet_type": "Dog",
  "lng": -122.9519206,
  "lat": 49.312059,
  "city": "North Vancouver",
  "address": "726 Baycrest Drive, North Vancouver, BC, Canada",
  "pet_age": 4,
  "description": "Monkey got out last night! Have you seen him?",
  "pet_temperament": "Friendly",
  "missing_since": "2024-11-29T08:00:00.000Z",
  "pet_size": "XS",
  "contact_name": "Emily",
  "contact_email": "ejschur@gmail.com",
  "created_at": "2024-12-01T21:16:40.000Z",
  "updated_at": "2024-12-01T21:16:40.000Z"
}
```

**GET /pets/:id**

- Get one pet with the given id

Parameters:

- id: number representing the id of the pet

Response:

```json
{
  "id": 1,
  "user_id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
  "pet_image": "https://firebasestorage.googleapis.com/v0/b/whiskerwatch-3d96d.firebasestorage.app/o/pet-images%2Fimg_1570.jpg-33d129dc-c38b-4f65-b5b1-495cc71238f1?alt=media&token=8dc6fe0f-ea71-4eec-a5cd-e6c95de65cab",
  "status": "lost",
  "pet_name": "Cheeto",
  "pet_type": "Cat",
  "lng": -123.1174384,
  "lat": 49.2805916,
  "city": "Vancouver",
  "address": "777 Richards Street, Vancouver, BC, Canada",
  "pet_age": 3,
  "description": "Cheeto somehow snuck out of our apartment, into the elevator, and onto the street! Have you seen him?",
  "pet_temperament": "Timid",
  "missing_since": "2024-11-26T16:00:00.000Z",
  "pet_size": "S",
  "contact_name": "Zak",
  "contact_email": "zak@gmail.com",
  "created_at": "2024-12-02T03:41:16.000Z",
  "updated_at": "2024-12-02T03:41:16.000Z"
}
```

**PUT /pets/:id**

- Update an existing pet

Parameters:

- id: number representing the id of the pet

Request Body:

```json
{
  "user_id": "JjxS0CSLoEXDEPIdPYCogPh4X1Y2",
  "pet_image": "(binary)",
  "pet_name": "Monkey",
  "pet_type": "Dog",
  "lat": 49.312059,
  "lng": -122.9519206,
  "city": "North Vancouver",
  "address": "726 Baycrest Drive, North Vancouver, BC, Canada",
  "pet_age": 4,
  "description": "Monkey got out last night! Have you seen him?",
  "pet_temperament": "Friendly",
  "missing_since": "Fri, 29 Nov 2024 08:00:00 GMT",
  "pet_size": "XS",
  "contact_name": "Emily",
  "contact_email": "ejschur@gmail.com"
}
```

Response:

```json
{
  "id": 12,
  "user_id": "JjxS0CSLoEXDEPIdPYCogPh4X1Y2",
  "pet_image": "https://firebasestorage.googleapis.com/v0/b/whiskerwatch-3d96d.firebasestorage.app/o/pet-images%2Ffunny-derpy-dogs-4-610bf8dff3ed4__700.jpg-4ad39899-9018-44c1-ba07-454c5835f55a?alt=media&token=2f0a2dc8-d596-42d8-9454-bffd83e9d602",
  "status": "lost",
  "pet_name": "Monkey",
  "pet_type": "Dog",
  "lng": -122.9519206,
  "lat": 49.312059,
  "city": "North Vancouver",
  "address": "726 Baycrest Drive, North Vancouver, BC, Canada",
  "pet_age": 4,
  "description": "Monkey got out last night! Have you seen him?",
  "pet_temperament": "Friendly",
  "missing_since": "2024-11-29T08:00:00.000Z",
  "pet_size": "XS",
  "contact_name": "Emily",
  "contact_email": "ejschur@gmail.com",
  "created_at": "2024-12-01T21:16:40.000Z",
  "updated_at": "2024-12-01T21:16:40.000Z"
}
```

**DELETE /pets/:id**

- Delete an existing pet
  Parameters:

- id: number representing the id of the pet

Response:

- 204 status code if successful

**GET /pets/:id/sightings**

- Get a list of sightings for a specific pet

Parameters:

- id: number representing the id of the pet

Response:

```json
[
    {
        "id": 8,
        "user_name": "Jane",
        "note": "I saw Bear getting some Earnest Ice Cream. He skipped the whole line!",
        "sighted_at": "2024-11-26T08:00:00.000Z",
        "city": "North Vancouver",
        "lat": 49.3121213,
        "lng": -123.0800505
    }
    ...
]
```

**POST /pets/:id/sightings**

- Add a listing for a specific pet

Parameters:

- id: number representing the id of the pet

Request Body:

```json
{
  "city": "North Vancouver",
  "lat": 49.30304959999999,
  "lng": -122.9552922,
  "note": "I saw Monkey enjoying the beach at Cates Park!",
  "pet_id": "7",
  "sighted_at": "2024-11-30T08:00:00.000Z",
  "user_id": "Uezr0Sh9bfcjpg24jRsM9491nXq1"
}
```

Response:

```json
{
  "id": 13,
  "pet_id": 7,
  "user_id": "Uezr0Sh9bfcjpg24jRsM9491nXq1",
  "note": "I saw Monkey enjoying the beach at Cates Park!",
  "lng": -122.9552922,
  "lat": 49.30304959999999,
  "city": "North Vancouver",
  "sighted_at": "2024-11-30T08:00:00.000Z",
  "created_at": "2024-12-02T01:47:33.000Z",
  "updated_at": "2024-12-02T01:47:33.000Z"
}
```

### Users

**GET /users**

- Get a list of users

Response Body:

```json
[
    {
        "id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
        "user_name": "Zak",
        "user_email": "zak@gmail.com",
        "created_at": "2024-12-02T03:37:56.000Z",
        "updated_at": "2024-12-02T03:37:56.000Z"
    },
    ...
]
```

**POST /users**

- Add a user

Request Body:

```json
{
  "id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
  "user_name": "Zak",
  "user_email": "zak@gmail.com"
}
```

Response:

```json
{
  "id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
  "user_name": "Zak",
  "user_email": "zak@gmail.com",
  "created_at": "2024-12-02T03:37:56.000Z",
  "updated_at": "2024-12-02T03:37:56.000Z"
}
```

**GET /users/:id**

- Get a specific user

Parameters:

- id: string representing the id of the user

Response:

```json
{
  "id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
  "user_name": "Zak",
  "user_email": "zak@gmail.com",
  "created_at": "2024-12-02T03:37:56.000Z",
  "updated_at": "2024-12-02T03:37:56.000Z"
}
```

**PUT /users/:id**

- Update an existing user

Parameters:

- id: string representing the id of the user

Request Body:

````json
{
  "id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
  "user_name": "Zak",
  "user_email": "zak@gmail.com"
}

Response:

```json
{
  "id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
  "user_name": "Zak",
  "user_email": "zak@gmail.com",
  "created_at": "2024-12-02T03:37:56.000Z",
  "updated_at": "2024-12-02T03:37:56.000Z"
}
````

**GET /users/:id/sightings**

- Get a list of sightings that a specific user has reported
  Parameters:

- id: string representing the id of the user

Response:

```json
[
    {
        "id": 6,
        "pet_id": 7,
        "user_id": "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
        "note": "I saw Monkey enjoying the beach at Cates Park today",
        "lng": -122.9552922,
        "lat": 49.30304959999999,
        "city": "North Vancouver",
        "sighted_at": "2024-11-25T08:00:00.000Z",
        "created_at": "2024-12-01T19:56:39.000Z",
        "updated_at": "2024-12-01T19:56:39.000Z"
    },
    ...
]
```
