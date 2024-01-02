/*
  Warnings:

  - You are about to drop the `recipe_list_torecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recipe_list_torecipe" DROP CONSTRAINT "fk_recipe_list_to_recipe_recipe";

-- DropTable
DROP TABLE "recipe_list_torecipe";

-- CreateTable
CREATE TABLE "recipe_list_to_recipe" (
    "recipe_list_to_recipe_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_list_id" UUID NOT NULL,
    "recipe_id" UUID NOT NULL,

    CONSTRAINT "pk_recipe_list_to_recipe" PRIMARY KEY ("recipe_list_to_recipe_id")
);

-- AddForeignKey
ALTER TABLE "recipe_list_to_recipe" ADD CONSTRAINT "fk_recipe_list_to_recipe_recipe" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;
