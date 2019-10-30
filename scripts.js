// Business logic for AddressBook-------------
function AddressBook() {
  this.contacts = []
}

// Business Logic for Contacts----------------
funtion Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
