interface MainCard {
  image: string;
  name: string;
  description: string;
}

interface CardId extends MainCard {
  id: number;
}
  
export type { CardId, MainCard };