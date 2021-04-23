class Rectangle{
  constructor(options){
    this.himq = options.himq
    this.bardzrutyun = options.bardzrutyun
    this.koxm = options.koxm
  }
  makeres(){
    const makeres = this.himq * this.bardzrutyun / 2; 
    document.write(`Makeresy = ${makeres} </br>`);
  }
  paragic(){
    const paragic = this.himq + this.bardzrutyun + this.koxm; 
    document.write(`Paragicy = ${paragic}`);
  }
}
let himq = +prompt('greq himqi chapy',0);
let bardzrutyun = +prompt('greq bardzrutyan chapy',0);
let koxm = +prompt('greq koxmi chapy',0);

const uxxankyan = new Rectangle({himq: himq, bardzrutyun: bardzrutyun, koxm: koxm});


uxxankyan.makeres();
uxxankyan.paragic();