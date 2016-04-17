import {Component, ViewChild, Output, Input, EventEmitter} from 'angular2/core'

const CAPTCHA_URL = 'https://www.google.com/recaptcha/api.js?onload=__onloadCaptcha&render=explicit'



export class CaptchaService {
  widget:any;
  id = null;
  loaded = null;
  constructor(){
   this.widget = document.getElementById('recaptcha');
   let node = document.createElement('script');
    node.src = CAPTCHA_URL;
    node.id = 'recaptcha'
    this.loaded = new Promise(resolve => {
       window.__onloadCaptcha = () => {
         resolve(window['grecaptcha']);
       }
      document.body.appendChild(node);
    });
  
  
  }
  render(el, sitekey){
    return this.loaded.then(grecaptcha =>{
      if(this.widget == null) { 
       return grecaptcha.render(el, {sitekey});
    } else {
      return null;
    }
    });
  }
  reset(){
    this.loaded.then(grecaptcha => {
      grecaptcha.reset(this.id);
    });
  }
  init(el, sitekey){
    if(this.id === null){
      this.render(el, sitekey).then(id => {
        this.id = id;
      });
    }
    else {
      this.reset();
    }
  }
}

@Component({
  selector: 'recaptcha-widget',
  template: '<div #captcha></div>',
  providers: []
})
export class ReCaptcha {
  @Output() verified = new EventEmitter();
  @Input() sitekey: string;
  @ViewChild('captcha') captchaEl;
  constructor(private captchaService:CaptchaService){
    
  }
  loadCaptcha(){
    this.captchaService.init(this.captchaEl.nativeElement, this.sitekey);
  }
  captchaCallback(key){
    this.verified.emit(key);
  }
  ngAfterViewInit(){
    this.loadCaptcha()
  }
  ngOnDestroy(){
    
  }
}