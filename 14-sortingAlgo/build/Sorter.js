"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
//abstract class wil no longer be able to be instantiated directly
//abstract class can only be used as a parent class (extends) 
//abstract classes can contain methods that don't exist yet
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        //descrututring
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//type guard for Array, Date.. or any other construction function.
//if (this.collection instanceof Array) {
//type guard for Number, String, Boolean, Symbol only
//if(typeof this.collection ==='string'){
