// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,8,84,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,12,
0,25,1,0,1,0,1,1,1,1,3,1,32,8,1,1,1,3,1,35,8,1,1,2,1,2,5,2,39,8,2,10,2,12,
2,42,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,50,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
3,5,59,8,5,1,6,1,6,1,6,3,6,64,8,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,4,8,74,
8,8,11,8,12,8,75,1,9,1,9,3,9,80,8,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,
14,16,18,20,0,0,86,0,23,1,0,0,0,2,34,1,0,0,0,4,36,1,0,0,0,6,49,1,0,0,0,8,
51,1,0,0,0,10,53,1,0,0,0,12,63,1,0,0,0,14,68,1,0,0,0,16,70,1,0,0,0,18,79,
1,0,0,0,20,81,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,25,1,0,0,0,25,23,1,
0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,0,29,31,3,4,2,
0,30,32,5,7,0,0,31,30,1,0,0,0,31,32,1,0,0,0,32,35,1,0,0,0,33,35,5,7,0,0,
34,29,1,0,0,0,34,33,1,0,0,0,35,3,1,0,0,0,36,40,3,6,3,0,37,39,3,6,3,0,38,
37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,5,1,0,0,0,42,40,
1,0,0,0,43,50,3,20,10,0,44,50,3,16,8,0,45,50,3,12,6,0,46,50,3,10,5,0,47,
50,3,14,7,0,48,50,3,8,4,0,49,43,1,0,0,0,49,44,1,0,0,0,49,45,1,0,0,0,49,46,
1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,7,1,0,0,0,51,52,5,2,0,0,52,9,1,0,
0,0,53,54,5,2,0,0,54,55,5,4,0,0,55,58,5,2,0,0,56,57,5,5,0,0,57,59,5,2,0,
0,58,56,1,0,0,0,58,59,1,0,0,0,59,11,1,0,0,0,60,64,3,14,7,0,61,64,3,10,5,
0,62,64,3,8,4,0,63,60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,65,1,0,0,0,
65,66,5,5,0,0,66,67,5,2,0,0,67,13,1,0,0,0,68,69,5,3,0,0,69,15,1,0,0,0,70,
73,3,18,9,0,71,72,5,6,0,0,72,74,3,18,9,0,73,71,1,0,0,0,74,75,1,0,0,0,75,
73,1,0,0,0,75,76,1,0,0,0,76,17,1,0,0,0,77,80,3,10,5,0,78,80,3,8,4,0,79,77,
1,0,0,0,79,78,1,0,0,0,80,19,1,0,0,0,81,82,5,1,0,0,82,21,1,0,0,0,9,25,31,
34,40,49,58,63,75,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, null, null, "'*'", "'-'", "'/'", "','" ];
    static symbolicNames = [ null, "PREDEFINED", "NUMBER", "STAR", "MINUS", 
                             "SLASH", "COMMA", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "stat", "schedule", "time_field", "value", 
                         "range", "step", "wildcard", "list", "item", "predefined" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.stat();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 142) !== 0));
	        this.state = 27;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_stat);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	            localctx = new PrintScheduleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.schedule();
	            this.state = 31;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 30;
	                this.match(CalculatorParser.NEWLINE);

	            }
	            break;
	        case 7:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.match(CalculatorParser.NEWLINE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	schedule() {
	    let localctx = new ScheduleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_schedule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.time_field();
	        this.state = 40;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 37;
	                this.time_field(); 
	            }
	            this.state = 42;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	time_field() {
	    let localctx = new Time_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_time_field);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TfPredefinedContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.predefined();
	            break;

	        case 2:
	            localctx = new TfListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.list();
	            break;

	        case 3:
	            localctx = new TfStepContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.step();
	            break;

	        case 4:
	            localctx = new TfRangeContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.range();
	            break;

	        case 5:
	            localctx = new TfWildcardContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
	            this.wildcard();
	            break;

	        case 6:
	            localctx = new TfValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 48;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(CalculatorParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(CalculatorParser.NUMBER);
	        this.state = 54;
	        this.match(CalculatorParser.MINUS);
	        this.state = 55;
	        this.match(CalculatorParser.NUMBER);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 56;
	            this.match(CalculatorParser.SLASH);
	            this.state = 57;
	            this.match(CalculatorParser.NUMBER);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_step);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 60;
	            this.wildcard();
	            break;

	        case 2:
	            this.state = 61;
	            this.range();
	            break;

	        case 3:
	            this.state = 62;
	            this.value();
	            break;

	        }
	        this.state = 65;
	        this.match(CalculatorParser.SLASH);
	        this.state = 66;
	        this.match(CalculatorParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(CalculatorParser.STAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.item();
	        this.state = 73; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 71;
	            this.match(CalculatorParser.COMMA);
	            this.state = 72;
	            this.item();
	            this.state = 75; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_item);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ItemRangeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.range();
	            break;

	        case 2:
	            localctx = new ItemValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predefined() {
	    let localctx = new PredefinedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_predefined);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(CalculatorParser.PREDEFINED);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.PREDEFINED = 1;
CalculatorParser.NUMBER = 2;
CalculatorParser.STAR = 3;
CalculatorParser.MINUS = 4;
CalculatorParser.SLASH = 5;
CalculatorParser.COMMA = 6;
CalculatorParser.NEWLINE = 7;
CalculatorParser.WS = 8;

CalculatorParser.RULE_prog = 0;
CalculatorParser.RULE_stat = 1;
CalculatorParser.RULE_schedule = 2;
CalculatorParser.RULE_time_field = 3;
CalculatorParser.RULE_value = 4;
CalculatorParser.RULE_range = 5;
CalculatorParser.RULE_step = 6;
CalculatorParser.RULE_wildcard = 7;
CalculatorParser.RULE_list = 8;
CalculatorParser.RULE_item = 9;
CalculatorParser.RULE_predefined = 10;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlankContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(CalculatorParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.BlankContext = BlankContext;

class PrintScheduleContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	schedule() {
	    return this.getTypedRuleContext(ScheduleContext,0);
	};

	NEWLINE() {
	    return this.getToken(CalculatorParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrintSchedule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.PrintScheduleContext = PrintScheduleContext;

class ScheduleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_schedule;
    }

	time_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Time_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Time_fieldContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSchedule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Time_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_time_field;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TfPredefinedContext extends Time_fieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	predefined() {
	    return this.getTypedRuleContext(PredefinedContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTfPredefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TfPredefinedContext = TfPredefinedContext;

class TfListContext extends Time_fieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTfList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TfListContext = TfListContext;

class TfValueContext extends Time_fieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTfValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TfValueContext = TfValueContext;

class TfWildcardContext extends Time_fieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTfWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TfWildcardContext = TfWildcardContext;

class TfStepContext extends Time_fieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	step() {
	    return this.getTypedRuleContext(StepContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTfStep(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TfStepContext = TfStepContext;

class TfRangeContext extends Time_fieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTfRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.TfRangeContext = TfRangeContext;

class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_value;
    }

	NUMBER() {
	    return this.getToken(CalculatorParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_range;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.NUMBER);
	    } else {
	        return this.getToken(CalculatorParser.NUMBER, i);
	    }
	};


	MINUS() {
	    return this.getToken(CalculatorParser.MINUS, 0);
	};

	SLASH() {
	    return this.getToken(CalculatorParser.SLASH, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_step;
    }

	SLASH() {
	    return this.getToken(CalculatorParser.SLASH, 0);
	};

	NUMBER() {
	    return this.getToken(CalculatorParser.NUMBER, 0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitStep(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_wildcard;
    }

	STAR() {
	    return this.getToken(CalculatorParser.STAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.COMMA);
	    } else {
	        return this.getToken(CalculatorParser.COMMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_item;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ItemValueContext extends ItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitItemValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.ItemValueContext = ItemValueContext;

class ItemRangeContext extends ItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitItemRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.ItemRangeContext = ItemRangeContext;

class PredefinedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_predefined;
    }

	PREDEFINED() {
	    return this.getToken(CalculatorParser.PREDEFINED, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPredefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgContext = ProgContext; 
CalculatorParser.StatContext = StatContext; 
CalculatorParser.ScheduleContext = ScheduleContext; 
CalculatorParser.Time_fieldContext = Time_fieldContext; 
CalculatorParser.ValueContext = ValueContext; 
CalculatorParser.RangeContext = RangeContext; 
CalculatorParser.StepContext = StepContext; 
CalculatorParser.WildcardContext = WildcardContext; 
CalculatorParser.ListContext = ListContext; 
CalculatorParser.ItemContext = ItemContext; 
CalculatorParser.PredefinedContext = PredefinedContext; 
