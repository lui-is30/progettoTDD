import { Articolo } from "./types/type";

export const calcolaOrdine = (articoli: Articolo[]) => {
    if (articoli.length === 0) {
        return {
          imponibile: 0,
          iva: 0,
          totale: 0,
        };
      }
  return {};
}
