import { useState } from "react";
import { useAddAnimalMutation, useGetAllAnimalsQuery } from "../../API/AnimalsApi";
import showSuccessToast from "../../Toasts/ToastSuccess";
import CustomToastContainer from "../../Toasts/ToastContainer/CustomToastContainer";
import './AddAnimalForm.css'
import showErrorToast from "../../Toasts/ToastError";

function AddAnimalForm() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [species, setSpecies] = useState("");

    const [addAnimal, { isLoading }] = useAddAnimalMutation();
    const { refetch } = useGetAllAnimalsQuery({ skip: false });

    const handleAddAnimal = async (e: any) => {
        const animal = {
            name,
            imageUrl,
            species,
        };

        try {
            e.preventDefault();
            await addAnimal(animal);

            setName("");
            setImageUrl("");
            setSpecies("");

            refetch();

            showSuccessToast();
        } catch (err) {
            showErrorToast();
            console.error("Failed to add animal:", err);
        }
    };

    return (
        <div className="add-animal-container">
            <h2 className="add-animal-heading">Add new animal.</h2>
            <form className="add-animal-form" onSubmit={handleAddAnimal}>
                <label className="label-text" htmlFor="name">Name:</label>
                <input
                    className="form-input form-input--name"
                    type="text"
                    id="name"
                    value={name}
                    placeholder='Lion...'
                    onChange={(e) => setName(e.target.value)}
                />
                <label className="label-text" htmlFor="imageUrl">Image URL:</label>
                <input
                    className="form-input form-input--image"
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    placeholder='https://image....'
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <label className="label-text" htmlFor="species">Specie:</label>
                <input
                    className="form-input form-input--specie"
                    type="text"
                    id="species"
                    value={species}
                    placeholder='Cat...'
                    onChange={(e) => setSpecies(e.target.value)}
                />
                <button className='btn btn--add-animal' disabled={isLoading}>
                    {isLoading ? "Adding animal..." : "Add animal"}
                </button>
            </form>
            <CustomToastContainer />
        </div>
    );
}

export default AddAnimalForm;
