import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {

    constructor() {
        super();
        this.cronParts = [];  // acumula cada campo reconocido del schedule
    }

    // ── prog: visita todas las sentencias ────────────────────────────────────
    visitProg(ctx) {
        return this.visitChildren(ctx);
    }

    // ── stat: imprime el resultado de cada schedule ───────────────────────────
    visitPrintSchedule(ctx) {
        this.cronParts = [];  // reinicio para cada línea
        const cronStr = this.visit(ctx.schedule());
        console.log(`\nTraducción a JavaScript:`);
        console.log(`const cronString = '${cronStr}';`);
        console.log(`\nEjecución:`);
        console.log(`cronString => "${cronStr}"`);
        return 0;
    }

    visitBlank(ctx) {
        return 0;
    }

    // ── schedule: junta todos los time_field separados por espacio ───────────
    visitSchedule(ctx) {
        const parts = ctx.time_field().map(tf => this.visit(tf));
        return parts.join(' ');
    }

    // ── time_field: cada alternativa delega a su regla ───────────────────────
    visitTfValue(ctx)      { return this.visit(ctx.value()); }
    visitTfRange(ctx)      { return this.visit(ctx.range()); }
    visitTfStep(ctx)       { return this.visit(ctx.step()); }
    visitTfWildcard(ctx)   { return this.visit(ctx.wildcard()); }
    visitTfList(ctx)       { return this.visit(ctx.list()); }
    visitTfPredefined(ctx) { return this.visit(ctx.predefined()); }

    // ── reglas base ──────────────────────────────────────────────────────────
    visitValue(ctx) {
        // obtengo el lexema del NUMBER y lo retorno como string
        return ctx.NUMBER().getText();
    }

    visitWildcard(ctx) {
        return '*';
    }

    visitPredefined(ctx) {
        return ctx.PREDEFINED().getText();
    }

    visitRange(ctx) {
        const nums = ctx.NUMBER();
        // range puede ser NUM-NUM  o  NUM-NUM/NUM (con step incluido)
        if (nums.length === 3)
            return `${nums[0].getText()}-${nums[1].getText()}/${nums[2].getText()}`;
        return `${nums[0].getText()}-${nums[1].getText()}`;
    }

    visitStep(ctx) {
        // la base puede ser wildcard, range o value, seguido de /NUMBER
        let base;
        if (ctx.wildcard())    base = this.visit(ctx.wildcard());
        else if (ctx.range())  base = this.visit(ctx.range());
        else                   base = this.visit(ctx.value());
        return `${base}/${ctx.NUMBER().getText()}`;
    }

    visitList(ctx) {
        // lista de items separados por coma
        return ctx.item().map(item => this.visit(item)).join(',');
    }

    visitItemRange(ctx) { return this.visit(ctx.range()); }
    visitItemValue(ctx) { return this.visit(ctx.value()); }
}
