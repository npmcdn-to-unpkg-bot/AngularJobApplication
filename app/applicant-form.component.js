System.register(['angular2/core', './applicant'], function(exports_1, context_1) {
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
    var core_1, applicant_1;
    var ApplicantFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (applicant_1_1) {
                applicant_1 = applicant_1_1;
            }],
        execute: function() {
            ApplicantFormComponent = (function () {
                function ApplicantFormComponent() {
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new applicant_1.Applicant(1, "", "", "", "", "", "", "", "");
                    this.submitted = false;
                    // Reset the form with a new applicant AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                }
                ApplicantFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(ApplicantFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                ApplicantFormComponent.prototype.newApplicant = function () {
                    var _this = this;
                    this.model = new applicant_1.Applicant(1, "", "", "", "", "", "", "", "");
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ApplicantFormComponent = __decorate([
                    core_1.Component({
                        selector: 'applicant-form',
                        templateUrl: 'app/applicant-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ApplicantFormComponent);
                return ApplicantFormComponent;
            }());
            exports_1("ApplicantFormComponent", ApplicantFormComponent);
        }
    }
});
//# sourceMappingURL=Applicant-form.component.js.map