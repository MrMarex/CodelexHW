import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/recipesShema';
import MongoConnect from '@/utils/mongoConnect';

export default function getRecipes (req: NextApiRequest, res: NextApiResponse) {
    MongoConnect();
    Recipe.find()
        .then((data) => res.json(data))
        .catch((err) => res.send(err));
}
