import{calcolaOrdine} from "../src/calcolaOrdine";

test("1. Array vuoto", () => {
    const risultato = calcolaOrdine([]);
    expect(risultato).toEqual({
      imponibile: 0,
      iva: 0,
      totale: 0,
    });
  });