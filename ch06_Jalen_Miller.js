// Jalen Miller
// Chapter 6

// Problem #1 - Groups

class Group {
    constructor(){
      this.element = [];
    }
    add(val){
      if (!this.has(val)) {
        this.element.push(val);
      }
    }
    delete(val){
      this.element = this.element.filter(v => v !== val);
    }
    has(val){
      return this.element.includes(val);
    }
    static from(collection) {
      let group = new Group;
      for (let val of collection) {
        group.add(val);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(22));
  console.log(group.has(10));
