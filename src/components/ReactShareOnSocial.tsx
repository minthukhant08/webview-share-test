'use client'
import React from "react";
import ShareOnSocial from "react-share-on-social";
// import favicon from "../assets/favicon.png";

export default function ReactShareOnSSocial() {
  return (
    <ShareOnSocial
      textToShare="Check out this new wardrobe I just found from IKEA!"
      link="https://ikea.com/wardrobes/kalle"
      linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
      linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
      // linkFavicon={favicon}
      noReferer
    >
      <button>Share this product</button>
    </ShareOnSocial>
  );
};