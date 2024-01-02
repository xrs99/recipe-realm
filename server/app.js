const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});

// Get All Recipes
app.get("/recipe", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  try {
    const recipes = await prisma.recipe.findMany();

    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Users
app.get("/user", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  try {
    const recipes = await prisma.user.findMany();

    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Favorite Recipes By User
app.get("/favorite-recipe/:userId", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { userId } = req.params;
  try {
    const favoriteRecipes = await prisma.favoriteRecipeToUser.findMany({
      where: { userId },
      select: {
        favoriteRecipe: true,
      },
    });

    res.json(favoriteRecipes.map((recipe) => recipe.favoriteRecipe));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Recipe List By User
app.get("/recipe-list/:userId", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { userId } = req.params;
  try {
    const recipeLists = await prisma.recipeList.findMany({
      where: { userId },
      include: { recipeListToRecipes: { include: { recipe: true } } },
    });

    res.json(
      recipeLists.map((recipeList) => ({
        name: recipeList.name,
        recipes: recipeList.recipeListToRecipes.map(
          (recipeListToRecipe) => recipeListToRecipe.recipe
        ),
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create Recipe List
app.post("/recipe-list", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { userId, name, recipeIds } = req.body;

  try {
    const recipeList = await prisma.recipeList.create({
      data: {
        userId,
        name,
      },
    });

    for (const recipeId of recipeIds) {
      await prisma.recipeListToRecipe.create({
        data: {
          recipeListId: recipeList.id,
          recipeId,
        },
      });
    }

    res.json(recipeList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add Recipe To List
app.put("/recipe-list", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { recipeListId, recipeId } = req.body;

  try {
    const recipeList = await prisma.recipeListToRecipe.create({
      data: {
        recipeListId,
        recipeId,
      },
    });

    res.json(recipeList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add Favorite Recipe
app.post("/favorite-recipe", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const { userId, recipeId } = req.body;

  try {
    const favoriteRecipe = await prisma.favoriteRecipeToUser.create({
      data: {
        userId,
        recipeId,
      },
    });

    res.json(favoriteRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
