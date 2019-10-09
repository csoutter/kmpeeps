/**
 * Given a the info for a lactation room, create a card with all of its information
 * in one place.
 * @param room  A lactation room object object (see data.js)
 */
export const renderLactationRoom = function(room) {
    let img = room.img;
    let comments = room.comments;
    let box = `<div class="container box section" id="${room.id}Room"><span><img src="${img}"><h1 class="title is-1"}>Lactation Room in ${room.building}</h1></span>`;
    let location = `<div style="background-color: white;"><h3 class="subtitle">Room is on ${room.campusLocation} Campus, in ${room.building} on floor ${room.floor}.</h3><p>${room.address}</p>`;
    let ammenitiesAndComments = `<p>Amenitites: ${room.amenitites}</p><br><p>${room.comments}</p></div>`;
    let button = `<button id="${room.id}Button" class="button" style="background-color:black; color: white; margin-top: 10px;">Comment about this Room</button>`;
    let close = `</div>`;
    return box + location + ammenitiesAndComments + button+ close;
};

export const searchLacationRooms = function(event) {
    event.preventDefault();
    let searchValue = {};
    let $inputs = $(`#searchBar :input`);
    $inputs.each(function() {
        searchValue[this.name] = $(this).val();
    });
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