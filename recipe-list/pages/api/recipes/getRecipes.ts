import { NextApiRequest, NextApiResponse } from 'next';
import MongoConnect from '@/utils/MongoConnect';
import Recipes from '@/models/recipe';

export default async function getRecipes (req: NextApiRequest, res: NextApiResponse) {
    try {
        await MongoConnect();
        const data = await Recipes.find();
        console.log('Data from MongoDB:', data);
        res.json(data);
    } catch (err) {
        res.send(err);
    }
}
