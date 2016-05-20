// Code goes here

// Code goes here

// Code goes here

        var headers = ['id', 'food', 'recipe', 'taste', 'restrictions', 'meal_type', 'cuisine', 'difficulty'];
        //Create the database
        var db = new SQL.Database();
        // Run a query without reading the results
        db.run("CREATE TABLE test (id, food, recipe, taste, restrictions, meal_type, cuisine, difficulty);");
     
        db.run("INSERT INTO test VALUES (1, 'Chocolate Chip Cookie','http://allrecipes.com/recipe/10813/best-chocolate-chip-cookies/',	'Sweet', 	'Gluten',	'Dessert',	'American', 'Medium');");
        db.run("INSERT INTO test VALUES (2, 'Cheese Pizza','http://www.food.com/recipe/basic-cheese-pizza-194593',	'Savory', 	'Gluten',	'Linner',	'American', 'Easy');");
        db.run("INSERT INTO test VALUES (3, 'Fried Rice',	'http://www.seriouseats.com/recipes/2016/02/easy-vegetable-fried-rice-recipe.html',	'Savory',	'Optional Meat',	'Linner',	'Chinese',	'Easy');");
        db.run("INSERT INTO test VALUES (4, 'Beef Burrito',	'http://www.foodnetwork.com/recipes/ree-drummond/beef-and-bean-burritos-recipe.html',	'Savory',	'Meat',	'Linner',	'Mexican',	'Medium');");
        db.run("INSERT INTO test VALUES (5, 'Cheesecake',	'http://www.foodnetwork.com/recipes/tyler-florence/the-ultimate-cheesecake-recipe.html',	'Sweet',	'Lactose',	'Dessert',	'American',	'Hard');");
        db.run("INSERT INTO test VALUES (5, 'Ramen Noodles',	'http://www.chowhound.com/recipes/slow-cooker-pork-ramen-31178',	'Savory',	'Gluten',	'Linner',	'Japanese',	'Easy');");
        db.run("INSERT INTO test VALUES (6, 'Dumplings',	'http://allrecipes.com/recipe/228052/chinese-pork-dumplings/',	'Savory',	'Gluten',	'Linner',	'Chinese',	'Medium');");
        db.run("INSERT INTO test VALUES (7, 'Curry Rice',	'http://allrecipes.com/recipe/166678/easy-curry-rice/',	'Savory',	'Optional Meat',	'Linner',	'Thai/Indian',	'Hard');");
        db.run("INSERT INTO test VALUES (8, 'Couscous',	'http://www.myrecipes.com/recipe/quick-parmesan-couscous',	'Savory',	'Gluten',	'Linner',	'African',	'Easy');");
        db.run("INSERT INTO test VALUES (9, 'Salmon',	'http://allrecipes.com/recipe/189058/super-simple-salmon/',	'Savory',	'Meat',	'Linner',	'American', 'Easy');");
        db.run("INSERT INTO test VALUES (10, 'Gyro',	'http://allrecipes.com/recipe/220274/easy-chicken-gyro/',	'Savory',	'Meat',	'Linner',	'Greek',	'Medium');");
        db.run("INSERT INTO test VALUES (11, 'Hamburger',	'http://allrecipes.com/recipe/25473/the-perfect-basic-burger/',	'Savory',	'Meat',	'Linner',	'American',	'Easy');");
        db.run("INSERT INTO test VALUES (12, 'Spaghetti',	'http://allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/',	'Savory',	'Gluten',	'Linner',	'Italian',	'Easy');");
        db.run("INSERT INTO test VALUES (13, 'Apple Salad',	'http://www.epicurious.com/recipes/food/views/apple-celery-and-walnut-salad-351449',	'Sweet',	' ',	'Linner',	'American',	'Easy');");
        db.run("INSERT INTO test VALUES (14, 'Lasagna',	'http://allrecipes.com/recipe/23600/worlds-best-lasagna/',	'Savory',	'Meat',	'Linner',	'Italian',	'Medium');");
        db.run("INSERT INTO test VALUES (15, 'Vanilla Ice Cream',	'http://allrecipes.com/recipe/8314/vanilla-ice-cream/',	'Sweet',	'Lactose',	'Desert',	'American',	'Medium');");
  
      var stmt;
      function searchTaste(taste){
        stmt = db.prepare("SELECT * FROM test where taste = '" + taste + "'");
        console.log(stmt);
        
        var foodObjects = [];
        stmt.bind();
        while(stmt.step()) { //
            var row = stmt.getAsObject();
            foodObjects.push(row);
        }
        console.log(foodObjects);
       return foodObjects;
      }
      
      
       function searchName(name){
        stmt = db.prepare("SELECT * FROM test where food LIKE'%" + name + "%'");
        console.log(stmt);
        
        var foodObjects = [];
        stmt.bind();
        while(stmt.step()) { //
            var row = stmt.getAsObject();
            foodObjects.push(row);
        }
       console.log(foodObjects);
       return foodObjects;
      }
     
     searchName('Dumpl');
     //searchTaste('Sweet');
     
     var stmt;
     function searchAll(taste, cuisine, restriction, meal, difficulty){
        
        //check if taste is null
        //if not....then what?
        //if so...then what?

        //SELECT * FROM test WHERE
        //taste LIKE %taste%
        //cuisine LIKE %cuisine%
        
        var beginningSelect = "SELECT * FROM test WHERE ";
        var isFirstParam = true;
        if (taste) {
          beginningSelect= beginningSelect + "taste LIKE '" + taste + "'";
          isFirstParam = false;
          console.log(beginningSelect);
        }
        
        if (cuisine) {
          if (isFirstParam) {
            beginningSelect = beginningSelect + " cuisine LIKE '" + cuisine +"'";
          } else {
            beginningSelect += " or cuisine LIKE '" + cuisine + "'";
          }
          console.log(beginningSelect);
        }
        
        
        stmt = db.prepare(beginningSelect);
        console.log(stmt);
        
        var foodObjects = [];
        stmt.bind();
        while(stmt.step()) { //
            var row = stmt.getAsObject();
            foodObjects.push(row);
        }
        console.log(foodObjects);
       return foodObjects;
      }
     searchAll('c', 'Italian');
