// generateDocs.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// === Configuração ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, "output", "MimosaDB.json");
const outputDir = path.join(__dirname, "docs2");

// === Preparar saída ===
if (fs.existsSync(outputDir)) fs.rmSync(outputDir, { recursive: true });
fs.mkdirSync(outputDir, { recursive: true });

// === Ler JSON ===
const raw = fs.readFileSync(inputFile, "utf-8");
const plants = JSON.parse(raw);

const speciesLinks = [];

// === Criar páginas individuais ===
for (const plant of plants) {
  const speciesName = plant.specificEpithet || "Unknown";
  
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>${speciesName}</title>
<link href="https://cdn.jsdelivr.net/npm/json-formatter-js@2.5.23/dist/json-formatter.min.css" rel="stylesheet">
<style>
  body { font-family: sans-serif; padding: 1em; }
  #json { margin-top: 1em; }
</style>
</head>
<body>
<h1><i>Mimosa</i> ${speciesName}</h1>
<div id="json"></div>
<p><a href="index.html">Voltar ao índice</a></p>

<script src="https://cdn.jsdelivr.net/npm/json-formatter-js@2.5.23/dist/json-formatter.umd.min.js"></script>
<script>
  const data = ${JSON.stringify(plant, null, 2)};
  const container = document.getElementById("json");
  const formatter = new window.JSONFormatter(data, Infinity);
  container.appendChild(formatter.render());
</script>
</body>
</html>
`;

  const outFile = path.join(outputDir, `${speciesName}.html`);
  fs.writeFileSync(outFile, html, "utf-8");
  speciesLinks.push(`<li><a href="${speciesName}.html"><i>Mimosa</i> ${speciesName}</a></li>`);
}

// === Criar index.html ===
const indexHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Catálogo de Mimosa</title>
<style>
  body { font-family: sans-serif; padding: 1em; }
  ul { list-style-type: none; padding: 0; }
  li { margin: 0.25em 0; }
</style>
</head>
<body>
<h1>Catálogo de Mimosa</h1>
<ul>
  ${speciesLinks.join("\n")}
</ul>
</body>
</html>
`;

fs.writeFileSync(path.join(outputDir, "index.html"), indexHtml, "utf-8");

console.log("✅ Documentação gerada em ./docs2!");
