import { NextApiRequest, NextApiResponse } from 'next';
import MongoConnect from '@/utils/mongoConnect';
import Recipe from '@/utils/models/recipesShema';

export default async function updateRecipe (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { id } = req.query;

    if (!id) {
        return res.status(400).send('Recipe id is missing');
    }

    try {
        await MongoConnect();

        const recipe = await Recipe.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Validate the update operation against the schema
        });

        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }

        return res.status(200).json(recipe);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
}
