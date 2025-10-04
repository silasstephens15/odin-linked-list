class LinkedList {
  constructor(list) {
    let linkedList = { value: list[0] };
    this.head = linkedList;
    let item = linkedList;
    let total = 1;
    this.tail = item;
    for (let i = 1; i < list.length; i++) {
      this.append(list[i]);
      total++;
    }
    this.size = total;
  }
  Node(value) {
    return { value, next: null, previous: null };
  }
  append(value) {
    const item = this.Node(value);
    this.tail.next = item;
    item.previous = this.tail;
    this.tail = item;
    item.next = null;
  }
  prepend(value) {
    const item = this.Node(value);
    item.next = this.head;
    item.previous = null;
    this.head = item;
  }
}

const list = new LinkedList(["first", "second", "third"]);

list.append("appended");
list.prepend("prepended");
console.log(list.head);
