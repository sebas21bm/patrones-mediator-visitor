import type {Visitor} from "../patterns/visitor/Visitor.js"

export interface Elemento {
    accept(visitor: Visitor):void;
}