
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/05/06/79/02/1000_F_506790264_N8BVZ9NLLRrTAShK6PADQmo0SZ4LUuJJ.jpg" height={650}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ts2.space/wp-content/uploads/2023/06/mfrack_a_woman_using_smartphone_or_computer_on_outdoor_cb7578f9-e7e6-42f2-b21a-263492da39a7-1024x574.png" height={650}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Photopea-How-to-Remove-Background.png?fit=973%2C528&ssl=1" height={650}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  )
}
