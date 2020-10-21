$(document).ready(function() {
    let creatorEmail = $('#creatorEmail');
    let creatorPassword = $('#creatorPassword');
    let name = $('#name');
    let description = $('#description');
    let userPassword = $('#userPassword');

    $(document).on('button', function(event) {
        event.preventDefault();
        let partyData = {
            name: name.val().trim(),
            description: description.val().trim(),
            creatorEmail: creatorEmail.val().trim(),
            creatorPassword: creatorPassword.val().trim(),
            userPassword: userPassword.val().trim(),
        };
        createParty(partyData);
    });

    function createParty(partyData) {
        $.post('api/event', partyData)
            .then(getParties);
    };

/*     function createPartyRow(name) {
        var newTr = $("<tr>");
        newTr.data('party', name);
        return newTr;
    };

    function renderPartyList(rows) {
        partyList.prepend(rows);
    };

    function getParties() {
        $.get("/", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
              rowsToAdd.push(createPartyRow(data[i].name));
            }
            renderPartyList(rowsToAdd);
            nameInput.val("");
          });
    }; */



});