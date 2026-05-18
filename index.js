import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input.txt en forma sincrónica
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("No se encontró input.txt");
        process.exit(1);
    }

    // Proceso la entrada con el analizador
    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);
    let tree = parser.prog();

    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");

        // Árbol de análisis sintáctico en formato texto
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Tabla de lexemas y tokens
        const inputStream2 = CharStreams.fromString(input);
        const lexer2 = new CalculatorLexer(inputStream2);
        lexer2.removeErrorListeners();
        const tokens = lexer2.getAllTokens();
        const TOKEN_NAMES = { 1:'PREDEFINED', 2:'NUMBER', 3:'STAR', 4:'MINUS', 5:'SLASH', 6:'COMMA', 7:'NEWLINE' };

        console.log("\nTabla de lexemas y tokens:");
        console.log("  N°  │ Lexema       │ Token");
        console.log("  ────┼──────────────┼─────────────");
        tokens.forEach((tok, i) => {
            if (tok.type === -1) return;
            const nombre = TOKEN_NAMES[tok.type] ?? `T_${tok.type}`;
            const lex = (tok.text === '\n' ? '\\n' : tok.text).padEnd(12);
            console.log(`  ${String(i+1).padEnd(4)}│ ${lex} │ ${nombre}`);
        });

        // Visitor para interpretar y traducir a JavaScript
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);
    }
}

main();
