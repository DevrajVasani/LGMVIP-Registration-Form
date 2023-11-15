var entryCount = 1;

function handleSubmit() {
    // Get form values
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    var skills = [];
    var skillsCheckboxes = document.getElementsByName('skills');
    for (var i = 0; i < skillsCheckboxes.length; i++) {
        if (skillsCheckboxes[i].checked) {
            skills.push(skillsCheckboxes[i].value);
        }
    }

    var gender = document.getElementById('gender').value;

    // Display user data
    var userDataDiv = document.getElementById('userData');
    var entryDiv = document.createElement('div');
    entryDiv.className = 'entry';
    entryDiv.innerHTML =
        "<h2>User Data #" + entryCount + "</h2>" +
        "<table>" +
        "<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Mobile</th><th>Skills</th><th>Gender</th></tr>" +
        "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + mobile + "</td><td>" + skills.join(', ') + "</td><td>" + gender + "</td></tr>" +
        "</table>";
    userDataDiv.appendChild(entryDiv);

    // Clear the form
    document.getElementById('registrationForm').reset
