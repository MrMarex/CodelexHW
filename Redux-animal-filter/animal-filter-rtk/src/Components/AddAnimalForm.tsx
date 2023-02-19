import { useState } from "react";
import { useAddAnimalMutation, useGetAllAnimalsQuery } from "../API/AnimalsApi";

function AddAnimalForm() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [species, setSpecies] = useState("");

    const [addAnimal, { isLoading }] = useAddAnimalMutation();
    const { refetch } = useGetAllAnimalsQuery({skip: false});

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
        } catch (err) {
            console.error("Failed to add animal:", err);
        }
    };

    return (
        <div>
            <form onSubmit={handleAddAnimal}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                <label htmlFor="species">Species:</label>
                <input
                    type="text"
                    id="species"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />

                <button disabled={isLoading}>
                    {isLoading ? "Adding animal..." : "Add animal"}
                </button>
            </form>
        </div>
    );
}

export default AddAnimalForm;
