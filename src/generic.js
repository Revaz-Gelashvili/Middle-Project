"use strict";
function entity(args) {
    return args;
}
entity(1);
entity("Hello");
const entity2 = (args) => {
    return args;
};
entity2(1);
entity2("Hello");
class Channel {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
new Channel("RED Group");
new Channel(2);
const pair1 = {
    key: "1",
    value: 1,
};
function getNameLength(entity) {
    return entity.length;
}
getNameLength("hello");
getNameLength([0, 1, 2, 3]);
