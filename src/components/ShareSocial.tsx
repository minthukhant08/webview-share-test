'use client'
import {ShareSocial}  from 'react-share-social' 
 
export default function ShareSocial() {
  return <ShareSocial 
     url ="url_to_share.com"
     socialTypes={['facebook','twitter','reddit','linkedin']}
   />
}