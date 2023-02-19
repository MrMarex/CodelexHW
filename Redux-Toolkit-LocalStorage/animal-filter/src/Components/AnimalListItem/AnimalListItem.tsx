import { useDispatch } from 'react-redux';
import { removeAnimal } from '../../Store/AnimalSlice';
import './AnimalListItem.css';

interface Animal {
    name: string;
    imageSrc: string;
    species: string;
}

type AnimalProps = {
    animal: Animal;
    index: number;
};

const AnimalListItem = ({ animal, index }: AnimalProps) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(removeAnimal(index));
    };

    return (
        <div className='card'>
            <span className='card-title'>{animal.name}.</span>
            <img
                className='card-img'
                src={animal.imageSrc}
                alt={animal.name}
            />
            <span className='card-species'>Species: {animal.species}</span>
            <button className='btn btn--delete' onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

export default AnimalListItem;