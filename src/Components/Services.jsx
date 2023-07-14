import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

export default function Services() {
  let massage = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quaerat facilis.";

  return (
    <section className='section-white'>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-10'>
            <h1 className='section-title'>
              The Team Behind Pacifico
            </h1>
            <p className='section-subtitle'>{massage}</p>
          </div>

          <div className='col-mx-5 col-md-4'>
            <div className='team-item justify-content-center'>
              <img src="https://10pearls.com/wp-content/uploads/2023/03/IOS-Android-Developers.png" className='team-img' alt="pic" height={150} />
              <h3>ALEXANDRA SMITHS</h3>
              <div className='team-info'>
                <p>Web Developers</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos?</p>
                <ul className='team-icon'>
                  <li><a href="#" className='facebook'><BsFacebook /></a></li>
                  <li><a href="#" className='twitter'><FiTwitter /></a></li>
                  <li><a href="#" className='instagram'><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://10pearls.com/wp-content/uploads/2023/03/SQA-Engineers.png" className='team-img' alt="pic" height={150} />
              <h3>ELISA JOHANSON</h3>
              <div className='team-info'>
                <p>Marketing Manager</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos?</p>
                <ul className='team-icon'>
                  <li><a href="#" className='facebook'><BsFacebook /></a></li>
                  <li><a href="#" className='twitter'><FiTwitter /></a></li>
                  <li><a href="#" className='instagram'><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://images.medindia.net/amp-images/beauty/skin-care-tips-for-working-women.jpg" className='team-img' alt="pic" height={150} />
              <h3>JOHNATHAN HAWKINS</h3>
              <div className='team-info'>
                <p>Head of SEO</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos?</p>
                <ul className='team-icon'>
                  <li><a href="#" className='facebook'><BsFacebook /></a></li>
                  <li><a href="#" className='twitter'><FiTwitter /></a></li>
                  <li><a href="#" className='instagram'><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}