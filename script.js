function clickHandler() {
for (var i = 0; i < 500; i++) {
console.log(i);
$("body").append('<input onclick="clickHandler()" type="button" value="Click me!" />')
}
}
