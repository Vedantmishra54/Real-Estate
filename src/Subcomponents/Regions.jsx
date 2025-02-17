import React from 'react'

const Regions = () => {
  return (
    <>
      <section id ='regions'>
        <h1>OUR REGIONS</h1>
        <p>: Experience the ultimate beachfront living in our luxurious coastal villas. With stunning views of the sea, private beach access, and serene surroundings, these villas offer a perfect escape from the hustle and bustle of city life.</p>
        <div className='region_container'>
            <div className='card'>
                <img src="/region1.jpg" alt="mountains" />
                <h2>Mountains</h2>
                <p><span>90</span>Properties</p>
            </div>
            <div className='card'>
                <img src="/region2.jpg" alt="coastline" />
                <h2>Coastline</h2>
                <p><span>52</span>Properties</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Regions
