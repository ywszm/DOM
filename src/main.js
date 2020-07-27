const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.before(test, div);

const div3 = dom.create(`<div id="parent">div3</div>`);
dom.wrap(test, div3);

dom.attr(test, "title", "I am title");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);

dom.text(test, "我更新了");
console.log(dom.text(test));

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");

dom.class.add(test, "red");
dom.class.remove(test, "red");
console.log(dom.class.has(test, "blue"));

const fn = () => {
  console.log("点击了");
};

dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
const testDiv2 = dom.find("#test2")[0];
console.log(testDiv);
console.log(dom.find(".red", testDiv2)[0]);

const s2 = dom.find("#e2")[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

console.log(dom.index(t2));
