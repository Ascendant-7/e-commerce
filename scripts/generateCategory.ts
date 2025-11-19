import { writeFileSync } from "fs";
import Category from "../src/interfaces/Category";

// id - use for loop
// name
// stock - use random
// image path

const names: string[] = [
  "vegetables",
  "red apple",
  "peach",
  "organic kiwi",
  "hamburger",
  "cake & milk",
  "headphones",
  "snacks",
  "black plum",
  "orange"
]

const categories: Category[] = [];
for (let i = 0; i < names.length; i++) {
  categories.push({
    id: i+1,
    label: names[i],
    stock: Math.floor(Math.random() * 100),
    imagePath: `/category-images/category-image-${i+1}.png`
  });
}

writeFileSync('../src/data/categories.json', JSON.stringify(categories, null, 2), 'utf-8');
