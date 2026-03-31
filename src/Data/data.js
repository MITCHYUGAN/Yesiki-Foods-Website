import cajun_fried_rice_img from "../assets/rice_others/CAJUN-FRIED-RICE.jpg";
import chinese_rice_img from "../assets/rice_others/CHINESE-RICE.jpg";
import fried_rice_img from "../assets/rice_others/FRIED-RICE.jpg";
import jollof_rice_img from "../assets/rice_others/JOLLOF-RICE-3000.jpg";
import mexican_rice_img from "../assets/rice_others/MEXICAN-RICE.jpg";
import paella_royale_rice_img from "../assets/rice_others/PAELLA-ROYALE-RICE.jpg";
import oriental_rice_img from "../assets/rice_others/ORIENTAL-RICE.jpg";
import shepherd_rice_img from "../assets/rice_others/SHEPHERD-RICE.jpg";

// Snack Images
import chickenpie_img from "../assets/snack/chicken_pie.jpg";
import meatpie_img from "../assets/snack/meat_pie.jpg";
import doughnut_img from "../assets/snack/doughnut.jpg";
import sugar_jam_doughnut_img from "../assets/snack/sugar_jam_doughnut.jpg";
import sausage_img from "../assets/snack/chicken_pie.jpg";
import sugar_sprinkled_doughnut_img from "../assets/snack/sugar_sprinkled_doughnut.jpg";

// Swallow & Soup Images
import cat_fish_pepper_soup_img from "../assets/swallow/Catfish-Pepper-soup.jpg";
import vegetable_soup_img from "../assets/swallow/Vegetable-soup.jpg";
import okro_soup_img from "../assets/swallow/Okro_soup.jpg";
import efo_riro_soup_img from "../assets/swallow/Efo-riro.jpg";
import fisherman_soup_img from "../assets/swallow/Fisherman-soup.jpg";
import oha_soup_img from "../assets/swallow/Oha-soup.jpg";

import eba_img from "../assets/swallow/eba.jpg";
import amala_img from "../assets/swallow/Amala.jpg";
import fufu_img from "../assets/swallow/fufu1.png";
import semovita_img from "../assets/swallow/semovita.jpg";
import wheat_img from "../assets/swallow/wheat.jpg";
import starch_img from "../assets/swallow/starch.jpg";

// Protein
import chicken_wings_img from "../assets/proteins/chicken-wings.webp";
import peppered_croaker_fish_img from "../assets/proteins/peppered_croaker_fish.webp";
import boiled_eggs_img from "../assets/proteins/boiled_eggs.jpg";
import peppered_snail_img from "../assets/proteins/peppered_snail.webp";
import peppered_assorted_meat_img from "../assets/proteins/Peppered-Assorted-meat.webp";
import peppered_beef_img from "../assets/proteins/peppered-beef.webp";
import peppered_chicken_img from "../assets/proteins/Peppered-Chicken.webp";
import peppered_goatmeat_img from "../assets/proteins/Peppered-Goatmeat.webp";


// Drinks
import water_img from "../assets/drinks/water.jpg";
import pepsi_img from "../assets/drinks/PESPI.jpg";
import sevenup_img from "../assets/drinks/7UP.jpg";
import chivita_active_img from "../assets/drinks/CHIVITA-ACTIVE.jpg";
import cranberry_juice_img from "../assets/drinks/CRANBERRY-JUICE.jpg";
import fayrouz_img from "../assets/drinks/FAYROUZ.jpg";
import malta_guiness_img from "../assets/drinks/MALTA-GUINESS.jpg";
import mirinda_img from "../assets/drinks/MIRINDA.jpg";
import teem_bitter_lemon_img from "../assets/drinks/TEEM-BITTER-LEMON.jpg";
import teem_soda_water_img from "../assets/drinks/TEEM-SODA-WATER.jpg";
import teem_tonic_water_img from "../assets/drinks/TEEM-TONIC-WATER.jpg";
import zobo_drink_img from "../assets/drinks/ZOBO-DRINK.jpg";


// Ice cream images
import banana_ice_cream_img from "../assets/ice_cream/banana_ice_cream.jpg";
import chocolate_ice_cream_img from "../assets/ice_cream/chocolate_ice_cream.jpg";
import coconut_ice_cream_img from "../assets/ice_cream/coconut_ice_cream.jpg";
import cookies_and_cream_ice_cream_img from "../assets/ice_cream/cookies_and_cream_ice_cream.jpg";
import french_vanilla_ice_cream_img from "../assets/ice_cream/french_vanilla_ice_cream.jpg";
import Straciatella_ice_cream_img from "../assets/ice_cream/Straciatella_ice_cream.jpg";
import strawberry_ice_cream_img from "../assets/ice_cream/strawberry_ice_cream.jpg";


