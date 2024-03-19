import React, { useEffect } from 'react';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Gallery from "./Gallery.jsx";


function App() {
	useEffect(() => {
		const handleBeforePrint = () => {
		  document.body.style.visibility = 'hidden';
		  alert('Wydruk jest niedostępny!');
		};

		const handleAfterPrint = () => {
		  document.body.style.visibility = 'visible';
		};

		window.addEventListener('beforeprint', handleBeforePrint);
		window.addEventListener('afterprint', handleAfterPrint);

		return () => {
		  window.removeEventListener('beforeprint', handleBeforePrint);
		  window.removeEventListener('afterprint', handleAfterPrint);
		};
	}, []);

  return (
    <>
      <Header/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App
