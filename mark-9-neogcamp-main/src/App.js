import React, { useState } from "react";
import "./styles.css";

const FVfood = {
  SouthIndian: [
    {
      name: "Dosa",
      origin:
        "Dosas originated in South India, but its precise geographical origins are unknown. According to historian P. Thankappan Nair, dosa originated in the town of Udupi in present-day Karnataka.",
      descrption:
        "Rice and wheat are the top two grains consumed by Indians, with rice topping the list. Indians have taken this humble grain and transformed it into a plethora of sweet and savory dishes unlike any other culture in the world. The humble dosa is an ode to the never-ending love between the people of this country and rice."
    },
    {
      name: "Idli–Idly",
      origin:
        "Gujarati historians believe that it was Saurashtrian textile merchants who introduced idli to South India during the 10th and 12th centuries",
      descrption:
        "Idli or idly is a type of savory rice cake, originating from the Indian subcontinent, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice."
    },

    {
      name: "Ven Pongal",
      origin:
        "Pongal generally refers to the savoury venn pongal and is sometimes served for breakfast with vada and chutney. Chakarai pongal is typically made during the Pongal festival.",
      descrption:
        "Pongal, or huggi, is a popular South Indian rice dish. In Tamil “pongal” means “to boil” or “bubbling up”. In Telugu and Kannada, pongali is a dish of rice mixed with boiled milk and sugar. Huggi is derived from the Old Kannada word Puggi meaning “bubbled up or ballooned”."
    }
  ],
  NorthIndian: [
    {
      name: "Chole Bhature",
      origin:
        "No one knows for sure who created Chole Bhature or where it originated. This tasty dish is a favourite of people all over the world. Try Chole Bhature even if you don't live in India.",
      descrption:
        "It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida. Although it is known as a typical Punjabi dish, It is originally a culinary dish of Delhi and Uttar Pradesh. Chhole"
    },

    {
      name: "Dal Makhani",
      origin:
        "Dal Makhani is a delicacy from Punjab, India. Traditionally this dal was cooked slowly, for hours, on charcoal. This gave it a creamier texture. It had 'malai' (cream) or fresh butter added to it.",
      descrption:
        "Dal makhani (pronounced [daːl ˈmək. kʰə.ni]) is a dish originating in New Delhi, India. A relatively modern variation of traditional lentil dishes, it is made with urad dal (black beans) and other pulses, and includes butter and cream (makhan is Hindi for butter)."
    },

    {
      name: "Amritsari Kulcha",
      origin:
        "Pehalwan Kulcha shop at Dhab Khatikan in the Walled City is counted among the pioneers of Amristari kulchas as we know it today. In 1952, Pehalwan Atma Ram, a professional wrestler, around 60 at the time, took the concept of the Peshawari khameeri roti (sourdough naan), and turned it around to create Amritsari naan.",
      descrption:
        "It is a flatbread that is filled with a stuffing of your choice, like a spicy boiled potato filling, paneer stuffing, gobhi stuffing and onion stuffing. With wet hands, kulcha is placed in the hot tandoor and comes out, is attacked dollops of butter and served to you to give you the best experience of your life!"
    }
  ],
  Fast_food: [
    {
      name: "Hamburger",
      origin:
        "White Castle traces the origin of the hamburger to Hamburg, Germany with its invention by Otto Kuase. Some have pointed to a recipe for 'Hamburgh sausages' on toasted bread, which was published in The Art of Cookery Made Plain and Easy by Hannah Glasse in 1747.",
      descrption:
        "A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes."
    },

    {
      name: "Cheeseburger",
      origin:
        "Many food historians credit 16-year-old Lionel Sternberger, who in 1924 decided to slap a slice of American cheese (what else?) onto a cooking hamburger at his father's Pasadena, California, sandwich shop, the Rite Spot. He liked it, and so did his dad, and thus the cheeseburger was born.",
      descrption:
        "Many food historians credit 16-year-old Lionel Sternberger, who in 1924 decided to slap a slice of American cheese (what else?) onto a cooking hamburger at his father's Pasadena, California, sandwich shop, the Rite Spot. He liked it, and so did his dad, and thus the cheeseburger was born."
    },

    {
      name: "Sandwich.",
      origin:
        "According to history, the sandwich we know and love today was created in 1762 in England. Most food historians agree that the sandwich is the product of John Montagu, “the 4th Earl of sandwich.” Montagu was known for being a problematic gambler, spending hours upon hours at the card table.",
      descrption:
        "sandwich, in its basic form, slices of meat, cheese, or other food placed between two slices of bread. Although this mode of consumption must be as old as meat and bread, the name was adopted only in the 18th century for John Montagu, 4th earl of Sandwich."
    }
  ]
};
var styling = {
  backgroundColor: "blue",
  color: "orange",
  border: "solid black 2px",
  width: "17%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "1rem",
  borderRadius: "1rem"
  // fontSize:"3rem"
};

export default function App() {
  var [selectedgenre, setGenre] = useState("SouthIndian");

  function catchaclick(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div style={{ backgroundColor: " #8F00FF", padding: "3px" }}>
        <h1 style={styling}>🍔 Food ​🍕​</h1>
        <h2>Welcome to my favourite movie liberary.</h2>
        {Object.keys(FVfood).map((types) => {
          return (
            <button
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                margin: "0.5rem",
                borderRadius: "0.5rem"
              }}
              onClick={() => catchaclick(types)}
            >
              {types}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {FVfood[selectedgenre].map((food) => {
            return (
              <li
                keys={food.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "solid black 2px",
                  width: "50%",
                  // margin: "1rem 0rem",
                  borderRadius: "3rem",
                  marginTop: "2rem",
                  marginLeft: "7rem",
                  backgroundColor: "palegoldenrod",
                  color: "black",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div>
                  <h2 style={{ color: "red" }}>{food.name}</h2>
                </div>
                <strong>Origin</strong>
                <div className="makefood">{food.origin}</div>
                <strong>Description</strong>
                <div style={{ color: "blue" }}>{food.descrption}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
