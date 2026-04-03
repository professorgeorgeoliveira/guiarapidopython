// === DADOS DO CHEATSHEET ===
const cheatSheetData = [
    {
      category: "Primeiros Passos",
      icon: "terminal",
      items: [
        { title: "Hello World e Variáveis", desc: "Declaração de variáveis e exibição no console.", code: `#= declaração de variáveis com o nome\nvariavel = 10\n\n# \\n faz a quebra de linha\nprint('Olá mundo \\n oi')\n\n# Junção de texto e variáveis\nprint('Valor da variavel', variavel)` },
        { title: "Tipos de Dados Primitivos", desc: "Os tipos comuns/primitivos em Python (sem precisar declarar).", code: `inteiro = 3\nreal = 3.14\ntexto = "palavras"\nlogico = True # ou False\n\nprint(inteiro) # 3\nprint(real)    # 3.14\nprint(texto)   # palavras\nprint(logico)  # True` },
        { title: "Comentários", desc: "Explicando o código.", code: `# Comentário de uma linha\n\n"""\nComentário de múltiplas linhas.\nGeralmente usado para documentar\nfunções e classes (Docstrings).\n"""` }
      ]
    },
    {
      category: "Operadores",
      icon: "calculator",
      items: [
        { title: "Aritméticos Básicos", desc: "Soma, subtração, divisão, resto e potência.", code: `x = 5\ny = 2\n\n# +  -  /  (% resto)  (** ou pow potenciação)  (// divisão inteira)\nr1 = x / y \n\nx += 1\ny -= 1\n\n# Nota: Não existe o operador ++ ou -- em python\nprint(f'O valor de x é {x} e y é {y}')` },
        { title: "Lógicos", desc: "Comparações booleanas usando and, or e not.", code: `# Operadores lógicos (and, or, not)\nprint(True and False) # False\nprint(True or False)  # True\nprint(not True)       # False` }
      ]
    },
    {
      category: "Strings e Formatação",
      icon: "hash",
      items: [
        { title: "Formatação de Texto", desc: "Diversas maneiras de misturar texto e variáveis.", code: `x = 5\ny = 2\nr1 = 2.5\n\n# Usando vírgulas\nprint('O resultado de', x, '/', y, '=', r1)\n\n# Usando F-Strings (Python 3.6+)\nprint(f'O resultado de {x}/{y}={r1}')\n\n# Usando .format()\nprint('O resultado de {0}/{1}={2}'.format(x, y, r1))` },
        { title: "Slicing (Fatiamento)", desc: "Extraindo partes de uma string [início:fim:passo].", code: `msg = "Olá, Mundo!"\n\nprint(msg[0:3])   # 'Olá'\nprint(msg[:3])    # 'Olá' (0 é omitido)\nprint(msg[-6:-1]) # 'Mundo'\nprint(msg[::-1])  # '!odnuM ,álO' (Inverte a string)` }
      ]
    },
    {
      category: "Coleções e Listas",
      icon: "code",
      items: [
        { title: "Listas (Arrays)", desc: "Estruturas de dados ordenadas e mutáveis.", code: `lista_frutas = ['Banana', 'Manga', 'Uva']\n\nprint(type(lista_frutas)) # <class 'list'>\n\nprint('Na feira tem:', lista_frutas)\nprint('Prefiro: ' + lista_frutas[1]) # Manga` },
        { title: "Outras Coleções", desc: "Tuplas, Conjuntos e Dicionários.", code: `tupla = (1, 2, 3)       # tuple (imutável)\nconjunto = {1, 2, 3}    # set (valores únicos)\ndic = {"chave": "valor"} # dict (chave/valor)` }
      ]
    },
    {
      category: "Controle de Fluxo",
      icon: "terminal",
      items: [
        { title: "If / Elif / Else", desc: "Tomada de decisão baseada em condições.", code: `hora = 14\n\nif hora < 12:\n    print('Bom Dia')\nelif hora < 18:\n    print('Boa Tarde')\nelse:\n    print('Boa Noite')\n\n# Importante: Não há switch/case (escolha caso) no Python` },
        { title: "Laço For", desc: "Iterando de forma controlada.", code: `print('for: 0 a 5')\nfor x in range(6):\n    print(x) # 0, 1, 2, 3, 4, 5\n\nprint('for: 2 a 10 incrementando 2')\nfor x in range(2, 10, 2):\n    print(x) # 2, 4, 6, 8` },
        { title: "Laço While", desc: "Repetição enquanto uma condição for verdadeira.", code: `print('while')\ni = 1\n\nwhile i < 6:\n    print(i)\n    i += 1\n    \n# Imprime: 1, 2, 3, 4, 5` }
      ]
    },
    {
      category: "Módulos",
      icon: "clock",
      items: [
        { title: "Importando Bibliotecas", desc: "Usando funcionalidades extras (Ex: Datetime).", code: `from datetime import datetime\n\nhora = datetime.now().hour\nminuto = datetime.now().minute\nsegundo = datetime.now().second\n\nprint(f'Hora certa: {hora}:{minuto}:{segundo}')` }
      ]
    },
    {
      category: "Funções",
      icon: "code",
      items: [
        { title: "Definindo Funções", desc: "Organizando código em blocos reutilizáveis.", code: `texto1 = 'Texto Original'\n\ndef exibeTexto():\n    texto1 = 'texto novo'\n    var_interna = 'visivel dentro da funcao'\n    return texto1\n\nprint(exibeTexto()) # texto novo\n\n# print(var_interna) # geraria um erro (escopo local)` },
        { title: "Funções Lambda", desc: "Funções anônimas de uma única linha.", code: `# lambda argumentos: expressão\ndobro = lambda x: x * 2\n\nprint(dobro(5)) # 10` }
      ]
    },
    {
      category: "Classes (POO)",
      icon: "box",
      items: [
        { title: "Criando Classes e Objetos", desc: "Programação Orientada a Objetos em Python.", code: `class Pessoa():\n    nome = 'Fulano'\n    idade = 21\n    altura = 1.7\n    vivo = True\n\nprint(type(Pessoa)) # <class 'type'>\n\nprint('nome:', Pessoa().nome)     # nome: Fulano\nprint('idade:', Pessoa().idade)   # idade: 21\nprint('altura:', Pessoa().altura) # altura: 1.7` }
      ]
    }
  ];
  
  // === SINTAX HIGHLIGHTER ===
  function highlightCode(code) {
    const regex = /("""[\s\S]*?"""|'''[\s\S]*?'''|#.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[a-zA-Z_]\w*\b|\s+|[^\s\w])/g;
    const tokens = code.split(regex).filter(Boolean);
  
    const escapeHtml = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
    const highlighted = tokens.map((token, i) => {
      const safeToken = escapeHtml(token);
      
      if (/^\s+$/.test(token)) return safeToken;
      if (token.startsWith('"""') || token.startsWith("'''") || token.startsWith('#')) return `<span class="text-slate-500 dark:text-slate-400 italic">${safeToken}</span>`;
      if (token.startsWith('"') || token.startsWith("'")) return `<span class="text-yellow-600 dark:text-yellow-300">${safeToken}</span>`;
      if (/^\d+(?:\.\d+)?$/.test(token)) return `<span class="text-orange-600 dark:text-orange-400">${safeToken}</span>`;
      
      if (/^[a-zA-Z_]\w*$/.test(token)) {
        if (/^(def|class|if|elif|else|for|while|try|except|finally|with|as|return|import|from|and|or|not|in|is)$/.test(token)) {
          return `<span class="text-purple-600 dark:text-purple-400 font-medium">${safeToken}</span>`;
        }
        if (/^(True|False|None)$/.test(token)) return `<span class="text-teal-600 dark:text-teal-400 font-medium">${safeToken}</span>`;
        
        let isFunction = false;
        for (let j = i + 1; j < tokens.length; j++) {
          if (/^\s+$/.test(tokens[j])) continue;
          if (tokens[j] === '(') isFunction = true;
          break;
        }
        
        if (isFunction) return `<span class="text-blue-600 dark:text-blue-400">${safeToken}</span>`; 
        return `<span class="text-slate-700 dark:text-slate-200">${safeToken}</span>`; 
      }
      return `<span class="text-slate-500 dark:text-slate-400">${safeToken}</span>`;
    }).join('');
  
    return highlighted;
  }
  
  // === RENDERIZAÇÃO DA INTERFACE ===
  const contentContainer = document.getElementById('content-container');
  const navMenu = document.getElementById('nav-menu');
  const searchInput = document.getElementById('search-input');
  
  function renderApp(data) {
    contentContainer.innerHTML = '';
    
    if (data.length === 0) {
      contentContainer.innerHTML = `
        <div class="text-center py-20 text-slate-500 dark:text-slate-400">
          <i data-lucide="search" class="mx-auto mb-4 opacity-20 w-12 h-12"></i>
          <p class="text-xl">Nenhum resultado encontrado.</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }
  
    data.forEach((category, catIdx) => {
      // Cria a seção
      const sectionHTML = `
        <section id="${category.category.replace(/\s+/g, '-')}" class="scroll-mt-24 mb-12">
          <div class="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            <span class="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400">
              <i data-lucide="${category.icon}" class="w-5 h-5"></i>
            </span>
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100">${category.category}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 items-stretch" id="grid-${catIdx}">
          </div>
        </section>
      `;
      contentContainer.insertAdjacentHTML('beforeend', sectionHTML);
      const grid = document.getElementById(`grid-${catIdx}`);
  
      // Cria os cards de código
      category.items.forEach((item, itemIdx) => {
        const cardId = `card-${catIdx}-${itemIdx}`;
        const cardHTML = `
          <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 flex justify-between items-center">
              <div>
                <h3 class="font-semibold text-slate-800 dark:text-slate-100">${item.title}</h3>
                ${item.desc ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${item.desc}</p>` : ''}
              </div>
              <button onclick="copyCode(this, \`${item.code.replace(/`/g, '\\`')}\`)" class="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg text-slate-600 dark:text-slate-300 transition-colors flex-shrink-0 ml-4" title="Copiar código">
                <i data-lucide="copy" class="w-4 h-4"></i>
              </button>
            </div>
            <div class="p-4 bg-slate-100 dark:bg-slate-900 flex-grow overflow-x-auto">
              <pre class="font-mono text-sm leading-relaxed"><code>${highlightCode(item.code)}</code></pre>
            </div>
          </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
      });
    });
    
    // Renderiza ícones injetados
    lucide.createIcons();
  }
  
  // Renderizar o menu lateral
  function renderMenu() {
    cheatSheetData.forEach(category => {
      const id = category.category.replace(/\s+/g, '-');
      const btnHTML = `
        <a href="#${id}" class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors text-left" onclick="closeSidebar()">
          <span class="text-slate-400 dark:text-slate-500"><i data-lucide="${category.icon}" class="w-4 h-4"></i></span>
          ${category.category}
        </a>
      `;
      navMenu.insertAdjacentHTML('beforeend', btnHTML);
    });
  }
  
  // === LÓGICA DE COPIAR CÓDIGO ===
  window.copyCode = function(buttonElem, codeText) {
    navigator.clipboard.writeText(codeText).then(() => {
      const originalIcon = buttonElem.innerHTML;
      buttonElem.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-green-600 dark:text-green-400"></i>`;
      lucide.createIcons();
      setTimeout(() => {
        buttonElem.innerHTML = originalIcon;
      }, 2000);
    });
  }
  
  // === SISTEMA DE PESQUISA ===
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (!query) {
      renderApp(cheatSheetData);
      return;
    }
  
    const filtered = cheatSheetData.map(category => {
      const filteredItems = category.items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query)
      );
      return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);
  
    renderApp(filtered);
  });
  
  // === TEMA (DARK/LIGHT) ===
  const htmlTag = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  let isDark = true; // Padrão
  
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
      htmlTag.classList.add('dark');
      themeIcon.setAttribute('data-lucide', 'sun');
    } else {
      htmlTag.classList.remove('dark');
      themeIcon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
  });
  
  // === MOBILE MENU ===
  const btnMenu = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  
  function toggleSidebar() {
    const isOpen = !sidebar.classList.contains('-translate-x-full');
    if (isOpen) {
      closeSidebar();
    } else {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
      btnMenu.innerHTML = `<i data-lucide="x"></i>`;
      lucide.createIcons();
    }
  }
  
  window.closeSidebar = function() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    btnMenu.innerHTML = `<i data-lucide="menu"></i>`;
    lucide.createIcons();
  }
  
  btnMenu.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
  
  // === INICIALIZAÇÃO ===
  renderMenu();
  renderApp(cheatSheetData);
  lucide.createIcons();