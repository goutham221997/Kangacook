# Kangacook

To run the frontend `npm start`
To run the backend `python manage.py runserver`

In the webpage we have two radio buttons, `Add recipe` and `Read Recipes`

In the `add recipe` we have three fields `Title`, `Ingredients` and `Instructions`. Fillout those three fields to update the database using POST call -> `http://localhost:8000/api/recipes/`.

In the `Read recipes` we can read all the recipes and send it back to the frontend using the GET call -> `http://localhost:8000/api/recipes/`

In backend we can delete the database and reinstantiate the database.
`rm db.sqlite3`, `rm -r recipes/migrations/00*.py` and `python manage.py migrate`
