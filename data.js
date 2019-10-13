/**
 * 
 * This file contains all the pulled data from our datasource, as well as a mock
 * layout of what our data will look like when stored.
 * 
 */

const lactationData = [{
    id: 1,
    campusLocation: "North", //enums: north, south, central, off
    img: "pictures/1.png",
    address: "201 S Columbia St, Chapel Hill, NC 27599",
    building: "Fred Brooks",
    floor: 2,
    numRooms: 1,
    public: true,
    features: {
        sink: true,
        rockingChair: true,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Cassidy",
        time: new Date(2019, 10, 10),
        message: "Great building, discrete location and clean room."
    }]
}, {
    id: 2,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/2.png",
    address: "333 S Columbia St, Chapel Hill, NC 27514",
    building: "MacNider Hall",
    floor: 1,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Jessica",
        time: new Date(2019, 10, 10),
        message: "Room was fine."
    }]
}, {
    id: 3,
    campusLocation: "North", //enums: north, south, central, off
    img: "pictures/3.png",
    address: "133 W Franklin St suite 100, Chapel Hill, NC 27516",
    building: "Carolina Square",
    floor: 2,
    numRooms: 3,
    public: false,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Abby",
        time: new Date(2019, 10, 10),
        message: "Nice location. Ask front desk staff for directions."
    }]
}, {
    id: 4,
    campusLocation: "Central", //enums: north, south, central, off
    img: "pictures/4.png",
    address: "133 W Franklin St suite 100, Chapel Hill, NC 27516",
    building: "Carolina Union",
    floor: 3,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: true,
        outlet: true,
        fridge: false,
        changingStation: true
    },
    comments: [{
        name: "KMP",
        time: new Date(2019, 10, 10),
        message: "Had a nice rocking chair."
    }]
}, {
    id: 5,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/5.png",
    address: "Marsico HallChapel Hill, NC 27599",
    building: "Marsico Hall",
    floor: 1,
    numRooms: 1,
    public: true,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: true,
        changingStation: false
    },
    comments: [{
        name: "Sneha",
        time: new Date(2019, 10, 10),
        message: "Privacy curtain provided; not my favorite on campus"
    }]
}, {
    id: 6,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/6.png",
    address: "Carrington Hall, S Columbia St, Chapel Hill, NC 27599",
    building: "Carrington Hall",
    floor: 4,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: true,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Bruya",
        time: new Date(2019, 10, 10),
        message: "Comfy chair, relaxing environment."
    }]
}, {
    id: 7,
    campusLocation: "Off", //enums: north, south, central, off
    img: "pictures/7.png",
    address: "Kennon Cheek/Rebecca Clark Bldg, Chapel Hill, NC 27516",
    building: "Cheek-Clark Building",
    floor: 1,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Becca",
        time: new Date(2019, 10, 10),
        message: "Needs to be cleaned!"
    }]
}, {
    id: 8,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/8.png",
    address: "FedEx Global Education Center, 301 Pittsboro St, Chapel Hill, NC 27516",
    building: "FedEx Global Education Center",
    floor: 3,
    numRooms: 1,
    public: true,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Priyanka",
        time: new Date(2019, 10, 10),
        message: "Front desk staff really helpful!"
    }]
}, {
    id: 9,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/9.png",
    address: "385 S Columbia St, Chapel Hill, NC 27599",
    building: "First Dental Building",
    floor: 3,
    numRooms: 6,
    public: true,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: true,
        changingStation: false
    },
    comments: [{
        name: "Cynthia",
        time: new Date(2019, 10, 10),
        message: "Users from outside school of dentistry: avoid times 12:30-2:30!"
    }]
}, {
    id: 10,
    campusLocation: "Off", //enums: north, south, central, off
    img: "pictures/10.png",
    address: "100 Friday Center Dr, Chapel Hill, NC 27599",
    building: "Friday Center",
    floor: 1,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Mariana",
        time: new Date(2019, 10, 10),
        message: "Get access to the room via the front desk."
    }]
}, {
    id: 11,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/11.png",
    address: "120 Mason Farm Rd #7264, Chapel Hill, NC 27514",
    building: "Genetic Medicine Building",
    floor: 1,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Leah",
        time: new Date(2019, 10, 10),
        message: "Needs to be cleaned."
    }]
}, {
    id: 12,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/12.png",
    address: "Genome Sciences Building, Chapel Hill, NC 27514",
    building: "Genome Sciences Building",
    floor: 2,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Ledo",
        time: new Date(2019, 10, 10),
        message: "Convenient, quiet location"
    }]
}, {
    id: 13,
    campusLocation: "Off", //enums: north, south, central, off
    img: "pictures/13.png",
    address: "103 Airport Dr, Chapel Hill, NC 27599",
    building: "Giles Horney Building",
    floor: 1,
    numRooms: 1,
    public: true,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Gina",
        time: new Date(2019, 10, 10),
        message: "Guest access, go to Suite 102E"
    }]
}, {
    id: 14,
    campusLocation: "North", //enums: north, south, central, off
    img: "pictures/14.png",
    address: "145 E Cameron Ave, Chapel Hill, NC 27514",
    building: "Hill Hall",
    floor: 2,
    numRooms: 1,
    public: true,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Tyler",
        time: new Date(2019, 10, 10),
        message: "Key in room 105"
    }]
}, {
    id: 15,
    campusLocation: "South", //enums: north, south, central, off
    img: "pictures/15.png",
    address: "Mary Ellen Jones BuildingChapel Hill, NC 27599",
    building: "Mary Ellen Jones Building",
    floor: 3,
    numRooms: 1,
    public: true,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Yasemine",
        time: new Date(2019, 10, 10),
        message: "Enter through women's showers; very private"
    }, {
        name: "Maddie",
        time: new Date(2019, 10, 10),
        message: "Comfy room, outlet avaiable"
    }]
}];