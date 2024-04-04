const sayNode = function () {
    console.log('Node');
};
const es = 'ES';

const oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);