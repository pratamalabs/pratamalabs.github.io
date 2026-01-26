import React from 'react'; 
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'; 
import { useRouter } from 'next/router'; 
import Search from '@components/Search'; 
 
function useHead() { 
  const { asPath } = useRouter(); 
  const { frontMatter, title } = useConfig(); 
  const url = `https://pratamalabs.github.io${asPath}`; 
  const description = frontMatter.description || "Dokumentasi Pratama Labs"; 
 
  return ( 
    <> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <link rel="icon" type="image/x-icon" href="/static/ox.ico" /> 
      <meta httpEquiv="Content-Language" content="en" /> 
      <meta name="description" content={description} /> 
      <meta name="og:title" content={title} /> 
      <meta name="og:description" content={description} /> 
      <meta name="og:url" content={url} /> 
    </> 
  ); 
} 
