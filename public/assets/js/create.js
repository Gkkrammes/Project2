$(document).ready(function() {
    let creatorEmail = $('#creatorEmail');
    let creatorPassword = $('#creatorPassword');
    let partyName = $('#partyName');
    let partyDescription = $('#partyDescription');
    let userPassword = $('#userPassword');

    $(document).on('button', function(event) {
        event.preventDefault();
        let partyData = {
            name: partyName.val().trim(),
            description: partyDescription.val().trim(),
            creatorEmail: creatorEmail.val().trim(),
            creatorPassword: creatorPassword.val().trim(),
            userPassword: userPassword.val().trim(),
        };
        createParty(partyData)
    };

    function createParty(partyData) {
        $.post('api/parties', partyData)
            .then(getParties);
    };

    function createPartyRow(partyData) {
        var newTr = $("<tr>");
        newTr.data('party', partyData:name);
        return newTr;
    }

    function renderPartyList(rows) {
        partyList.prepend(rows);
    }

    function getParties() {
        $.get("/api/parties", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
              rowsToAdd.push(createPartyRow(data[i]));
            }
            renderPartyList(rowsToAdd);
            nameInput.val("");
          });
    }



});