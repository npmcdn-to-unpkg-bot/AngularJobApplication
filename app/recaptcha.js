System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CAPTCHA_URL, CaptchaService, ReCaptcha;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CAPTCHA_URL = 'https://www.google.com/recaptcha/api.js?onload=__onloadCaptcha&render=explicit';
            CaptchaService = (function () {
                function CaptchaService() {
                    this.id = null;
                    this.loaded = null;
                    this.widget = document.getElementById('recaptcha');
                    var node = document.createElement('script');
                    node.src = CAPTCHA_URL;
                    node.id = 'recaptcha';
                    this.loaded = new Promise(function (resolve) {
                        window.__onloadCaptcha = function () {
                            resolve(window['grecaptcha']);
                        };
                        document.body.appendChild(node);
                    });
                }
                CaptchaService.prototype.render = function (el, sitekey) {
                    var _this = this;
                    return this.loaded.then(function (grecaptcha) {
                        if (_this.widget == null) {
                            return grecaptcha.render(el, { sitekey: sitekey });
                        }
                        else {
                            return null;
                        }
                    });
                };
                CaptchaService.prototype.reset = function () {
                    var _this = this;
                    this.loaded.then(function (grecaptcha) {
                        grecaptcha.reset(_this.id);
                    });
                };
                CaptchaService.prototype.init = function (el, sitekey) {
                    var _this = this;
                    if (this.id === null) {
                        this.render(el, sitekey).then(function (id) {
                            _this.id = id;
                        });
                    }
                    else {
                        this.reset();
                    }
                };
                return CaptchaService;
            }());
            exports_1("CaptchaService", CaptchaService);
            ReCaptcha = (function () {
                function ReCaptcha(captchaService) {
                    this.captchaService = captchaService;
                    this.verified = new core_1.EventEmitter();
                }
                ReCaptcha.prototype.loadCaptcha = function () {
                    this.captchaService.init(this.captchaEl.nativeElement, this.sitekey);
                };
                ReCaptcha.prototype.captchaCallback = function (key) {
                    this.verified.emit(key);
                };
                ReCaptcha.prototype.ngAfterViewInit = function () {
                    this.loadCaptcha();
                };
                ReCaptcha.prototype.ngOnDestroy = function () {
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ReCaptcha.prototype, "verified", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ReCaptcha.prototype, "sitekey", void 0);
                __decorate([
                    core_1.ViewChild('captcha'), 
                    __metadata('design:type', Object)
                ], ReCaptcha.prototype, "captchaEl", void 0);
                ReCaptcha = __decorate([
                    core_1.Component({
                        selector: 'recaptcha-widget',
                        template: '<div #captcha></div>',
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [CaptchaService])
                ], ReCaptcha);
                return ReCaptcha;
            }());
            exports_1("ReCaptcha", ReCaptcha);
        }
    }
});
//# sourceMappingURL=recaptcha.js.map