import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import DeanPdf from './Dean-Introduction.pdf';

export default class DeanIntroduction extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pageNumber2: 2,
    pageNumber3: 3,
    pageNumber4: 4,
    pageNumber5: 5,
    pageNumber6: 6,
    pageNumber7: 7,
    pageNumber8: 8,
    pageNumber9: 9,
    pageNumber10: 10,
    pageNumber11: 11,
    pageNumber12: 12,
    pageNumber13: 13,
    pageNumber14: 14,
    pageNumber15: 15,
    pageNumber16: 16,
    pageNumber17: 17,
    pageNumber18: 18,
    pageNumber19: 19,
    pageNumber20: 20,
    pageNumber21: 21,
    pageNumber22: 22,
    pageNumber23: 23,
    pageNumber24: 24,
    pageNumber25: 25,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

render() {
  const { pageNumber, pageNumber2, pageNumber3, pageNumber4, pageNumber5, pageNumber6, pageNumber7, pageNumber8, pageNumber9, pageNumber10, pageNumber11, pageNumber12, pageNumber13, pageNumber14, pageNumber15, pageNumber16, pageNumber17, pageNumber18, pageNumber19, pageNumber20, pageNumber21, pageNumber22, pageNumber23, pageNumber24, pageNumber25 } = this.state;
    return (
      <div className="container">  
        <div style={{textAlign:'center', width:'100%', maxWidth:'842px', margin:'0 auto'}}>
        <div style={{width:'100%', float:'left', margin:'10px 0' }}>
        <a style={{background:'#2098d1', display:'block', width:'150px', padding:'10px 20px',  color:'#fff', float:'right', cursor:'pointer'}} href = {DeanPdf} target = "_blank">Download Pdf</a></div>
        <div style={{width:'100%', float:'left'}}>
        <Document
          file="Dean-Introduction.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber2} />  
          <Page pageNumber={pageNumber3} />
          <Page pageNumber={pageNumber4} />
          <Page pageNumber={pageNumber5} />
          <Page pageNumber={pageNumber5} />
          <Page pageNumber={pageNumber5} />
          <Page pageNumber={pageNumber6} />
          <Page pageNumber={pageNumber7} />
          <Page pageNumber={pageNumber8} />
          <Page pageNumber={pageNumber9} />
          <Page pageNumber={pageNumber10} />
          <Page pageNumber={pageNumber11} />
          <Page pageNumber={pageNumber12} />
          <Page pageNumber={pageNumber13} />
          <Page pageNumber={pageNumber14} />
          <Page pageNumber={pageNumber15} />
          <Page pageNumber={pageNumber16} />
          <Page pageNumber={pageNumber17} />
          <Page pageNumber={pageNumber18} />
          <Page pageNumber={pageNumber19} />
          <Page pageNumber={pageNumber20} />
          <Page pageNumber={pageNumber21} />
          <Page pageNumber={pageNumber22} />
          <Page pageNumber={pageNumber23} />
          <Page pageNumber={pageNumber24} />
          <Page pageNumber={pageNumber25} />
        </Document>
        
      </div></div>
      </div>
    );
  }
}


