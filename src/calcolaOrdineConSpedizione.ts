import { Articolo } from "./types/type";

export const calcolaOrdineConSpedizione = (articoli:Articolo[], speseSpedizione: number) => {
    let totaleImponibile = 0;
  let totaleIVA = 0;

  for (const articolo of articoli) {
    totaleImponibile += articolo.imponibile;
    if (articolo.iva > 0) {
      totaleIVA += articolo.imponibile * (articolo.iva / 100);
    }
  }

  const totaleParziale = totaleImponibile + totaleIVA;
  const totale = totaleParziale;

  return {
    imponibile: parseFloat(totaleImponibile.toFixed(2)),
    iva: parseFloat(totaleIVA.toFixed(2)),
    speseSpedizione: parseFloat(speseSpedizione.toFixed(2)),
    totale: parseFloat(totale.toFixed(2)),
  };
}