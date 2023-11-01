'use client'
import React from 'react';


const Page = () => {
    const handleShare = () => {
        if(navigator.share){
            navigator.share({
                url: 'https://frontend.partner.member.dev.d3lab.co',
                title: 'native share',
                text: 'descripton here..........'
            })
        }else{
            //copy to clipboard
            navigator.clipboard.writeText('Copied text')
            alert('copied')
        }
    }
    return (
      <div onClick={handleShare}>
        Share
      </div>
    );
  };

  export default Page
  
