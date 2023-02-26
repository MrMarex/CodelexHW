import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/recipesShema';
import MongoConnect from '@/utils/mongoConnect';

export default async function deleteRecipe (req: NextApiRequest, res: NextApiResponse) {
    MongoConnect();

    try {
        const { id } = req.query;
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        console.log(id);
        if (!deletedRecipe) {
            res.status(404).send('Recipe not found');
        } else {
            res.status(200).send('Recipe deleted');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
}
