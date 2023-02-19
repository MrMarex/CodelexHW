import { useGetAllAnimalsQuery, useDeleteAnimalMutation } from "../../API/AnimalsApi";
import CustomToastContainer from "../../Toasts/ToastContainer/CustomToastContainer";
import showDeleteToast from "../../Toasts/ToastDeleted";
import showErrorToast from "../../Toasts/ToastError";
import AnimalType from "../../Types/AnimalType";
import './AnimalsList.css'

function AnimalList() {
    const { data: animals = [], isLoading } = useGetAllAnimalsQuery({ skip: false });
    const [deleteAnimal, { isLoading: isDeleting }] = useDeleteAnimalMutation();
    const { refetch } = useGetAllAnimalsQuery({ skip: false });

    const handleDeleteAnimal = async (animalId: string) => {
        try {
            await deleteAnimal(animalId);
            refetch();
            showDeleteToast();
        } catch (err) {
            showErrorToast();
            console.error("Failed to delete animal: ", err);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="animal-list">
                {animals.map((animal: AnimalType) => (
                    <div className="animal-list-item" key={animal._id}>
                        <img
                            className="list-item list-item--image"
                            src={animal.imageUrl}
                            alt={animal.name}
                        />
                        <div className="list-item list-item--name">Name: {animal.name}</div>
                        <div className="list-item list-item--species">Species: {animal.species}</div>
                        <button
                            className="btn btn--delete-animal"
                            onClick={() => handleDeleteAnimal(animal._id)}
                            disabled={isDeleting}
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </button>
                    </div>
                ))}
            </div>
            <CustomToastContainer />
        </div>
    );
}

export default AnimalList;