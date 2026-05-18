grammar Calculator;

// ── REGLAS DE PARSER (minúsculas) ────────────────────────────────────────────

prog
    : stat+ EOF
    ;

stat
    : schedule NEWLINE?    #printSchedule
    | NEWLINE              #blank
    ;

schedule
    : time_field (time_field)*
    ;

time_field
    : predefined           #tfPredefined
    | list                 #tfList
    | step                 #tfStep
    | range                #tfRange
    | wildcard             #tfWildcard
    | value                #tfValue
    ;

value      : NUMBER ;
range      : NUMBER MINUS NUMBER (SLASH NUMBER)? ;
step       : (wildcard | range | value) SLASH NUMBER ;
wildcard   : STAR ;
list       : item (COMMA item)+ ;
item       : range #itemRange
           | value #itemValue
           ;
predefined : PREDEFINED ;

// ── REGLAS DE LEXER (MAYÚSCULAS) ─────────────────────────────────────────────

PREDEFINED : '@yearly' | '@monthly' | '@weekly' | '@daily' | '@hourly' | '@reboot' ;
NUMBER     : [0-9]+ ;
STAR       : '*' ;
MINUS      : '-' ;
SLASH      : '/' ;
COMMA      : ',' ;
NEWLINE    : '\r'? '\n' ;
WS         : [ \t]+ -> skip ;
