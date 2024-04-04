const relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        const that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
// logFriends의 this(Object)와 forEach function의 this(global)는 다르다.
// 때문에 that이라는 중간 변수를 이용해서 logFriends의 this를 전달한다.

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
// 화살표함수의 this는 부모의 this를 그대로 물려받는다.