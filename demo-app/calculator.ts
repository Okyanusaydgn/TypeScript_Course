export {};

function deriveFinalPrice(p: number) {
  document.getElementById("final-price")!.textContent = `Final Price: ${(
    p * 1.19
  ).toFixed(2)} €`;
}

document
  .querySelector<HTMLFormElement>("form")!
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const p = +(
      new FormData(e.currentTarget as HTMLFormElement).get("price") as string
    ).replace(",", ".");
    deriveFinalPrice(p);
  });
