System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var ApplicantService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            ApplicantService = (function () {
                function ApplicantService(_http) {
                    this._http = _http;
                    /*
                    private _applicantsUrl = 'app/applicants.json'; // URL to JSON file
                    */
                    this._applicantsUrl = 'submit.php'; // URL to web api
                }
                /*getApplicantss () {
                  return this.http.get(this._applicantsUrl)
                                  .map(res => <Applicant[]> res.json().data)
                                  .do(data => console.log(data)) // eyeball results in the console
                                  .catch(this.handleError);
                }*/
                ApplicantService.prototype.addApplicant = function (applicant) {
                    var body = "firstname=" + applicant.firstname + "\n    &lastname=" + applicant.lastname + "\n    &email=" + applicant.email + "\n    &telephone=" + applicant.telephone + "\n    &address=" + applicant.address + "\n    &city=" + applicant.city + "\n    &zipcode=" + applicant.zipcode + "\n    &citizen=" + applicant.citizen + "\n    &felon=" + applicant.felon + "\n    &feloncomment=" + applicant.feloncomment + "\n    &desiredposition=" + applicant.desiredposition + "\n    &desiredwage=" + applicant.desiredwage + "\n    &employername1=" + applicant.employers[0].name + "\n    &employerposition1=" + applicant.employers[0].position + "\n    &employerwage1=" + applicant.employers[0].wage + "\n    &employerpermission1=" + applicant.employers[0].permissiontocontact + "\n    &employername2=" + applicant.employers[1].name + "\n    &employerposition2=" + applicant.employers[1].position + "\n    &employerwage2=" + applicant.employers[1].wage + "\n    &employerpermission2=" + applicant.employers[1].permissiontocontact + "\n    &employername3=" + applicant.employers[2].name + "\n    &employerposition3=" + applicant.employers[2].position + "\n    &employerwage3=" + applicant.employers[2].wage + "\n    &employerpermission3=" + applicant.employers[2].permissiontocontact + "\n    ";
                    var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    console.log(body);
                    return this._http.post(this._applicantsUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ApplicantService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ApplicantService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApplicantService);
                return ApplicantService;
            }());
            exports_1("ApplicantService", ApplicantService);
        }
    }
});
//# sourceMappingURL=applicant.service.js.map