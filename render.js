/**
 * Given a the info for a lactation room, create a card with all of its information
 * in one place.
 * @param room  A lactation room object object (see data.js)
 */
export const renderLactationRoom = function(room) {
    let img = room.img;
    let box = `<div class="container box section" id="${room.id}Room"><span><img src="${img}" style="max-width:430px; max-height:300px;"><h1 class="title is-1"}>Lactation Room in ${room.building}</h1></span>`;
    let location = `<div style="background-color: white;"><h3 class="subtitle">Room is on ${room.campusLocation} Campus, in ${room.building} on floor ${room.floor}.</h3><p><em>Address:</em> ${room.address}</p>`;
    let ammenities = `<p><em>Amenitites:</em>`+ makeAmmenities(room.features) +`</p>`;
    let comments = `<br><p><strong>Comments:</strong></p>` + makeComments(room.comments, room) + `<div id="addingComments${room.id}"></div>`;
    // TODO add a button for get directions that will tie in map api
    let button = `<button id="${room.id}Button" class="button" style="background-color:black; color: white; margin-top: 10px;">Comment about this Room</button>`;
    let dir_button = `<button id="${room.id}Directions" class="button" style="background-color:black; color: white; margin-top: 10px;">Get directions to this Room</button>`;
    let close = `</div>`;
    return box + location + ammenities + comments + button + dir_button + close;
};

export const makeComments = function(comments, room) {
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
    //TODO: see info on bulma on how to create this UI https://bulma.io/documentation/layout/media-object/
    const $comments = $('#addingComments'+event.data.id);
    let commentAddHtml = `
    <article class="media" style="background-color: lightgrey; padding: 10px; margin: 3px;" id="commentCode${event.data.id}">
    <div class="media-content">
        <div class="field">
        <p class="control" id="${event.data.id}CommentForm">
            <textarea class="textarea" placeholder="Add a comment..." name="commentText"></textarea>
        </p>
        </div>
        <nav class="level">
        <div class="level-left">
            <div class="level-item">
            <a class="button is-info" id="${event.data.id}CommentSubmit">Submit</a>
            </div>
            <div class="level-item">
            <a class="button is-info" id="${event.data.id}CommentCancel">Cancel</a>
            </div>
        </div>
        </nav>
    </div></article>`;
    $comments.append(commentAddHtml);
    $(`#${event.data.id}CommentCancel`).on("click", null, event.data, handleCancelCommentButton);
    $(`#${event.data.id}CommentSubmit`).on("click", null, event.data, handleSubmitCommentButton);
}

export const handleGetDirectionsButton = function(event) {
    console.log("directions button pressed");
    console.log(event.data);
    let address = event.data.address;
    // google api
}

export const handleCancelCommentButton = function(event) {
    let commentCode = document.getElementById('commentCode'+event.data.id);
    commentCode.remove();
}

export const handleSubmitCommentButton = function(event) {
    let room = event.data;
    let values = {};
    let $inputs = $(`#${event.data.id}CommentForm :input`);
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    let originalRoom = lactationData[room.id - 1];
    let numOfComments = originalRoom.comments.length;
    originalRoom.comments[numOfComments] = {
        name: "",
        time: new Date(),
        message: values.commentText
    };
    let newComment = []; 
    newComment[0] = originalRoom.comments[numOfComments];
    let $comments = $('#addingComments'+event.data.id);
    $comments.replaceWith(makeComments(newComment, event.data));
    //BUG: comment button after adding a comment doesn't work anymore
    //BUG: need to fix the name portion to come from user's info
    $(`#${event.data.id}Button`).on("click", null, room, handleAddCommentButton);
}

export const loadRoomsIntoDOM = function(lactationData) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    let results = [];

    //TODO, either here or in index.html, add a sign in button; when not signed in shouldn't be able to add a comment

    lactationData.forEach(room => {
        let result = renderLactationRoom(room);
        results.push(result);
        // add results to dom
        $root.append(result);
        //set listeners for each added element
        $(`#${room.id}Button`).on("click", null, room, handleAddCommentButton);
        $(`#${room.id}Directions`).on("click", null, room, handleGetDirectionsButton);
    });
    $(`#searchButton`).on("click", searchLacationRooms);
};

$(function() {
    loadRoomsIntoDOM(lactationData);
});