// Business logic for AddressBook-------------
function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts----------------
funtion Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

// Prototypes allow you to add new methods to object constructors
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


/*
var addressBook = new AddressBook(); // create an AddressBook object
var contact = new Contact("Ada", "Lovelace", "503-555-0100"); // create a new Contact object with a firstName of "Ada", under the variable name contact
var contact2 = new Contact("Grace", "Hopper", "503-555-0199"); // create another Contact object with a firstName of "Grace", under the variable name contact2
addressBook.addContact(contact); // add the first Contact object to our AddressBook, using our new addContact() method
addressBook.addContact(contact2); // add the second Contact object using the same new method

// see the contents of our AddressBook
addressBook.contacts;

// see the specific contents of an item in AddressBook
addressBook.contacts[0].firstName;

*/
