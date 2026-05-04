import type {Visitor} from "../patterns/visitor/Visitor"

export interface Elemento {
    accept(visitor: Visitor):void;
}