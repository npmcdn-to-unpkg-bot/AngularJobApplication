System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Applicant;
    return {
        setters:[],
        execute: function() {
            Applicant = (function () {
                function Applicant(id, firstname, lastname, email, telephone, address, city, zipcode, citizen, felon, feloncomment, desiredposition, desiredwage, employers) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.email = email;
                    this.telephone = telephone;
                    this.address = address;
                    this.city = city;
                    this.zipcode = zipcode;
                    this.citizen = citizen;
                    this.felon = felon;
                    this.feloncomment = feloncomment;
                    this.desiredposition = desiredposition;
                    this.desiredwage = desiredwage;
                    this.employers = employers;
                }
                return Applicant;
            }());
            exports_1("Applicant", Applicant);
        }
    }
});
//# sourceMappingURL=applicant.js.map