$(document).ready(function() {
    let guestName = $('#guestName');
    let guestRequest = $('#guestRequest');
    let eventID = datavalues.ID;   ///I think this is correct for the ID of the event

    $(document).on('click', '#submitRsvpButton', function(event){
        let guestData = {
            eventID = eventID;
            guestName: guestName.val().trim(),
            guestRequest = guestRequest.val().trim()
        };
        createguest(guestData);
    });

    function createguest(guestData) {
        $.post('/api/guest', guestData) {
        };
});