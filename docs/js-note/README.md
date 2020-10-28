## javascript类型
### 为何有的编程要求使用void 0 代替undefined
在javascript中 undefined是一个变量，并非关键字。我们可以对undefined进行赋值

```js

(function(){
    var undefined = 1
    console.log(undefined)
})()
console.log(undefined)

```
任何变量在被赋值前，他的值都是undefined，但由上可看出 全局变量的undefined的writable属性为false，是不可更改的；但作为局部变量的undefined仍可以被赋值，因此，我们还是无法正确检测一个变量是否被赋值。

void可以对任意表达式进行求值，还会忽视计算结果返回undefined，而且void是不能被重写的

```js

var str
console.log(str === void 0)

```
之所以选择void 0， 是因为void 0 是表达式中最短的， 可以节省字节。

### 字符串是否有最大长度？
string最大长度是2^53-1， 实际上，最大长度是受字符串的编码长度影响的。 string针对的是UTF16编码

