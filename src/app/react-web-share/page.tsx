'use client'
import React, { useState } from "react";
import { RWebShare } from "react-web-share";

const ReactWebShare = () => {
  return (
    <div>
       <a href="https://www.npmjs.com/package/react-web-share" target="_blank">Documentation</a><br />
      <RWebShare
        data={{
          text: "Share Text",
          url: "https://frontend.partner.member.dev.d3lab.co/",
          title: "Share title",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share</button>
      </RWebShare>
    </div>
  );
};

export default ReactWebShare;