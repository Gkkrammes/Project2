
$(document).ready(function() {
    let guestName = $('#guest');
    let guestRequest = $('#request');
    let eventID = $('#id');
    let planner = $('#planner');
    let password = $('#passwordInput')

    $(document).on('click', '#planner', function() {
        $('#guestInput').hide();
        $('#creatorInput').show();
    });

    $(document).on('click', '#submitRsvpButton', function(event){
        let guestData = {
            eventId: eventID.val(),
            guest: guestName.val().trim(),
            request: guestRequest.val().trim()
        };
        createguest(guestData);
    });

    function createguest(guestData) {
        $.post('/api/request', guestData)
        .then(function(data) {
            location.reload();
        });
    }

 // Code below here is for login
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");

    $(document).on('click', '#login', function(event) {
      event.preventDefault();
      var userData = {
        eventId: 1,   /////////////////////Just making this one to get through this//////////
        loginEmail: emailInput.val().trim(),
        loginPassword: passwordInput.val().trim()
      };
      if (!userData.loginEmail || !userData.loginPassword) {
        return;
      }
      loginUser(userData);
      emailInput.val("");
      passwordInput.val("");
    });

    function loginUser(userData) {
      console.log(userData);
      $.post('/api/login', {
        email: userData.loginEmail,
        password: userData.loginPassword
      }).then(function() {
          const url = "/finalize/" + 1;
          console.log(url);
          window.location.replace(url);
        })
        .catch(function(err) {
          console.log(err);
        });
    };

});