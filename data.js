/**
 * 
 * This file contains all the pulled data from our datasource, as well as a mock
 * layout of what our data will look like when stored.
 * 
 */

const lactationData = [{
    id: 1,
    campusLocation: "North", //enums: north, south, central
    img: "pictures/1.png",
    address: "201 S Columbia St, Chapel Hill, NC 27599",
    building: "Sitterson",
    floor: 2,
    numRooms: 1,
    features: {
        sink: true,
        couch: true,
        outlet: true,
        fridge: false
    },
    comments: [{
        name: "cassidy",
        time: new Date(2019, 10, 10),
        message: "put something here"
    }, {
        name: "jessica",
        time: new Date(2019, 10, 10),
        message: "put something here"
    }]
}];