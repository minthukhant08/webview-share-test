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
  
