import { NextApiRequest, NextApiResponse } from 'next';
import MongoConnect from '@/utils/MongoConnect';
import Recipes from '@/models/recipe';

export default function getRecipes (req: NextApiRequest, res: NextApiResponse) {
    MongoConnect();
    Recipes.find()
        .then((data) => res.json(data))
        .catch((err) => res.send(err));
}
