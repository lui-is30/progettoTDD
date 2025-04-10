import{calcolaOrdine} from "../src/calcolaOrdine";

test("1. Array vuoto", () => {
    const risultato = calcolaOrdine([]);
    expect(risultato).toEqual({
      imponibile: 0,
      iva: 0,
      totale: 0,
    });

  });

  test("2. articoli con IVA 22%", () => {
    const articoli = [
      {
        nome: "PC",
        imponibile: 1000.0,
        iva: 22,
      },
    ];
  
    const risultato = calcolaOrdine(articoli);
  
    expect(risultato).toEqual({
      imponibile: 1000.0,
      iva: 220.0,
      totale: 1220.0,
    });
  });

  test("3. articoli esenti da IVA", () => {
    const articoli = [
      {
        nome: "MOUSE",
        imponibile: 10.0,
        iva: 0,
      },
    ];
  
    const risultato = calcolaOrdine(articoli);
  
    expect(risultato).toEqual({
      imponibile: 10.0,
      iva: 0.0,
      totale: 10.0,
    });
  });