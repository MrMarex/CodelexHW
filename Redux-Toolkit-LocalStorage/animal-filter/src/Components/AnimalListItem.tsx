import { useDispatch } from 'react-redux';
import { removeAnimal } from '../Store/AnimalSlice';

interface Animal {
    name: string;
    imageSrc: string;
    species: string;
}

type Props = {
    animal: Animal;
    index: number;
};

const AnimalListItem = ({ animal, index }: Props) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(removeAnimal(index));
    };

    return (
        <li>
            <h2>{animal.name}</h2>
            <img src={animal.imageSrc} alt={animal.name} />
            <p>Species: {animal.species}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
};

export default AnimalListItem;

