import React from 'react';
import CvFile from '../assets/Papan_Resume_SE.pdf'
import Navbar from '../layout/Navbar';
const PdfViewer = () => {
    return (
        <div className='w-full h-screen'>
           <Navbar/>
            <iframe
            src={CvFile}
            title='pdf viewer'
              className="w-full h-full"
            >
            </iframe>
        </div>
    );
};

export default PdfViewer;