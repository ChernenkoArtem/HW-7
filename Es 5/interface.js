function ListInterface () {
    this.push = function () {};
    this.pop = function () {};
    this.unshift = function() {};
    this.shift = function() {};
    this.sort = function () {};
    this.size = function () {};
    this.toString = function () {};
    this.clearList = function () {};
}

function AList() {
    ListInterface.call(this);
    this.toLinkedList = function () {} ;
    this.collection = [];
    this.length = 0;
}

function LList() {
    this.root = {
        head : null,
        tail : null,
        length :0,
    };
    this.createNode = function(){};
    ListInterface.call(this);
    this.toArrayList = function () {} ;
}