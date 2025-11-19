import { writeFileSync } from "fs";
import Promotion from "../src/interfaces/Promotion";

const labels:string[] = [
  "Everyday Fresh & Clean with Our Products",
  "Make your Breakfast Healthy and Easy",
  "The best Organic Products Online"
];

const promotions:Promotion[] = [];
for (let i = 0; i < labels.length; i++) {
  promotions.push({
    id: i,
    label: labels[i],
    imagePath: `/promotion-images/promotion-image-${i+1}.png`
  });
}

writeFileSync('../src/data/promotions.json', JSON.stringify(promotions, null, 2), 'utf-8');
