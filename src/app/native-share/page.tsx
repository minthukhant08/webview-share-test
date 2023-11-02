'use client'
import React, { useEffect } from 'react';


const Page = () => {
  useEffect(() => {
    const messageListener = window.addEventListener('message', (nativeEvent) => {
      console.log(nativeEvent?.data);
    });
    return messageListener;
  }, []);
    const handleShare = () => {
      const data = {
          type: 'share',
          url: 'https://frontend.partner.member.dev.d3lab.co',
          title: 'Share Title',
          text: 'Share description..........'
      }
        if(navigator.share){
            navigator.share(data)
        }else{
            //copy to clipboard
            navigator.clipboard.writeText('Copied text')
            //@ts-ignore
            window.ReactNativeWebView.postMessage(JSON.stringify(data));
        }
    }
    return (
      <div>
        <a href="https://reactnative.dev/docs/share" target='_blank'>Documentation</a> <br />
        <div onClick={handleShare}>
        Share
      </div>
      </div>
      
    );
  };

  export default Page
  
