
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

    $(document).on('click', '#passwordSubmit', function(list) {
        $.get(`/rsvp/${eventID.val()}/${password.val()}`);
    });

    $(document).on('click', '#submitRsvpButton', function(event){
        console.log('button hit');
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
});

