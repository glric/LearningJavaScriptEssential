let UserRole = "Enrolled Member";
let AuthorizationStatus;
let AddOnServices;

switch (UserRole) {
    case "Employee":
        UserRole = "Employee";
        AuthorizationStatus = "Full Dietary Services";
        AddOnServices = "No Add-on Services avaliable";
        break;
    case "Enrolled Member":
        UserRole = "Enrolled Member";
        AuthorizationStatus = "Full Dietary Service";
        AddOnServices = "One-on-one interaction with a dietician;"
        break;
    case "Subscriber":
        UserRole = "Subscriber";
        AuthorizationStatus = "Partial Dietary Services";
        AddOnServices = "No Add-on Services avaliable";
        break;
    case "Non-Subscriber":
        UserRole = "Non-Subscriber";
        AuthorizationStatus = "Not authorized. Please contact your administrator to enroll the program.";
        AddOnServices = "No Add-on Services avaliable. Please contact your administrator to enroll the program.";
}
console.log("Authorization status:", AuthorizationStatus);
console.log("Add-on Services status:", AddOnServices);