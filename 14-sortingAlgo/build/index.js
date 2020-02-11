"use strict";
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]){
    //     this.collection = collection;
    // }     //EQUIVALENT TO//
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        //descrututring
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHandside = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHandside;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([11, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
