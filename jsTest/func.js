// 方法调用模式
let myObject = {
    value: 0,
    crement: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1
    }
}
myObject.crement(1)
console.log(myObject.value)
myObject.crement()
console.log(myObject.value)

// 函数调用模式
myObject.double = function () {
    const that = this;
    let helper = function () {
        console.log(that.value += that.value)
    }
    helper()
}
myObject.double()

var foo = function () {
    var a = 3, b = 5;
    var bar = function () {
        var b = 7, c = 11;
        a += b + c;
        console.log(a, b, c)
    }
    bar()

}
foo()