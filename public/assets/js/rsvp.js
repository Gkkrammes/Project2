$(document).ready(function() {
    let guestName = $('#guest');
    let guestRequest = $('#request');
    let eventID = $('#id');

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