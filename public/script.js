async function getVerse() {
  const book = document.getElementById("book").value;
  const chapter = document.getElementById("chapter").value;
  const verse = document.getElementById("verse").value;

  const response = await fetch(
    `/api/verse?book=${book}&chapter=${chapter}&verse=${verse}`
  );

  const data = await response.json();

  document.getElementById("result").innerText =
    data.text || data.error;
}
