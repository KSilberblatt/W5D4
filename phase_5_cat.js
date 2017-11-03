const Cat = class {
  constructor(owner, name){
    this.owner = owner;
    this.name = name;
  }
};


Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
};

Cat.prototype.meow = function(){
  return 'Meow';
};
