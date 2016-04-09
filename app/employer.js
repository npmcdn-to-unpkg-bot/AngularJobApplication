System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employer;
    return {
        setters:[],
        execute: function() {
            Employer = (function () {
                function Employer(id, name, position, wage, permissiontocontact) {
                    this.id = id;
                    this.name = name;
                    this.position = position;
                    this.wage = wage;
                    this.permissiontocontact = permissiontocontact;
                }
                return Employer;
            }());
            exports_1("Employer", Employer);
        }
    }
});
//# sourceMappingURL=employer.js.map