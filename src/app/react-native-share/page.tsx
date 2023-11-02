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
          type: 'RNShare',
          url: 'https://frontend.partner.member.dev.d3lab.co',
          title: 'Share Title',
          text: 'Share description..........'
      }
      //@ts-ignore
      window.ReactNativeWebView.postMessage(JSON.stringify(data));
    }
    return (
      <div>
        <a href="https://react-native-share.github.io/react-native-share/" target='_blank'>Documentation</a> <br />
        <div onClick={handleShare}>
        Share
      </div>
      </div>
      
    );
  };

  export default Page
  
