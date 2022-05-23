import React, {useState} from "react"
import { Document, Page, pdfjs } from "react-pdf"
import resumePdf from "./../assets/Resume.pdf"

pdfjs.GlobalWorkerOptions.workerSrc= '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js'

function Resume () {
    return(
        <div className="res">
            <h2 className="heading">Resume</h2>
            <Document 
                file={resumePdf}
                onLoadError={console.error}
                style={{width: '100vw', height: 'auto'}}
                >

                <Page pageIndex={0} />
            </Document>
        </div>
    )
}

export default Resume;