import React from 'react'
import Data from "../assets/data.png"
import Image from "../assets/image.png"

const QuickB = () => {
  const businesses = [
    {
      name: "Bundle Plug",
      description: "Get affordable bundles of data to stay connected with your loved ones and the world around you.",
      link: "https://datatrade.store/data_plug",
      aim: "Get bundle",
      img: Data
    },
    {
      name: "Byte Agent",
      description: " Join the Byte Agent team and earn money by selling your data with trusted partners. Your data, your rules.",
      link: "https://www.dataxpress.shop/register?referral_code=QXDFVN",
      aim: "Join Now",
      img: Image
    }
  ];


  return (
    <div className='projects'>
      <h3 className='b-header'>Are you business minded? <span className='b-span'>Join the Byte Agent team! and start earning today.</span></h3>
      <div className="projects-container">
        {businesses.map((business, index) => (
          <div className='project-details' key={index}>
            <img className='b-img' src={business.img} alt="business" />
            <div className='project-info'>
              <h2 className='b-name'>{business.name}</h2>
            <p className='b-des'>{business.description}</p>
            {
              business.link && (
                <p className='b-para'><a className='b-link' href={business.link} target="_blank" >{business.aim}</a></p>
              )
            }
            </div>
            
        </div>
      ))}
      </div>
    </div>
  )
}

export default QuickB;