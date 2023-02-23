import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/models/recipe';
import MongoConnect from '@/utils/MongoConnect';

export default function getRecipesByID (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    MongoConnect();
    Recipe.findOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.send(err));
}