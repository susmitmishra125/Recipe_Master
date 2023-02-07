import pandas as pd
from numpy import nan

food_items_sheet_name = "Copy Food Items"
recipe_ingredients_sheet_name = "Copy Recipe Ingredients"
food_catetories_sheet_name = "Food Categories"
ingredient_categories_sheet_name = "Ingredient Category"

food_items = pd.read_excel('Ingredients.xlsx',sheet_name = food_items_sheet_name)
recipe_ingredients = pd.read_excel('Ingredients.xlsx',sheet_name = recipe_ingredients_sheet_name)
food_categories = pd.read_excel('Ingredients.xlsx',sheet_name = food_catetories_sheet_name)
ingredient_categories = pd.read_excel('Ingredients.xlsx',sheet_name = ingredient_categories_sheet_name)

recipe_ingredients['Details'].fillna('',inplace=True)
print(recipe_ingredients.shape)
recipe_ingredients.drop(['ID','Unnamed: 7','Query Key','Ingredient','Ingredient ID.1','Unnamed: 10'],axis=1,inplace=True)
print(recipe_ingredients.head())
recipe_ingredients.dropna(inplace=True)
print(recipe_ingredients.shape)

recipe_ingredients.reset_index(inplace=True)
data = {}
idtoname = {}
# how to itearate over the food_items using indices
for i in range(len(food_items)):
	data[food_items['Food Item'][i]] = {"yield":[food_items['Yield'][i],food_items['Yield unit'][i]],"ingredients":[]}
	data[food_items['Food Item'][i]]['Food ID'] = food_items['Food ID'][i]
	idtoname[food_items['Food ID'][i]] = food_items['Food Item'][i]

for i in range(len(recipe_ingredients)):
	
	data[idtoname[recipe_ingredients['Food ID'][i]]]['ingredients'].append([recipe_ingredients['Ingredient ID'][i],recipe_ingredients['Quantity'][i],recipe_ingredients['Unit'][i],recipe_ingredients['Details'][i]])
# save 
import json
with open('data_generated.json', 'w') as fp:
	json.dump(data, fp)
