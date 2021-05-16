import React from 'react'
import './Pricing.scss'

const Pricing = () => {


    


    return (
        <div className = 'pricing-page-wrapper'>

            <div className = 'pricing-page-container'>
            <div className = 'pricing-addons'>
                    <h3>All Packages Include</h3>
                    <ul>
                        <li className = 'addon-item'>
                            <p>DVD with 500 High-Resolution Images</p>
                        </li>

                        <li className = 'addon-item'>
                            <p>30 Min Video Session to Plan Photo Shoot</p>
                        </li>

                        <li className = 'addon-item'>
                            <p>Online Gallery For Viewing & Ordering</p>
                        </li>
                    </ul>

                </div>

                <div className = 'pricing-item'>
                    <div className = 'package-header'>
                        <h2 className = 'pricing-item-title'>PACKAGE #1</h2>
                        <h2 className = 'package-price'>$700</h2>
                    </div>

                    <ul className = 'package-list'>
                        <li className = 'package-item'>4 Hours Continous Coverage</li>
                        <li className = 'package-item'>Up to 2 Outfits or Groups</li>
                        <li className = 'package-item'>40 Mile Free Travel Cost</li>
                    </ul>
                    
                </div>

                <div className = 'pricing-item'>
                    <div className = 'package-header'>
                        <h2 className = 'pricing-item-title'>PACKAGE #2</h2>
                        <h2 className = 'package-price'>$1900</h2>
                    </div>

                    <ul className = 'package-list'>
                        <li className = 'package-item'>5 Hours Continous Coverage</li>
                        <li className = 'package-item'>3 Hours Additional Session</li>
                        <li className = 'package-item'>Up to 4 Outfits or Groups</li>
                        <li className = 'package-item'>60 Mile Free Travel Cost</li>                    
                    </ul>
                    
                </div>

                <div className = 'pricing-item'>
                    <div className = 'package-header'>
                        <h2 className = 'pricing-item-title'>PACKAGE #3</h2>
                        <h2 className = 'package-price'>$3100</h2>
                    </div>

                    <ul className = 'package-list'>
                        <li className = 'package-item'>8 Hours Continous Coverage</li>
                        <li className = 'package-item'>4 Hours Additional Session</li>
                        <li className = 'package-item'>Up to 4 Outfits or Groups</li>
                        <li className = 'package-item'>100 Mile Free Travel Cost</li>                     
                    </ul>
                    
                </div>

                <div className = 'pricing-item'>
                    <div className = 'package-header'>
                        <h2 className = 'pricing-item-title'>PACKAGE #4</h2>
                        <h2 className = 'package-price'>$4600</h2>
                    </div>

                    <ul className = 'package-list'>
                        <li className = 'package-item'>12 Hours Continous Coverage</li>
                        <li className = 'package-item'>4 Hours Additional Session</li>
                        <li className = 'package-item'>Up to 5 Outfits or Groups</li>
                        <li className = 'package-item'>150 Mile Free Travel Cost</li>                     
                    </ul>
                    
                </div>
                

                

                <div className = 'pricing-addons'>
                    <h3>Add-Ons</h3>
                    <ul>
                        <li className = 'addon-item'>
                            <p>Wardrobe Assistant</p>
                            <p>$200</p>
                        </li>

                        <li className = 'addon-item'>
                            <p>Additional Location</p>
                            <p>$150</p>
                        </li>

                        <li className = 'addon-item'>
                            <p>Each Additional 10 Miles Travel Cost</p>
                            <p>$6</p>
                        </li>

                        <li className = 'addon-item'>
                            <p>Rescheduling Fee *Minimum 48hrs In Advance</p>
                            <p>$70</p>
                        </li>
                    </ul>

                </div>

            </div>
            
        </div>
    )
}

export default Pricing
