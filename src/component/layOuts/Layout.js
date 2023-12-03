import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';


const Layout = ({ children,title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>

        </div>


      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
      <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps={
  title:"Ecommers Shope",
  description:"ecommerce website for shopping online",
  keywords:"ecommerce,shopping,online",
  author:"Akash Kumar"
  

}
export default Layout;
