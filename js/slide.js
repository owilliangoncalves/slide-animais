export default class Slide{
  constructor(slide, wrapper){
    this.slide = document.querySelector (slide);
    this.wrapper = document.querySelector (wrapper)
  }
  onStart(event){
    event.preventDefault()
    console.log(event)
    this.wrapper.addEventListener('mousedown', this.onMove);

  }

  onMove(event){

  }

  onEnd(event){

  }

  addSlideEvents(){
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);

  }

  bindEvents(){
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);

  }

  intit(){
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}