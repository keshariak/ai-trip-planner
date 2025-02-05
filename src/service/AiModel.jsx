import { GoogleGenerativeAI } from "@google/generative-ai";




const apiKey = "AIzaSyCmsO6UhnKgKnnUzKe4DwifAFDTE8nN2iI";
// console.log(import.meta.env.GOOGLE_GEMINI_AI_API_KEY);

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
                },
            ],
        },
        {
            role: "model",
            parts: [
                {
                    text: '```json\n{\n  "location": "Las Vegas, NV",\n  "budget": "Cheap",\n  "duration": "3 Days",\n  "travelers": "Couple",\n  "hotels": [\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40 - $80 per night",\n      "hotelImageUrl": "https://example.com/circuscircus.jpg",\n      "geoCoordinates": {\n        "latitude": 36.1262,\n        "longitude": -115.1658\n      },\n      "rating": 3.5,\n      "description": "A budget-friendly option with a classic Vegas feel, featuring the Adventuredome theme park."\n    },\n     {\n      "hotelName": "OYO Hotel and Casino Las Vegas",\n      "address": "115 E Tropicana Ave, Las Vegas, NV 89109",\n       "price": "$35 - $70 per night",\n      "hotelImageUrl": "https://example.com/oyohotel.jpg",\n      "geoCoordinates": {\n        "latitude": 36.0998,\n        "longitude": -115.1718\n      },\n      "rating": 3.2,\n       "description": "Located just off the Strip, offering affordable rooms and a casino."\n    },\n    {\n      "hotelName": "Strat Hotel, Casino & Tower",\n      "address": "2000 S Las Vegas Blvd, Las Vegas, NV 89104",\n      "price": "$50 - $90 per night",\n      "hotelImageUrl": "https://example.com/strathotel.jpg",\n       "geoCoordinates": {\n        "latitude": 36.1493,\n        "longitude": -115.1553\n      },\n      "rating": 3.8,\n      "description": "Offers great views from the tower and slightly off-strip location can be more budget-friendly."\n    }\n     ,\n    {\n      "hotelName": "Excalibur Hotel & Casino",\n      "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$55 - $100 per night",\n      "hotelImageUrl": "https://example.com/excaliburhotel.jpg",\n       "geoCoordinates": {\n        "latitude": 36.0971,\n        "longitude": -115.1745\n      },\n       "rating": 3.7,\n      "description": "A medieval-themed hotel on the Strip, offering a unique experience at a reasonable price."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "theme": "Exploring the Strip",\n      "bestTimeToVisit": "Late afternoon/Evening",\n      "places": [\n          {\n            "placeName": "Bellagio Conservatory & Botanical Gardens",\n            "placeDetails": "A free botanical garden display that changes seasonally with beautiful floral arrangements.",\n            "placeImageUrl": "https://example.com/bellagio_gardens.jpg",\n           "geoCoordinates": {\n              "latitude": 36.1127,\n              "longitude": -115.1743\n            },\n            "ticketPricing": "Free",\n            "rating": 4.7,\n            "travelTime": "15-20 minutes walk from Excalibur"\n          },\n          {\n            "placeName": "Fountains of Bellagio",\n            "placeDetails": "Iconic water show with music that is free to watch",\n             "placeImageUrl": "https://example.com/bellagio_fountains.jpg",\n            "geoCoordinates": {\n              "latitude": 36.1127,\n              "longitude": -115.1743\n            },\n            "ticketPricing": "Free",\n            "rating": 4.8,\n            "travelTime":"Same location with Bellagio Conservatory & Botanical Gardens"\n          },\n        {\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "An outdoor shopping, dining, and entertainment district with a lively atmosphere.",\n           "placeImageUrl": "https://example.com/linqpromenade.jpg",\n          "geoCoordinates": {\n             "latitude": 36.1165,\n              "longitude": -115.1707\n            },\n          "ticketPricing": "Free (individual costs for shops/dining)",\n          "rating": 4.4,\n          "travelTime": "5-10 minutes walk from Bellagio"\n        },\n         {\n            "placeName":"High Roller Observation Wheel",\n             "placeDetails":"Take a ride on the world\'s tallest observation wheel for amazing views of the Las Vegas Strip",\n             "placeImageUrl":"https://example.com/highroller.jpg",\n            "geoCoordinates": {\n              "latitude": 36.1168,\n              "longitude": -115.1709\n            },\n             "ticketPricing": "$25 - $35 per person",\n             "rating":4.5,\n            "travelTime": "Same location with the LINQ Promenade"\n         }\n\n      ]\n    },\n    "day2": {\n      "theme": "Downtown & Fremont Street",\n      "bestTimeToVisit": "Afternoon/Evening",\n      "places": [\n          {\n            "placeName": "Fremont Street Experience",\n             "placeDetails": "A pedestrian mall with a massive LED canopy that hosts light shows.",\n             "placeImageUrl": "https://example.com/fremontstreet.jpg",\n            "geoCoordinates": {\n                "latitude": 36.1699,\n                "longitude": -115.1401\n            },\n            "ticketPricing": "Free",\n            "rating": 4.6,\n            "travelTime": "20-30 minutes drive from the Strip"\n\n          },\n        {\n           "placeName":"Container Park",\n            "placeDetails":"Unique shopping and dining area built from repurposed shipping containers.",\n           "placeImageUrl":"https://example.com/containerpark.jpg",\n           "geoCoordinates": {\n               "latitude": 36.1671,\n              "longitude": -115.1370\n            },\n            "ticketPricing":"Free",\n            "rating":4.3,\n            "travelTime": "5-10 minutes walk from Fremont Street"\n\n        },\n        {\n          "placeName": "Gold and Silver Pawn Shop",\n          "placeDetails": "Famous from the TV show Pawn Stars, you can view the shop and potentially see the stars.",\n            "placeImageUrl": "https://example.com/pawnshop.jpg",\n           "geoCoordinates": {\n             "latitude": 36.1714,\n             "longitude": -115.1439\n            },\n          "ticketPricing": "Free",\n          "rating": 4.2,\n           "travelTime": "10-15 minutes walk from Container Park"\n        }\n      ]\n    },\n    "day3": {\n      "theme": "Relaxation and Scenic Views",\n       "bestTimeToVisit": "Morning",\n       "places": [\n        {\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "A beautiful scenic drive and hiking area with stunning red rock formations.",\n           "placeImageUrl": "https://example.com/redrockcanyon.jpg",\n          "geoCoordinates": {\n             "latitude": 36.1476,\n             "longitude": -115.4155\n            },\n          "ticketPricing": "$15 per vehicle",\n          "rating": 4.8,\n          "travelTime": "30-40 minutes drive from the Strip"\n        },\n        {\n          "placeName": "Seven Magic Mountains",\n          "placeDetails":"Colorful rock sculptures are located in the desert",\n          "placeImageUrl":"https://example.com/sevenmagicmountain.jpg",\n          "geoCoordinates":{\n            "latitude": 35.8877,\n            "longitude": -115.2713\n          },\n          "ticketPricing": "Free",\n          "rating": 4.2,\n          "travelTime": "20-25 minutes drive from Red Rock Canyon"\n\n        },\n         {\n          "placeName": "Explore your Hotel Amenities or Shopping",\n          "placeDetails": "Relax by the pool, explore hotel casinos, or do some souvenir shopping before departing.",\n          "placeImageUrl": "https://example.com/hotelpool.jpg",\n          "geoCoordinates": {\n              "latitude": 36.1262,\n             "longitude": -115.1658\n            },\n          "ticketPricing": "Varies based on activities",\n          "rating": 3.5,\n          "travelTime": "Based on your location"\n\n        }\n\n      ]\n    }\n  }\n}\n```\n',
                },
            ],
        },
    ],
});


