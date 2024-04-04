// 구조분해 할당 이전
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    },
};
const getCandy = candyMachine.getCandy;
const count = candyMachine.status.count;
