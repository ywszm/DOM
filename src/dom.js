window.dom = {
  //创建节点
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  //在节点后面插入节点
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  //在节点前面插入节点
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  //新增子节点
  append(parent, node) {
    parent.appendChild(node);
  },
  //新增父亲节点
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },
  //删除节点
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  //删除节点的所有子节点
  empty(node) {
    const { childNodes } = node; // const childNodes = node.childNodes
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(firstChild));
      x = node.firstChild;
    }
  },
  //修改属性
  attr(node, name, value) {
    // 重载
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  //修改文本内容
  text(node, string) {
    // 适配
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerHTML = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },

  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  // 修改style属性
  style(node, name, value) {
    if (arguments.length === 3) {
      //dom.style()
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(div, {color: 'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  //添加class
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  //添加onclick事件
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  //删除onclick事件
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  //通过元素名，获取整个标签
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  //找到父亲节点
  parent(node) {
    return node.parentNode;
  },
  //找到子节点
  children(node) {
    return node.children;
  },
  //找到兄弟节点
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  //返回下一个节点
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  //返回上一个节点
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  //遍历所有节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  //获取元素排第几
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
