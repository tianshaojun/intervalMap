//代码片段一
function foo() {
    setTimeout(foo, 0);
}
foo();


//代码片段二
function foo() {
    return Promise.resolve().then(foo);
}