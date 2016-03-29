System.register(['angular2/core', 'angular2/http', './applicant', './applicant.service'], function(exports_1, context_1) {
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
    var core_1, http_1, applicant_1, applicant_service_1;
    var ApplicantFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (applicant_1_1) {
                applicant_1 = applicant_1_1;
            },
            function (applicant_service_1_1) {
                applicant_service_1 = applicant_service_1_1;
            }],
        execute: function() {
            ApplicantFormComponent = (function () {
                function ApplicantFormComponent(_applicantService) {
                    this._applicantService = _applicantService;
                    this.model = new applicant_1.Applicant(1, "", "", "", "", "", "", "", "");
                    this.submitted = false;
                    // Reset the form with a new applicant AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                }
                ApplicantFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this._applicantService.addApplicant(this.model.firstname, this.model.lastname, this.model.email, this.model.password, this.model.telephone, this.model.address, this.model.city, this.model.zipcode)
                        .subscribe(function (applicant) { return _this.model; }, function (error) { return _this.errorMessage = error; });
                    console.log(this.errorMessage);
                };
                ApplicantFormComponent.prototype.ngOnInit = function () { };
                ApplicantFormComponent.prototype.newApplicant = function () {
                    var _this = this;
                    this.model = new applicant_1.Applicant(1, "", "", "", "", "", "", "", "");
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ApplicantFormComponent = __decorate([
                    core_1.Component({
                        selector: 'applicant-form',
                        templateUrl: 'app/applicant-form.component.html',
                        providers: [http_1.HTTP_PROVIDERS,
                            applicant_service_1.ApplicantService]
                    }), 
                    __metadata('design:paramtypes', [applicant_service_1.ApplicantService])
                ], ApplicantFormComponent);
                return ApplicantFormComponent;
            }());
            exports_1("ApplicantFormComponent", ApplicantFormComponent);
        }
    }
});
//# sourceMappingURL=applicant-form.component.js.map