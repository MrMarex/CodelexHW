import { useGetAllAnimalsQuery } from "../API/AnimalsApi";
import AnimalType from "../Types/AnimalType";

function AnimalList() {
    const { data: animals = [], isLoading } = useGetAllAnimalsQuery({skip: false});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {animals.map((animal: AnimalType) => (
                <li key={animal._id}>
                    <img src={animal.imageUrl} alt={animal.name} />
                    <div>Name: {animal.name}</div>
                    <div>Species: {animal.species}</div>
                </li>
            ))}
        </ul>
    );
}

export default AnimalList;