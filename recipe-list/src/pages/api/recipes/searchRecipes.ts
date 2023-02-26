import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/recipesShema';
import MongoConnect from '@/utils/mongoConnect';

export default async function searchRecipes (
    req: NextApiRequest,
    res: NextApiResponse,
) {
    MongoConnect();

    try {
        const { searchQuery } = req.query;
        const recipes = await Recipe.find({
            title: { $regex: searchQuery, $options: 'i' },
        });
        res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
}
