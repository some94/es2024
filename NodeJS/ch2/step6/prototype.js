const Human = function(type) {
    this.type = type || 'human';
};

Human.isHuman = function(human) {
    return human instanceof Human;
};

Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};

const DongHwi = function(type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

DongHwi.prototype = Object.create(Human.prototype);
DongHwi.prototype.constructor = DongHwi;
DongHwi.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
};

const oldDongHwi = new DongHwi('human', 'DongHwi', 'Kim');
Human.isHuman(oldDongHwi);