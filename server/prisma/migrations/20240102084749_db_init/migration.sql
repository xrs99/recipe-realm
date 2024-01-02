CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "recipe" (
    "recipe_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "pk_recipe" PRIMARY KEY ("recipe_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_user" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "favorite_recipe_to_user" (
    "favorite_recipe_to_user_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL,
    "recipe_id" UUID NOT NULL,

    CONSTRAINT "pk_favorite_recipe_to_user" PRIMARY KEY ("favorite_recipe_to_user_id")
);

-- CreateTable
CREATE TABLE "RecipeList" (
    "recipe_list_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "pk_recipe_list" PRIMARY KEY ("recipe_list_id")
);

-- CreateTable
CREATE TABLE "RecipeListToRecipe" (
    "recipe_list_to_recipe_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_list_id" UUID NOT NULL,
    "recipe_id" UUID NOT NULL,

    CONSTRAINT "pk_recipe_list_to_recipe" PRIMARY KEY ("recipe_list_to_recipe_id")
);

-- AddForeignKey
ALTER TABLE "favorite_recipe_to_user" ADD CONSTRAINT "fk_favorite_recipe_to_user_recipe" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_recipe_to_user" ADD CONSTRAINT "fk_favorite_recipe_to_user_user" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeList" ADD CONSTRAINT "fk_recipe_list_user" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeListToRecipe" ADD CONSTRAINT "fk_recipe_list_to_recipe_recipe" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;
