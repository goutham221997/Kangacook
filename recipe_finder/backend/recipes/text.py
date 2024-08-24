from recipes.models import Recipe  # Replace 'myapp' with the name of your app

# Create some test data
recipe1 = Recipe.objects.create(
    title="Spaghetti Carbonara",
    ingredients="Spaghetti, Eggs, Parmesan cheese, Pancetta, Pepper",
    instructions="1. Cook spaghetti. 2. Cook pancetta. 3. Mix eggs and cheese. 4. Combine all with pepper."
)

recipe2 = Recipe.objects.create(
    title="Chocolate Cake",
    ingredients="Flour, Sugar, Cocoa powder, Baking powder, Eggs, Milk, Butter",
    instructions="1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake in the oven at 350°F for 30 minutes."
)

recipe3 = Recipe.objects.create(
    title="Caesar Salad",
    ingredients="Romaine lettuce, Croutons, Parmesan cheese, Caesar dressing, Chicken (optional)",
    instructions="1. Toss lettuce with dressing. 2. Add croutons and cheese. 3. Add grilled chicken if desired."
)

# View the created recipes
Recipe.objects.all()
