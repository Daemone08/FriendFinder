// BOILERPLATE api routing FROM "HOT RESTAURANT" modified:
// BOILERPLATE api routing FROM "HOT RESTAURANT" modified:
// BOILERPLATE api routing FROM "HOT RESTAURANT" modified:


// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the friendData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // req.body is available since we're using the body-parser middleware
        // add data to the API for future comparisons
        friendsData.push(req.body);

        // HERE IS WHERE THE Request.BODY IS COMPARED TO THE EXISTING API PEOPLE
        // THEN DATA OF THE CLOSEST MATCH IS EXTRACTED

        // AS A RESPONSE SEND THE CLOSEST MATCH DATA
        res.send(// CLOSEST MATCH DATA)
        )
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    //   app.post("/api/clear", function() {
    //     // Empty out the arrays of data
    //     friendsData = [];

    // //     console.log(friendsData);
    //   });

};

// BOILERPLATE api routing FROM "HOT RESTAURANT" END.
// BOILERPLATE api routing FROM "HOT RESTAURANT" END.
// BOILERPLATE api routing FROM "HOT RESTAURANT" END.