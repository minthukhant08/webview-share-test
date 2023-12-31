'use client'
import React from 'react';
import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share'


const Page = () => {
    const shareUrl = 'https://frontend.partner.member.dev.d3lab.co/'; // URL to share
    const title = 'Share Title or Descritpion';
    const imageUrl = 'https://fakeimg.pl/600x400'; // URL to the image you want to share
  
    return (
      <div>
      <a href="https://www.npmjs.com/package/react-share" target='_blank'>Documentation</a> <br />
      <div>
        <Image src={imageUrl} alt="Shared Image" width={100} height={100}/>
        <p>{title}</p>
  
        {/* Facebook Share Button */}
        <FacebookShareButton url={shareUrl} quote={title} hashtag="#yourhashtag">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
  
        {/* Twitter Share Button */}
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      </div>
      
    );
  };

  export default Page
  
