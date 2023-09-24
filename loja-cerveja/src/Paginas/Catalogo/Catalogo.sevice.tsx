import axios from 'axios';
import { Cerveja } from '../../Interface/ICerveja';

export const buscarCervejas = async (pagina: number, pesquisa?: string): Promise<Cerveja[]> => {
    if (pesquisa) {
        let cervejas: Cerveja[] = [];
        let pagina = 1;
        while (true) {
            const novasCervejas = await axios.get(`https://api.punkapi.com/v2/beers?page=${pagina}&per_page=80`);
            if (novasCervejas.data.length === 0) break;
            cervejas = cervejas.concat(novasCervejas.data);
            pagina++;
        }
        return cervejas.filter(cerveja => cerveja.name.toLowerCase().includes(pesquisa.toLowerCase()));
    } else {
        const resposta = await axios.get(`https://api.punkapi.com/v2/beers?page=${pagina}&per_page=30`);
        return resposta.data;
    }
};



