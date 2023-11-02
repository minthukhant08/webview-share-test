'use client'
import React from 'react';


const Page = () => {
    const handleShare = () => {
      const data = {
          url: 'https://frontend.partner.member.dev.d3lab.co',
          title: 'native share',
          text: 'descripton here..........'
      }
        if(navigator.share){
            navigator.share(data)
        }else{
            //copy to clipboard
            navigator.clipboard.writeText('Copied text')
            //@ts-ignore
            window.ReactNativeWebView.postMessage(JSON.stringify(data));
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
  
