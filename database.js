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
  
  
  var stmt = db.prepare("SELECT * FROM test where taste = 'Sweet' or cuisine = 'Italian' ");
    stmt.getAsObject(); // {col1:1, col2:111}
  
   // var stmt = db.prepare("SELECT * FROM test");
   // stmt.getAsObject(); // {col1:1, col2:111}

    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var header = tbl.createTHead();
    var row = header.insertRow(0);
    
    for (var i = 0; i < 8; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = headers[i];
    }
    
    var tbdy = document.createElement('tbody');
    
     stmt.bind();
        while(stmt.step()) { //
            var row = stmt.getAsObject();

           
            console.log(row);
            var tr = document.createElement('tr');
            for (var j = 0; j < 8; j++) {
               
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(row[headers[j]]))
                    tr.appendChild(td)
                
            }
            tbdy.appendChild(tr);
        }
    

    tbl.appendChild(tbdy);
    body.appendChild(tbl)

