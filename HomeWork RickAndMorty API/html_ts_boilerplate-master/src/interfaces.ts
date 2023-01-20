interface Character {
    image: string;
    url: string;
    name: string;
    episode: string[];
    status: string;
    species: string;
    origin: { name: string };
    type: string;
  }

interface ApiResponse {
  results: Character[]
}

export { ApiResponse, Character };
