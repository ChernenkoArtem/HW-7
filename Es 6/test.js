describe('Array list', function () {
    beforeEach(function () {
        aList.clearList();
    });

    it('Have key value index of array, appeal arrayList[0] , exp fist value of our obj', function () {
        const exp = 1;
        aList.push(1);
        const act = aList.collection[0];

        assert.equal(exp, act);
    });

    describe('Push method', function () {

        it('We write a new method push to our aList, this method accept value and creates a new kay-value ' +
            'like at a classic array', function () {
            const exp = 1;
            aList.push(1);
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 2;
            aList.push(1);
            aList.push(2);
            const act = aList.collection[1];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 3;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            const act = aList.collection[2];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 4;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            const act = aList.collection[3];

            assert.equal(exp, act);
        });

        /*it('Try cause method push with 2 or more arg', function () {
            const exp = false;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            const act = aList.push(4, 2);
            assert.equal(exp, act);
        });*/

        /*it('Try cause method push without  arg', function () {
            const exp = false;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            const act = aList.push();
            assert.equal(exp, act);
        });*/

        it('We go to use method push 3 more times', function () {
            const exp = 7;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.push(5);
            aList.push(6);
            aList.push(7);
            const act = aList.collection[6];

            assert.equal(exp, act)
        });

        it('We go to use method push more times, and we push + 2 const with null ', function () {
            const a = null;
            const b = null;
            const c = 7;
            const exp = 7;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.push(a);
            aList.push(b);
            aList.push(c);
            const act = aList.collection[6];

            assert.equal(exp, act)
        })
    });

    describe('Size method', function () {

        it('We create new method Size to get a new last index and zise of array Have' +
            ' already 0,1 and 2 index of array index on our aList, ' +
            'go to method getIndex and exp return 3', function () {
            const exp = 3;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            const act = aList.size();

            assert.equal(exp, act)
        });

        /*it('Try cause method size with arg', function () {
            const exp = false;
            const arg = 1;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            const act = aList.size(arg);
            assert.equal(exp, act)
        })*/
    });

    describe('Pop method', function () {

        it('Create method pop to delete a last kay-value in our aList', function () {
            const exp = 6;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.push(5);
            aList.push(6);
            aList.push(7);
            aList.pop();
            const act = aList.size();

            assert.equal(exp, act)
        });

        it('Pop more', function () {
            const exp = 5;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.push(5);
            aList.push(6);
            aList.push(7);
            aList.pop();
            aList.pop();
            const act = aList.size();

            assert.equal(exp, act)
        });

        it('Pop more', function () {
            const exp = 4;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.push(5);
            aList.push(6);
            aList.push(7);
            aList.pop();
            aList.pop();
            aList.pop();
            const act = aList.size();

            assert.equal(exp, act)
        });

        /*it('Try cause method pop with arg', function () {
            const exp = false;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            const act = aList.pop(1);
            assert.equal(exp, act);
        });*/

        /*it('Try cause method pop to aList whithout kay=value', function () {
            const exp = false;
            const act = aList.pop();
            assert.equal(exp, act)
        })*/
    });

    describe('unshift method', function () {

        it('create method unshift to add a new elem to start of our aList', function () {
            const exp = 1;
            aList.unshift(1);
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 2;
            aList.unshift(1);
            aList.unshift(2);
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 3;
            aList.unshift(1);
            aList.unshift(2);
            aList.unshift(3);
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 4;
            aList.unshift(1);
            aList.unshift(2);
            aList.unshift(3);
            aList.unshift(4);
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('use method unshift more times to add a new null elem to start of our aList', function () {
            const exp = null;
            aList.unshift(1);
            aList.unshift(2);
            aList.unshift(3);
            aList.unshift(null);
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        /*it('Try cause method unshift with 2 or more arg', function () {
            const exp = false;
            aList.unshift(1);
            aList.unshift(2);
            aList.unshift(3);
            aList.unshift(4);
            const act = aList.unshift(4, 2);
            assert.equal(exp, act);
        });*/

        /*it('Try cause method unshift without arg', function () {
            const exp = false;
            aList.unshift(1);
            aList.unshift(2);
            aList.unshift(3);
            aList.unshift(4);
            const act = aList.unshift();
            assert.equal(exp, act);
        })*/
    });

    describe('shift method', function () {

        it('create method shift to delete a first elem of our aList', function () {
            const exp = 3;
            aList.unshift(1);
            aList.unshift(2);
            aList.unshift(3);
            aList.unshift(4);
            aList.shift();
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('shift more', function () {
            const exp = 3;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.shift();
            aList.shift();
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        it('shift more', function () {
            const exp = 4;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.shift();
            aList.shift();
            aList.shift();
            const act = aList.collection[0];

            assert.equal(exp, act);
        });

        /*it('Try cause method shift with arg', function () {
            const exp = false;
            const arg = 1;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            const act = aList.shift(arg);
            assert.equal(exp, act);
        });*/

        /*it('Try cause method shift to aList whithout kay=value', function () {
            const exp = false;
            const act = aList.shift();
            assert.equal(exp, act)
        })*/
    });

    describe('toString method', function () {

        it('create method toString to return the value of the keys of the object as a string', function () {
            const exp = '1,2,3,4,5';
            aList.push(1);
            aList.push(2);
            aList.push(3);
            aList.push(4);
            aList.push(5);
            const act = aList.toString();

            assert.equal(exp, act);
        });



    describe('create method toLinkedList to create new the same object linkedLost inside ' +
        'our aList ', function () {
        /*it('try cause mrthod toLinkedList with arg', function () {
            const exp = false;
            const arg = 1;
            aList.push(1);
            aList.push(2);
            aList.push(3);
            const act = aList.toLinkedList(arg);
            assert.equal(exp, act)
        });*/

        /*it('Try cause method toLinkedList to aList whithout kay=value', function () {
            const exp = false;
            const act = aList.toLinkedList();
            assert.equal(exp, act)
        });*/

    });

    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            aList.push(3);
            aList.push(2);
            aList.push(12);
            aList.sort();
            const act = aList.collection[0];

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 2;
            aList.push(3);
            aList.push(2);
            aList.push(12);
            aList.sort();
            const act = aList.collection[1];

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 3;
            aList.push(3);
            aList.push(2);
            aList.push(12);
            aList.sort();
            const act = aList.collection[2];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 1;
            aList.push(3);
            aList.push(2);
            aList.push(12);
            aList.push(1);
            aList.sort(function commit(a, b){return a-b});
            const act = aList.collection[0];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 3;
            aList.push(3);
            aList.push(2);
            aList.push(12);
            aList.push(1);
            aList.sort(function (a, b){return a-b});
            const act = aList.collection[2];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 12;
            aList.push(3);
            aList.push(2);
            aList.push(12);
            aList.push(1);
            aList.sort(function (a, b){return a-b});
            const act = aList.collection[3];

            assert.equal(exp, act)
        });

    })
});

describe('LinkedList', function () {
    beforeEach(function () {
        lList.clearList();
    });

    describe('Push method', function () {

        it('Create a lList push method to create new Noda in the end of our lListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 2;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            console.log(lList);
            const act = lList.root.head.next.el;

            assert.equal(exp, act)
        });

        it('do push same times but another exp', function () {
            const exp = 3;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            const act = lList.root.head.next.next.el;

            assert.equal(exp, act)
        });

        /*it('Try use method push() without arg', function () {
            const exp = false;
            const act = lList.push();
            assert.equal(exp, act)
        });
        it('Try use method push() with to or more arg', function () {
            const exp = false;
            const a = 1;
            const b = 2;
            const act = lList.push(a, b);
            assert.equal(exp, act)
        })*/
    });

    describe('size method', function () {

        it('Create size method to see which size in our lList',function () {
            const exp = 3;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            const act = lList.size();

            assert.equal(exp, act)
        });

        it('use method size wihout Noda in our list', function () {
            const exp = 0;
            const act = lList.size();

            assert.equal(exp, act)
        });

        /*it('try use size method with arg',function () {
            const exp = false;
            const a = 1;
            lList.push(1);
            lList.push(1);
            const act = lList.size(a);
            assert.equal(exp, act)
        })*/
    });

    describe('Unshift method', function () {

        it('Create a lList unshift method to create new Noda in the end of our lListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 3;
            lList.unshift(1);
            lList.unshift(2);
            lList.unshift(3);
            const act = lList.root.head.el;

            assert.equal(exp, act)
        });

        it('do unshift same times but another exp', function () {
            const exp = 5;
            lList.unshift(1);
            lList.unshift(2);
            lList.unshift(3);
            lList.unshift(4);
            lList.unshift(5);
            lList.unshift(6);
            const act = lList.root.head.next.el;

            assert.equal(exp, act)
        });


    });

    describe('Pop method', function () {

        it('Create method pop to delete a last Noda in our lList', function () {
            const exp = 2;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            lList.pop();
            const act = lList.size();

            assert.equal(exp, act)
        });

        it('do pop some more times but another exp', function () {
            const exp = 3;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            lList.push(4);
            lList.push(5);
            lList.push(6);
            lList.pop();
            lList.pop();
            lList.pop();
            const act = lList.size();

            assert.equal(exp, act)
        });

    });

    describe('Shift method', function () {

        it('Create method shift to delete a first Nods in our lList', function () {
            const exp = 2;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            lList.shift();
            const act = lList.size();

            assert.equal(exp, act)
        });

        it('do shift some more times but another exp', function () {
            const exp = 3;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            lList.push(4);
            lList.push(5);
            lList.push(6);
            lList.shift();
            lList.shift();
            lList.shift();
            const act = lList.size();

            assert.equal(exp, act)
        });

    });

    describe('create method toaList to create new the same object aList inside ' +
        'our lList ', function () {
        /*it('try cause method aList with arg', function () {
            const exp = false;
            const arg = 1;
            lList.push(1);
            lList.push(2);
            lList.push(3);
            const act = lList.toArrayList(arg);
            assert.equal(exp, act)
        });*/

        it('Try cause method toaList to aList whithout Nods', function () {
            const exp = false;
            const act = lList.toAlist();

            assert.equal(exp, act)
        });

    });

    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            lList.push(3);
            lList.push(2);
            lList.push(12);
            lList.sort();
            const act = lList.root.head.el;

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 2;
            lList.push(3);
            lList.push(2);
            lList.push(12);
            lList.sort();
            const act = lList.root.head.next.el;

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 3;
            lList.push(3);
            lList.push(2);
            lList.push(12);
            lList.sort();
            const act = lList.root.head.next.next.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 1;
            lList.push(3);
            lList.push(2);
            lList.push(12);
            lList.push(1);
            lList.sort(function commit(a, b){return a-b});
            const act = lList.root.head.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 3;
            lList.push(3);
            lList.push(2);
            lList.push(12);
            lList.push(1);
            lList.sort(function commit(a, b){return a-b});
            const act = lList.root.head.next.next.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 12;
            lList.push(3);
            lList.push(2);
            lList.push(12);
            lList.push(1);
            lList.sort(function commit(a, b){return a-b});
            const act = lList.root.head.next.next.next.el;

            assert.equal(exp, act)
        });

        /*it('Sort method take arg not a function',function () {
            const exp = false;
            const arg = 1;
            const act = lList.sort(arg);
            assert.equal(exp, act)
        })*/
    });
});
});