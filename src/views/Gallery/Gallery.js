import React, { useState } from 'react'
import './Gallery.scss';

import image1 from '../../component/images/gallery/image1.png';
import image2 from '../../component/images/gallery/image2.png';
import image3 from '../../component/images/gallery/image3.png';
import image4 from '../../component/images/gallery/image4.png';
import image5 from '../../component/images/gallery/image5.png';
import image6 from '../../component/images/gallery/image6.png';
import image7 from '../../component/images/gallery/image7.png';
import image8 from '../../component/images/gallery/image8.png';
import image9 from '../../component/images/gallery/image9.png';
import image10 from '../../component/images/gallery/image10.png';
import image11 from '../../component/images/gallery/image11.png';
import image12 from '../../component/images/gallery/image12.png';
import image13 from '../../component/images/gallery/image13.png';




const Gallery = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!true)

    }


    
    const GalleryItems = [
        {
            photo: image1,
            title: 'TITLE',
            date: '',
            classStyles: 'gallery-img-container gallery-item-wide',
        },

        {
            photo: image2,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-tall',
        },
    
        {
            photo: image3,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-lsquare',
        },
        
        {
            photo: image4,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-tall',
        },
    
        {
            photo: image5,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-ssquare',
        },
    
        {
            photo: image6,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-ssquare',
        },
        
        {
            photo: image7,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-wide',
        },

        {
            photo: image8,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-tall',
        },

        {
            photo: image9,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-wide',
        },


        {
            photo: image10,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-wide',
        },
    
        {
            photo: image11,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-ssquare',
        },

        {
            photo: image12,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-ssquare',
        },
    
        {
            photo: image13,
            title: '',
            date: '',
            classStyles: 'gallery-img-container gallery-item-wide',
        }
    
    
    ]

    return (
        <div className = 'gallery-page-wrapper'>
            <div className = 'gallery-page-container'>

            {GalleryItems.map ( (item, index) =>{


            return(
                <div className = {item.classStyles} onMouseOver = {handleClick} >
                    
                    <img key = {index} src = {item.photo} alt = 'duh' className = {click ? 'gallery-item active' : 'gallery-item'} />
                    <h2 className = {click ? 'image-title active' : 'image-title'}>{item.title}</h2> 
                </div>
            )})}

            
            </div>
        </div>
    )
}

export default Gallery
