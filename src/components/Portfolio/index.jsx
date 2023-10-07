import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function Portfolio() {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)'}}>

                </div>
                <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)'}}>

                </div>
                <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)'}}>

                </div>
                <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)'}}>

                </div>
                
            </Masonry>
        </ResponsiveMasonry>
    )
}
