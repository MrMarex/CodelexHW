export type Character = {
    info: CharacterInfo;
    results: CharacterResults[];
}

export type CharacterInfo = {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export type CharacterResults =
    {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: CharacterOrigin;
        location: CharacterLocation;
        image: string;
        episode: CharacterEpisode;
        url: string;
    }

export type CharacterOrigin = {
    name: string;
    url: string;
}

export type CharacterLocation = {
    name: string;
    url: string;
}

export type CharacterEpisode = string[]

export type Episodes = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string,
}