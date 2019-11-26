/**
 * 
 * This file contains all the pulled data from our datasource, as well as a mock
 * layout of what our data will look like when stored.
 * 
 */

const lactationData = [{
    id: 1,
    campusLocation: "North Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/1.png",
    address: "201 S Columbia St, Chapel Hill, NC 27599",
    lat: 35.90967,
    lng: -79.052628,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/2.png",
    address: "333 S Columbia St, Chapel Hill, NC 27514",
    lat: 35.905590,
    lng: -79.052570,
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
    campusLocation: "North Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/3.png",
    address: "133 W Franklin St suite 100, Chapel Hill, NC 27516",
    lat: 35.910470,
    lng: -79.057550,
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
    campusLocation: "Central Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/4.png",
    address: "133 W Franklin St suite 100, Chapel Hill, NC 27516",
    lat: 35.910469,
    lng: -79.057549,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/5.png",
    address: "Marsico Hall, Chapel Hill, NC 27599",
    lat: 35.908810,
    lng: -79.049100,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/6.png",
    address: "Carrington Hall, S Columbia St, Chapel Hill, NC 27599",
    lat: 35.902970,
    lng: -79.056140,
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
    campusLocation: "Off Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/7.png",
    address: "Kennon Cheek/Rebecca Clark Bldg, Chapel Hill, NC 27516",
    lat: 35.825100,
    lng: -79.107120,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/8.png",
    address: "FedEx Global Education Center, 301 Pittsboro St, Chapel Hill, NC 27516",
    lat: 35.907110,
    lng: -79.054240,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/9.png",
    address: "385 S Columbia St, Chapel Hill, NC 27599",
    lat: 35.902970,
    lng: -79.056140,
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
    campusLocation: "Off Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/10.png",
    address: "100 Friday Center Dr, Chapel Hill, NC 27599",
    lat: 35.899130,
    lng: -79.012910,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/11.png",
    address: "120 Mason Farm Rd #7264, Chapel Hill, NC 27514",
    lat: 35.901330,
    lng: -79.054340,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/12.png",
    address: "Genome Sciences Building, Chapel Hill, NC 27514",
    lat: 35.935140,
    lng: -79.044170,
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
    campusLocation: "Off Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/13.png",
    address: "103 Airport Dr, Chapel Hill, NC 27599",
    lat: 35.932388,
    lng: -79.056633,
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
    campusLocation: "North Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/14.png",
    address: "145 E Cameron Ave, Chapel Hill, NC 27514",
    lat: 35.912590,
    lng: -79.053200,
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
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/15.png",
    address: "116 Manning Drive, Chapel Hill, NC 27599",
    lat: 35.903630,
    lng: -79.053440,
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
},{
    id: 16,
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/16.png",
    address: "McColl Building, Chapel Hill, NC 27514",
    lat: 35.935140,
    lng: -79.044170,
    building: "McColl Building (Kenan-Flagler Business School)",
    floor: 4,
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
        name: "Mary",
        time: new Date(2019, 10, 10),
        message: "Great location, very secluded"
    }, {
        name: "Elizabeth",
        time: new Date(2019, 10, 10),
        message: "Highly recommend, great space"
    }]
},{
    id: 17,
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/17.png",
    address: "111 Mason Farm Rd, Chapel Hill, NC 27599",
    lat: 35.898560,
    lng: -79.049130,
    building: "Medical Biomolecular Research Building (MBRB)",
    floor: 2,
    numRooms: 1,
    public: false,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: true,
        changingStation: true
    },
    comments: [{
        name: "Brooklyn",
        time: new Date(2019, 10, 10),
        message: "Very well kept up with!"
    }, {
        name: "Kenna",
        time: new Date(2019, 10, 10),
        message: "Will definitely be coming back, very nice!"
    }]
},{
    id: 18,
    campusLocation: "Off Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/18.png",
    address: "100 Old Mason Farm Rd, Chapel Hill, NC 27517",
    lat: 35.899920,
    lng: -79.032810,
    building: "NC Botanical Garden",
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
        name: "Catherine",
        time: new Date(2019, 10, 10),
        message: "Great location, very great amenities!"
    }, {
        name: "Leslie",
        time: new Date(2019, 10, 10),
        message: "The fridge was left cluttered."
    }]
},{
    id: 19,
    campusLocation: "Off Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/19.png",
    address: "208 W Franklin St, Chapel Hill, NC 27516",
    lat: 35.912240,
    lng: -79.059020,
    building: "Office of University Development",
    floor: 4,
    numRooms: 1,
    public: false,
    features: {
        sink: false,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Amanda",
        time: new Date(2019, 10, 10),
        message: "Very easy to reach from campus!"
    }, {
        name: "Felicia",
        time: new Date(2019, 10, 10),
        message: "My go-to location"
    }]
},{
    id: 20,
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/20.png",
    address: "Rosenau Hall, Chapel Hill, NC 27516",
    lat: 35.922470,
    lng: -79.110220,
    building: "Rosenau Hall (School of Public Health)",
    floor: 2,
    numRooms: 1,
    public: false,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: false
    },
    comments: [{
        name: "Rose",
        time: new Date(2019, 10, 10),
        message: "Contact Brent, super easy to get access."
    }, {
        name: "Beth",
        time: new Date(2019, 10, 10),
        message: "Perfect place!"
    }]
},{
    id: 21,
    campusLocation: "Central Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/21.png",
    address: "150 South Campus Rd, Chapel Hill, NC 27599",
    lat: 35.909820,
    lng: -79.047230,
    building: "Sonja Haynes Stone Center",
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
        name: "Lana",
        time: new Date(2019, 10, 10),
        message: "Love the ladies in the Women's Center"
    }, {
        name: "Kara",
        time: new Date(2019, 10, 10),
        message: "Excellent space!"
    }]
},{
    id: 22,
    campusLocation: "Central Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/22.png",
    address: "207 South Campus Rd, Chapel Hill, NC 27599",
    lat: 35.909820,
    lng: -79.047230,
    building: "Student Stores",
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
        name: "Katie",
        time: new Date(2019, 10, 10),
        message: "Very secluded and comfortable!"
    }, {
        name: "Maddie",
        time: new Date(2019, 10, 10),
        message: "Convenient to get access."
    }]
},{
    id: 23,
    campusLocation: "Central Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/23.png",
    address: "325 Pittsboro St, Chapel Hill, NC 27516",
    lat: 35.907700,
    lng: -79.054730,
    building: "Tate-Turner-Kuralt",
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
        name: "Bailey",
        time: new Date(2019, 10, 10),
        message: "I go there every other day and it's great!"
    }, {
        name: "Maddie",
        time: new Date(2019, 10, 10),
        message: "Definitely appreciate this location"
    }]
},{
    id: 24,
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/24.png",
    address: "211 Branson St, Chapel Hill, NC 27514",
    lat: 35.900300,
    lng: -79.048390,
    building: "(Carolina) Veterans Resource Center",
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
        name: "Marissa",
        time: new Date(2019, 10, 10),
        message: "Excellent space"
    }, {
        name: "Lela",
        time: new Date(2019, 10, 10),
        message: "Great space for me and my baby!"
    }]
},{
    id: 25,
    campusLocation: "South Campus", //enums: North Campus, South Campus, Central Campus, Off Campus
    img: "pictures/25.png",
    address: "110 South Campus Road, Chapel Hill, NC 27514",
    lat: 35.907400,
    lng: -79.052070,
    building: "Wilson Hall",
    floor: 0,
    numRooms: 1,
    public: true,
    features: {
        sink: true,
        rockingChair: false,
        outlet: true,
        fridge: false,
        changingStation: true
    },
    comments: [{
        name: "Kendall",
        time: new Date(2019, 10, 10),
        message: "Felt very comfortable in this space, definitely recommend"
    }, {
        name: "Anna",
        time: new Date(2019, 10, 10),
        message: "Open to all!"
    }]
}];