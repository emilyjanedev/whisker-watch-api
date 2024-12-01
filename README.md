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

- PUT /pets/:id
- DELETE /pets/:id

- GET /pets/:id/sightings
- POST /pets/:id/sightings

- POST /users
- PUT /users
- GET /users/:id/sightings
