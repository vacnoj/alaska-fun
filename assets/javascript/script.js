$(document).ready(function() {
    var config = {
        apiKey: "AIzaSyDOEXRGtcjW7SSiH6F2IM1Q9dVBl8um8KQ",
        authDomain: "langan-todo.firebaseapp.com",
        databaseURL: "https://langan-todo.firebaseio.com",
        projectId: "langan-todo",
        storageBucket: "",
        messagingSenderId: "728828959237"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var todoArray  = [
        'Passports',
        'North Pole',
        'Air Force Base Eielson',
        'Trampoline Park',
        'Worlds Ice Art (FEB-MAR 2018)',
        'Championships',
        'Denali National Park',
        'Dog Sledding',
        'Snow Surfing',
        'Ice Skating',
        'Snowmobiling',
        'Hot Springs',
        'Ice Fishing',
        'Snow Skiing',
        'Hunting',
        'Arctic Circle',
        'BOSS Program',
        'Bruins vs Vancouver (FEB 17th & 18th 19:00)',
        'Nigeria Falls',
        'Dubai/ Birthday (JAN 1)',
        'Austrailia',
        'Greenland'
    ]

    // var count = 0;

    // for (var i = 0; i < todoArray.length; i++) {
    //     database.ref().push({
    //         todoArray[i]: todoArray[i]
    //     });
    // }
    // todoArray.forEach(function(e) {
    //     database.ref().push({
    //         todoArray: e,
    //         count: count
    //     }); count++;
    // });


    
    $(submit).click(function() {
        
        event.preventDefault();
        let add = $('#addTodo').val().trim();
        if (add.length > 0) {
            $('#addTodo').val('');
            console.log(add);
            // todoArray.push(add);
            // $('#todoList').append(
            //     `<label class="form-check-label">
            //         <input class="form-check-input" type="checkbox" value="">
            //             ${add}
            //     </label><br />`
            // )
        database.ref().push({
            item: add
        });

        } else return;
    });
    
    database.ref().on("child_added", function(childSnapshot) {
        console.log(JSON.stringify(childSnapshot));
        addItem(childSnapshot.val().item);
        // childSnapshot.val().todoArray.forEach(function(e) {
        //     console.log(e);
        //     addItem(e);
        // });
    });

    function addItem(add) {
        $('#todoList').append(
            `<label class="form-check-label">
                <input class="form-check-input" type="checkbox" value="">
                    ${add}
            </label><br />`
        )
    }
});

// add true false to the checkbox values. update database to function accordingly
// if box is checked, move to the right side of the screen. remove from left side. Add headers for done and todo.