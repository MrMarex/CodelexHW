import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/recipesShema';
import MongoConnect from '@/utils/mongoConnect';

export default async function addRecipe (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            title, image, ingredients, recipe, category,
        } = req.body;
        MongoConnect();

        try {
            const newRecipe = new Recipe({
                title,
                image,
                ingredients,
                recipe,
                category,
            });
            const savedRecipe = await newRecipe.save();
            res.status(201).json(savedRecipe);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
