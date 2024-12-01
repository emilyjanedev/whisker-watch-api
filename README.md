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
