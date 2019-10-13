/**
 * Given a the info for a lactation room, create a card with all of its information
 * in one place.
 * @param room  A lactation room object object (see data.js)
 */
export const renderLactationRoom = function(room) {
    let img = room.img;
    console.log(room.features);
    let box = `<div class="container box section" id="${room.id}Room"><span><img src="${img}" style="max-width:430px; max-height:300px;"><h1 class="title is-1"}>Lactation Room in ${room.building}</h1></span>`;
    let location = `<div style="background-color: white;"><h3 class="subtitle">Room is on ${room.campusLocation} Campus, in ${room.building} on floor ${room.floor}.</h3><p><em>Address:</em> ${room.address}</p>`;
    let ammenities = `<p><em>Amenitites:</em>`+ makeAmmenities(room.features) +`</p>`;
    // let ammenities = `<p>Amenitites: ${room.features}</p>`;
    let comments = `<br><p><strong>Comments:</strong></p>` + makeComments(room.comments);
    let button = `<button id="${room.id}Button" class="button" style="background-color:black; color: white; margin-top: 10px;">Comment about this Room</button>`;
    let close = `</div>`;
    return box + location + ammenities + comments + button+ close;
};

export const makeComments = function(comments) {
    let results = ``;
    comments.forEach(comment => {
        results = results + `<article class="media" style="background-color: lightgrey; padding: 10px; margin: 3px;">
        <figure class="media-left">
            <p class="image is-64x64">
            <img src="pictures/user.png">
            </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${comment.name}</strong> <small>${comment.time}</small><br> ${comment.message}
            </p>
          </div>
      </article>`;
    });
    return results;
}

export const makeAmmenities = function(ammenities) {
    let results = `<ul style="list-style-type:circle;">`;
    if (ammenities.sink == true) {
        results = results + `<li style="margin-left: 25px;">Sink</li>`;
    }
    if (ammenities.rockingChair == true) {
        results = results + `<li style="margin-left: 25px;">Rocking Chair</li>`;
    }
    if (ammenities.outlet == true) {
        results = results + `<li style="margin-left: 25px;">Electrical Outlet</li>`;
    }
    if (ammenities.fridge == true) {
        results = results + `<li style="margin-left: 25px;">Fridge</li>`;
    }
    if (ammenities.changingStation == true) {
        results = results + `<li style="margin-left: 25px;">Changing Station</li>`;
    }
    results = results + `</ul`;
    return results;
}

export const searchLacationRooms = function(event) {
    event.preventDefault();
    let searchValue = {};
    let $inputs = $(`#searchBar :input`);
    $inputs.each(function() {
        searchValue[this.name] = $(this).val();
    });
}

export const handleAddCommentButton = function(event) {
    
}

export const loadRoomsIntoDOM = function(lactationData) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    let results = [];

    lactationData.forEach(room => {
        let result = renderLactationRoom(room);
        results.push(result);
        // add results to dom
        $root.append(result);
        //set listeners for each added element
        $(`#${room.id}Button`).on("click", null, room, handleAddCommentButton);
    });
    $(`#searchButton`).on("click", searchLacationRooms);
};

$(function() {
    loadRoomsIntoDOM(lactationData);
});