// Alcohol
import budweiser_img from "../assets/alcohol/BUDWEISER.jpg";
import star_img from "../assets/alcohol/STAR.jpg";
import goldberg_img from "../assets/alcohol/GOLDBERG.jpg";
import gulder_img from "../assets/alcohol/GULDER.jpg";
import ralder_img from "../assets/alcohol/RALDER.jpg";
import smirnoff_ice_img from "../assets/alcohol/SMIRNOFF-ICE.jpg";
import heineken_img from "../assets/alcohol/HEINEKEN.jpg";
import flying_fish_img from "../assets/alcohol/FLYING-FISH.jpg";
import trophy_img from "../assets/alcohol/TROPHY2.png";
import origin_img from "../assets/alcohol/ORIJIN.png";
import legend_img from "../assets/alcohol/LEGEND.jpg";
import guiness_stout_img from "../assets/alcohol/GUINESS-STOUT.jpg";
import tiger_beer_img from "../assets/alcohol/TIGER-BEER.jpg";
import desperados_img from "../assets/alcohol/DESPERADO.jpg";
import castle_img from "../assets/alcohol/castle.jpg";


const menu = [
  // Rice & More
  {
    name: "Jollof Rice",
    price: 3500,
    img: jollof_rice_img,
    category: "rice",
  },
  {
    name: "Fried Rice",
    price: 3000,
    img: fried_rice_img,
    category: "rice",
  },
  {
    name: "Oriental Rice",
    price: 6000,
    img: oriental_rice_img,
    category: "rice",
  },
  {
    name: "Mexican Rice",
    price: 5000,
    img: mexican_rice_img,
    category: "rice",
  },
  {
    name: "Chinese Rice",
    price: 6000,
    img: chinese_rice_img,
    category: "rice",
  },
  {
    name: "Paella Royale Rice",
    price: 10000,
    img: paella_royale_rice_img,
    category: "rice",
  },
  {
    name: "Shepherd Rice",
    price: 6000,
    img: shepherd_rice_img,
    category: "rice",
  },
  {
    name: "Cajun Fried Rice",
    price: 7000,
    img: cajun_fried_rice_img,
    category: "rice",
  },

  // Swallow & Soup
  {
    name: "Cat Fish Pepper Soup",
    price: 21500,
    category: "swallow_and_soup",
    img: cat_fish_pepper_soup_img,
  },
  {
    name: "Vegetable Soup",
    price: 6450,
    category: "soup",
    img: vegetable_soup_img,
  },
  {
    name: "Okro Soup",
    price: 6450,
    category: "soup",
    img: okro_soup_img,
  },
  {
    name: "Efo-riro Soup",
    price: 6450,
    category: "soup",
    img: efo_riro_soup_img,
  },
  {
    name: "Fisherman Soup",
    price: 24725,
    category: "soup",
    img: fisherman_soup_img,
  },
  {
    name: "Oha Soup",
    price: 4960,
    category: "soup",
    img: oha_soup_img,
  },
  // {
  //   name: "Egusi soup",
  //   price: 2000,
  //   category: "soup",
  // },
  // {
  //   name: "Afang soup",
  //   price: 4000,
  //   category: "soup",
  // },

  // Swallow
  {
    name: "Eba",
    price: 500,
    category: "swallow",
    img: eba_img,
  },
  {
    name: "Amala",
    price: 600,
    category: "swallow",
    img: amala_img,
  },
  {
    name: "Fufu",
    price: 500,
    category: "swallow",
    img: fufu_img,
  },
  {
    name: "Semovita",
    price: 700,
    category: "swallow",
    img: semovita_img,
  },
  {
    name: "Wheat",
    price: 600,
    category: "swallow",
    img: wheat_img,
  },
  {
    name: "Starch",
    price: 800,
    category: "swallow",
    img: starch_img,
  },

  // Protein
  {
    name: "Chicken Wings",
    price: 7000,
    category: "protein",
    img: chicken_wings_img,
  },
  {
    name: "Chicken Wings",
    price: 2400,
    category: "protein",
    img: peppered_croaker_fish_img,
  },
  {
    name: "Boiled Eggs",
    price: 500,
    category: "protein",
    img: boiled_eggs_img,
  },
  {
    name: "Peppered Snail",
    price: 10000,
    category: "protein",
    img: peppered_snail_img,
  },
  {
    name: "Peppered Assorted Meat",
    price: 7000,
    category: "protein",
    img: peppered_assorted_meat_img,
  },
  {
    name: "Peppered Beef",
    price: 8000,
    category: "protein",
    img: peppered_beef_img,
  },
  {
    name: "Peppered Chicken",
    price: 8000,
    category: "protein",
    img: peppered_chicken_img,
  },
  {
    name: "Peppered Goatmeat",
    price: 10000,
    category: "protein",
    img: peppered_goatmeat_img,
  },

  // Drinks
  {
    name: "Water",
    price: 300,
    img: water_img,
    category: "drink",
  },
  {
    name: "Pepsi",
    price: 600,
    img: pepsi_img,
    category: "drink",
  },
  {
    name: "7Up",
    price: 600,
    img: sevenup_img,
    category: "drink",
  },
  {
    name: "Chivita Active",
    price: 2500,
    img: chivita_active_img,
    category: "drink",
  },
  {
    name: "Cranberry Juice",
    price: 5000,
    img: cranberry_juice_img,
    category: "drink",
  },
  {
    name: "Fayrouz",
    price: 1000,
    img: fayrouz_img,
    category: "drink",
  },
  {
    name: "Malta Guiness",
    price: 1000,
    img: malta_guiness_img,
    category: "drink",
  },
  {
    name: "Mirinda",
    price: 600,
    img: mirinda_img,
    category: "drink",
  },
  {
    name: "Malta Guiness",
    price: 1000,
    img: malta_guiness_img,
    category: "drink",
  },
  {
    name: "Teem Bitter Lemon",
    price: 600,
    img: teem_bitter_lemon_img,
    category: "drink",
  },
  {
    name: "Teem Soda Water",
    price: 700,
    img: teem_soda_water_img,
    category: "drink",
  },
  {
    name: "Teem Tonic Water",
    price: 700,
    img: teem_tonic_water_img,
    category: "drink",
  },
  {
    name: "Zobo Drink",
    price: 1000,
    img: zobo_drink_img,
    category: "drink",
  },


  // Snacks & Ice cream
  {
    name: "Chicken Pie",
    price: 900,
    img: chickenpie_img,
    category: "snack",
  },
  {
    name: "Meat Pie",
    price: 900,
    img: meatpie_img,
    category: "snack",
  },
  {
    name: "Doughnut",
    price: 700,
    img: doughnut_img,
    category: "snack",
  },
  {
    name: "Sugar Jam Doughnut",
    price: 700,
    img: sugar_jam_doughnut_img,
    category: "snack",
  },
  {
    name: "Sausage Beef Roll",
    price: 700,
    img: sausage_img,
    category: "snack",
  },
  {
    name: "Sugar sprinkled Doughnut",
    price: 600,
    img: sugar_sprinkled_doughnut_img,
    category: "snack",
  },

  // Ice Cream
  {
    name: "Banana Ice Cream",
    price: 1600,
    img: banana_ice_cream_img,
    category: "ice_cream",
  },
  {
    name: "Chocolate Ice Cream",
    price: 1600,
    img: chocolate_ice_cream_img,
    category: "ice_cream",
  },
  {
    name: "Coconut Ice Cream",
    price: 1200,
    img: coconut_ice_cream_img,
    category: "ice_cream",
  },
  {
    name: "Cookies & Cream Ice Cream",
    price: 2000,
    img: cookies_and_cream_ice_cream_img,
    category: "ice_cream",
  },
  {
    name: "French Vanilla Ice Cream",
    price: 1200,
    img: french_vanilla_ice_cream_img,
    category: "ice_cream",
  },
  {
    name: "Straciatella Ice Cream",
    price: 1600,
    img: Straciatella_ice_cream_img,
    category: "ice_cream",
  },
  {
    name: "Strawberry Ice Cream",
    price: 1600,
    img: strawberry_ice_cream_img,
    category: "ice_cream",
  },
  
  // Alchohol
  {
    name: "Budweiser",
    price: 2500,
    img: budweiser_img,
    category: "alcohol",
  },
  {
    name: "Star",
    price: 2000,
    img: star_img,
    category: "alcohol",
  },
  {
    name: "Goldberg",
    price: 2000,
    img: goldberg_img,
    category: "alcohol",
  },
  {
    name: "Gulder",
    price: 2000,
    img: gulder_img,
    category: "alcohol",
  },
  {
    name: "Ralder",
    price: 2000,
    img: ralder_img,
    category: "alcohol",
  },
  {
    name: "Smirnoff Ice",
    price: 1500,
    img: smirnoff_ice_img,
    category: "alcohol",
  },
  {
    name: "Heineken",
    price: 2500,
    img: heineken_img,
    category: "alcohol",
  },
  {
    name: "Flying Fish",
    price: 2000,
    img: flying_fish_img,
    category: "alcohol",
  },
  {
    name: "Trophy",
    price: 2000,
    img: trophy_img,
    category: "alcohol",
  },
  {
    name: "Origin",
    price: 2500,
    img: origin_img,
    category: "alcohol",
  },
  {
    name: "Legend",
    price: 2500,
    img: legend_img,
    category: "alcohol",
  },
  {
    name: "Guiness Stout",
    price: 2500,
    img: guiness_stout_img,
    category: "alcohol",
  },
  {
    name: "Tiger Beer",
    price: 2500,
    img: tiger_beer_img,
    category: "alcohol",
  },
  {
    name: "Desperados",
    price: 2500,
    img: desperados_img,
    category: "alcohol",
  },
  {
    name: "Castle",
    price: 2500,
    img: castle_img,
    category: "alcohol",
  },

];

export default menu;
