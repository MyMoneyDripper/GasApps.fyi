document.addEventListener('DOMContentLoaded', () => {
  // const listings = [
  //   {
  //     "title": "Featured Apps",
  //     "apps": [
  //       {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         },
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         }
  //     ]
  //   },
  //  {
  //     "title": "All Apps",
  //      "apps": [
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         },
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         },
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         },
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         },
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         },
  //        {
  //           "name": "My Cool App",
  //           "description": "A revolutionary new way to do whatever you want!",
  //           "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
  //           "authorName": "Someone",
  //           "linkUrl": "#"
  //         }
  //      ]
  // }];

  const listings = [
    {
      "title": "Featured Apps",
      "apps": [
        {
            "name": "Upside",
            "description": "Get ready to save big, just in time for spring! Get real cash on your spring purchases by downloading Upside today!",
            "thumbImgUrl": "./icons/upside.webp",
            "authorName": "Upside Services Inc",
            "linkUrl": "https://upside.app.link/2PVBC"
          },
         {
            "name": "GasBuddy",
            "description": "Join the 90 million people already saving! Get the free GasBuddy card and never pay full price at the pump again.",
            "thumbImgUrl": "./icons/gasbuddy.webp",
            "authorName": "GasBuddy",
            "linkUrl": "https://www.gasbuddy.com/"
          }
      ]
    },
   {
      "title": "All Apps",
  "apps": [
    {
      "name": "Fuel Rewards",
      "description": "The Fuel Rewards program is a free loyalty program that helps you save money on fuel at over 11,000 Shell stations, nationwide.",
      "thumbImgUrl": "./icons/fuelrewards.webp",
      "authorName": "Shell US",
      "linkUrl": "https://www.fuelrewards.com/"
    },
    {
      "name": "Exxon Mobil Rewards+",
      "description": "Exxon Mobil Rewards+ app allows you to stay in the comfort of your vehicle while you pay for Synergy™ fuel with your phone.",
      "thumbImgUrl": "./icons/exxonmobile.webp",
      "authorName": "Exxon Mobile",
      "linkUrl": "https://www.exxon.com/en/rewards-program"
    },
    {
      "name": "Chevron ExtraMile Rewards",
      "description": "You can join and register for ExtraMile Extras reward program using this app, and keep track of your progress towards earning free Extras at ExtraMile.",
      "thumbImgUrl": "./icons/chevron.webp",
      "authorName": "Cheveron",
      "linkUrl": "https://www.chevronextramile.com/"
    },
    {
      "name": "BPme",
      "description": "With BPme you instantly get access to secure contactless payment and start saving on every gallon at participating bp and Amoco gas stations.",
      "thumbImgUrl": "./icons/bp.webp",
      "authorName": "BP North America",
      "linkUrl": "https://www.bp.com/en_us/united-states/home/products-and-services/bpme-rewards.html"
    },
    {
      "name": "Sunoco",
      "description": "Now with Sunoco Go Rewards, a mobile app gas rewards program that saves you 3¢/gal.",
      "thumbImgUrl": "./icons/sunoco.webp",
      "authorName": "Sunoco LP",
      "linkUrl": "https://www.sunoco.com/go-rewards"
    },
    {
      "name": "Murphy Drive Rewards",
      "description": "Murphy USA brings you the best app for savings on the road with deals on gas, snacks, drinks and more.",
      "thumbImgUrl": "./icons/murphy.webp",
      "authorName": "Murphy USA",
      "linkUrl": "https://www.murphyusa.com/murphyusa/get-rewards"
    },
    {
      "name": "Circle K",
      "description": "The new app is faster and more rewarding; and you get to use it first. Preview and try the perks.",
      "thumbImgUrl": "./icons/circlek.webp",
      "authorName": "Circle K",
      "linkUrl": "#"
    },
    {
      "name": "Speedy Rewards",
      "description": "The official app of Speedway and Speedy Rewards lets you start earning on the fuel and merchandise you already buy.",
      "thumbImgUrl": "./icons/speedway.webp",
      "authorName": "Speedway LLC",
      "linkUrl": "https://www.speedway.com/speedy-rewards"
    },
    {
      "name": "Texaco",
      "description": "Use the Texaco app to pay for fuel from the comfort of your driver’s seat for a fast and simple experience at the pump!",
      "thumbImgUrl": "./icons/texaco.webp",
      "authorName": "Texaco, Inc.",
      "linkUrl": "https://starrewards.valero.com/"
    },
    {
      "name": "ValeroPay+",
      "description": "Head to a Valero near you and save more on gas and in-store merchandise by paying through the app.",
      "thumbImgUrl": "./icons/valero.webp",
      "authorName": "Valero Energy Corp",
      "linkUrl": "https://www.valeropayplus.com/"
    },
    {
      "name": "Fuel Forward",
      "description": "The Fuel Forward™ App is your mobile sidekick at Phillips 66®, Conoco® and 76® stations nationwide.",
      "thumbImgUrl": "./icons/fuelforward.webp",
      "authorName": "Phillips 66 Company",
      "linkUrl": "https://news.phillips66solutions.com/fuel-forward-positioning-our-mobile-app-for-the-road-ahead/"
    },
    {
      "name": "Thorntons Rewards",
      "description": "The all-new Thorntons app is here! Stay up-to-date on the lowest gas prices near you and easily keep track of your Refreshing Rewards and Professional Driver rewards.",
      "thumbImgUrl": "./icons/thorntons.webp",
      "authorName": "Thorntons Inc.",
      "linkUrl": "https://www.refreshingrewards.com/refreshing-rewards/"
    }
  ]
}]; 

  const { createApp } = Vue;

  createApp({
    data() {
      return {
        listings: listings
      }
    }
  }).mount('#listings');
});
