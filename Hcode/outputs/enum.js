"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 6] = "ADMIN";
    Permission[Permission["USER"] = 7] = "USER";
    Permission[Permission["READONLY"] = 8] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
