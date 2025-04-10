// calcolaOrdine.test.ts
import { calcolaOrdineConSpedizione } from "../src/calcolaOrdineConSpedizione";

test("6. calcolo prodotto + spese di spedizione", () => {
  const articoli = [
    {
      nome: "PC",
      imponibile: 1000.0,
      iva: 22,
    },
    {
      nome: "MOUSE",
      imponibile: 10.0,
      iva: 0,
    },
  ];

  const speseSpedizione = 15.0;

  const risultato = calcolaOrdineConSpedizione(articoli, speseSpedizione);

  expect(risultato).toEqual({
    imponibile: 1010.0,
    iva: 220.0,
    speseSpedizione: 15.0,
    totale: 1245.0, 
  });
});
