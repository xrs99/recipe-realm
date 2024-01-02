-- AddForeignKey
ALTER TABLE "recipe_list_to_recipe" ADD CONSTRAINT "fk_recipe_list_to_recipe_recipe_list" FOREIGN KEY ("recipe_list_id") REFERENCES "recipe_list"("recipe_list_id") ON DELETE RESTRICT ON UPDATE CASCADE;
