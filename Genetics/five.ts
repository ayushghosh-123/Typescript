// "hey" - it is not string . It is string literal. 

function Hanuman<T>(ayan: T, amritta: T): T{
    return "hey" as T;
}

Hanuman<string>("hey", "hello")