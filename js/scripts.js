//business logic
function Contact(firstName, lastName, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.fullInfo = function() {
  return this.firstName + " " + this.lastName + ", " + this.address;
}


// user interface logic
$(document).ready(function() {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();

    var newContact = new Contact($('#first-name-input').val(), $('#last-name-input').val(), $('#address-input').val());

    $('#return-input').append("<li>"+newContact.fullName()+"</li>");

    $('li').last().click(function() {
      $('#showcase').text(newContact.fullInfo());
    })

    $('input').val('')
  });
});
