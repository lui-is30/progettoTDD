import { Articolo } from "./types/type";

export const calcolaOrdine = (articoli: Articolo[]) => {
    if (articoli.length === 0) {
        return {
          imponibile: 0,
          iva: 0,
          totale: 0,
        };
      }

      let totaleImponibile = 0;
      let totaleIVA = 0;
    
      for (const articolo of articoli) {
        totaleImponibile += articolo.imponibile;
        totaleIVA += articolo.imponibile * (articolo.iva / 100);
      }
    
      return {
        imponibile: parseFloat(totaleImponibile.toFixed(2)),
        iva: parseFloat(totaleIVA.toFixed(2)),
        totale: parseFloat((totaleImponibile + totaleIVA).toFixed(2)),
      };
}
