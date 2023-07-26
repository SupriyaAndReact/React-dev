import React from "react";
import ReactDOM from "react-dom/client";

/*
Food app
-Header
-> Logo
-> Nav Links -> Home,About Us, Contact Us,Cart
-Body
-> Search Bar
-> Restaurant Container - Image, name, Cuisine, Price per person
- Footer
-> Copyright
-> Links
-> address
-> Contact
*/

const resList= [
    {
      "info": {
        "id": "373005",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
        "locality": "Alpha 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "373005",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
               "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "281782",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-25 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-alpha-2-greater-noida-noida-1-373005",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "78041",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Gamma Shopping Mall",
        "areaName": "Gamma 1",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "78041",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-26 02:00:00",
          "opened": true
        },
        "badges": { },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-gamma-shopping-mall-gamma-1-noida-1-78041",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "303249",
        "name": "Theobroma",
        "cloudinaryImageId": "oj0xd8ih7gb2ci0vhb8j",
        "locality": "Alpha 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "303249",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "1040",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": { },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/theobroma-alpha-2-greater-noida-noida-1-303249",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "61855",
        "name": "Sagar Ratna",
        "cloudinaryImageId": "893b0ca9c0125060646b1eda4fd9563b",
        "locality": "Omega 1",
        "areaName": "Omega 1",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "61855",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "793",
        "avgRatingString": "3.8",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-25 22:45:00",
          "opened": true
        },
        "badges": { },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sagar-ratna-omega-1-noida-1-61855",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "239611",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "UPSIDC",
        "areaName": "Surajpur Site 4",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "239611",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4500
        },
        "parentId": "21809",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-26 01:00:00",
          "opened": true
        },
        "badges": { },
        "select": true,
        "isOpen": true,
        "aggregatedDiscountInfoV2": { },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-upsidc-surajpur-site-4-noida-1-239611",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "373005",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
        "locality": "Alpha 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "373005",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
               "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "281782",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-25 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-alpha-2-greater-noida-noida-1-373005",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "78041",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Gamma Shopping Mall",
        "areaName": "Gamma 1",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "78041",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-26 02:00:00",
          "opened": true
        },
        "badges": { },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-gamma-shopping-mall-gamma-1-noida-1-78041",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "303249",
        "name": "Theobroma",
        "cloudinaryImageId": "oj0xd8ih7gb2ci0vhb8j",
        "locality": "Alpha 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "303249",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "1040",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": { },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/theobroma-alpha-2-greater-noida-noida-1-303249",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "61855",
        "name": "Sagar Ratna",
        "cloudinaryImageId": "893b0ca9c0125060646b1eda4fd9563b",
        "locality": "Omega 1",
        "areaName": "Omega 1",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "61855",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "793",
        "avgRatingString": "3.8",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-25 22:45:00",
          "opened": true
        },
        "badges": { },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": { },
            "textBased": { },
            "textExtendedBadges": { }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": { },
          "subTitle": { },
          "message": { },
          "customIcon": { }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": { },
            "video": { }
          }
        },
        "reviewsSummary": { },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": { },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sagar-ratna-omega-1-noida-1-61855",
        "type": "WEBLINK"
      }
    }
]

const Header =()=>{
    return (
        <div className="header">
            <div className="logo-containner">
                <img className="logo" src= "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )   
}

const RestaurantCard=(props)=>{
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info
    return (
     <div className="res-card">
        <img className="res-logo" alt="biryani" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
     </div>   
    )
}

const Body = ()=>{
    return (
    <div className="body">
        <div className="search-bar">Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
          ))} 
        </div>
    </div>
    )
}

const AppLayout =()=>{
    return (
        <div className="parent">
        <Header />  
        <Body /> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)