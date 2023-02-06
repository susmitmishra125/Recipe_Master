import pandas as pd
food_items_sheet_name = "Copy Food Items"
recipe_ingredients_sheet_name = "Copy Recipe Ingredients"
food_catetories_sheet_name = "Food Categories"
ingredient_categories_sheet_name = "Ingredient Category"

food_items = pd.read_excel('Ingredients.xlsx',sheet_name = food_items_sheet_name)
recipe_ingredients = pd.read_excel('Ingredients.xlsx',sheet_name = recipe_ingredients_sheet_name)
food_categories = pd.read_excel('Ingredients.xlsx',sheet_name = food_catetories_sheet_name)
ingredient_categories = pd.read_excel('Ingredients.xlsx',sheet_name = ingredient_categories_sheet_name)

data = {}
idtoname = {}
# how to itearate over the food_items using indices
for i in range(len(food_items)):
	data[food_items['Food Item'][i]] = {"yield":[food_items['Yield'][i],food_items['Yield unit'][i]],"ingredients":[]}
	data[food_items['Food Item'][i]]['Food ID'] = food_items['Food ID'][i]
	idtoname[food_items['Food ID'][i]] = food_items['Food Item'][i]

for i in range(len(recipe_ingredients)):
	data[idtoname[recipe_ingredients['Food ID'][i]]]['ingredients'].append([recipe_ingredients['Ingredient'][i],recipe_ingredients['Quantity'][i],recipe_ingredients['Unit'][i]])
# print(data)
# save 
import json
with open('data_generated.json', 'w') as fp:
	json.dump(data, fp)
