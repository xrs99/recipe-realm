/*
  Warnings:

  - You are about to drop the `RecipeList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeListToRecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecipeList" DROP CONSTRAINT "fk_recipe_list_user";

-- DropForeignKey
ALTER TABLE "RecipeListToRecipe" DROP CONSTRAINT "fk_recipe_list_to_recipe_recipe";

-- DropTable
DROP TABLE "RecipeList";

-- DropTable
DROP TABLE "RecipeListToRecipe";

-- CreateTable
CREATE TABLE "recipe_list" (
    "recipe_list_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "pk_recipe_list" PRIMARY KEY ("recipe_list_id")
);

-- CreateTable
CREATE TABLE "recipe_list_torecipe" (
    "recipe_list_to_recipe_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_list_id" UUID NOT NULL,
    "recipe_id" UUID NOT NULL,

    CONSTRAINT "pk_recipe_list_to_recipe" PRIMARY KEY ("recipe_list_to_recipe_id")
);

-- AddForeignKey
ALTER TABLE "recipe_list" ADD CONSTRAINT "fk_recipe_list_user" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_list_torecipe" ADD CONSTRAINT "fk_recipe_list_to_recipe_recipe" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;
