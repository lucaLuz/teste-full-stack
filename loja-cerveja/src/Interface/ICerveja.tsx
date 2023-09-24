// tipos.ts
export interface Cerveja {
    id: number;
    name: string;
    description: string;
    image_url: string;
    abv: number;
    ingredients: {
        yeast: string;
      };
  }
  