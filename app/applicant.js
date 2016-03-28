System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Applicant;
    return {
        setters:[],
        execute: function() {
            Applicant = (function () {
                function Applicant(id, firstname, lastname, email, password, telephone, address, city, zipcode) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.email = email;
                    this.password = password;
                    this.telephone = telephone;
                    this.address = address;
                    this.city = city;
                    this.zipcode = zipcode;
                }
                return Applicant;
            }());
            exports_1("Applicant", Applicant);
        }
    }
});
//# sourceMappingURL=applicant.js.map