const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "landing-page-legalizacao.html");
let rawHtml = fs.readFileSync(htmlPath, "utf8");

// Em Next.js SSR com streaming, o conteúdo completo fica dentro do template/suspense div
let bodyContent = "";

// Procurar o container principal da página
const startToken = '<div class="min-h-screen bg-[#F8F7F3]';
const startIndex = rawHtml.indexOf(startToken);

if (startIndex !== -1) {
  // Pegar do início da div até o fechamento dela
  let fragment = rawHtml.substring(startIndex);
  // Encontrar o fechamento antes dos scripts de fechamento
  const endToken = '</div></div>';
  const endIndex = fragment.lastIndexOf(endToken);
  if (endIndex !== -1) {
    bodyContent = fragment.substring(0, endIndex + '</div>'.length);
  } else {
    bodyContent = fragment;
  }
} else {
  bodyContent = rawHtml;
}

// Limpar tags internas de streaming <!-- --> e comentários do react
bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, "");

// Ajustar imagens do Next para links diretos ou web
bodyContent = bodyContent.replace(/src="\/_next\/image\?url=%2Froberto-moura\.png&amp;[^"]*"/g, 'src="https://www.betelarquitetura.com.br/roberto-moura.png"');
bodyContent = bodyContent.replace(/srcset="[^"]*"/gi, '');
bodyContent = bodyContent.replace(/srcSet="[^"]*"/g, '');

const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura — Betel Arquitetura</title>
  <meta name="description" content="Orientação técnica e condução de processos de regularização imobiliária com Roberto Moura, arquiteto e urbanista (CAU/BR A14965-9), Betel Arquitetura." />

  <!-- Tailwind CSS CDN para renderização imediata no Google Stitch / Browser -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Fontes Editoriais Oficiais (DM Serif Display + Inter) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"DM Serif Display"', 'Georgia', 'serif'],
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            deepGreen: '#203B32',
            secGreen: '#344F43',
            warmWhite: '#F8F7F3',
            sand: '#E8DFD0',
            softBronze: '#AD9166',
            graphite: '#292D2A',
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #F8F7F3;
      color: #292D2A;
      margin: 0;
      padding: 0;
    }
    .font-serif {
      font-family: 'DM Serif Display', Georgia, serif;
    }
  </style>
</head>
<body class="bg-[#F8F7F3] text-[#292D2A]">
${bodyContent}
</body>
</html>`;

const outPath = path.join(__dirname, "..", "landing-page-legalizacao-standalone.html");
fs.writeFileSync(outPath, standaloneHtml, "utf8");
console.log("Arquivo gerado com sucesso em:", outPath);
