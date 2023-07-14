import React from 'react'

export default function About() {
  
  return (
   <>
  <style>
    {`
      .btn {
        --btn-gradient: var(--btn-gradient-from),var(--btn-gradient-to);
        border: 0 none;
        appearance: none;
        transition: all .3s;
        border-radius: 10px;
        background-color: var(--btn-bg);
        box-shadow: 0 0 2px 2px var(--btn-shadow), 0 0 4px 4px var(--btn-shadow), 0 0 8px 8px var(--btn-shadow);
      }
      
      .btn,
      .btn * {
        box-sizing: border-box;
      }
      
      .btn-inner {
        position: relative;
        border-radius: inherit;
        border: 1px solid transparent;
        font-size: 1rem;
        display: flex;
        align-items: center;
        min-width: 10rem;
        padding: 1.5rem 2rem;
        overflow: hidden;
        color: var(--btn-text-color);
      }
      
      .btn-label {
        position: absolute;
        bottom: 1px;
        left: 1px;
        right: 1px;
        top: 1px;
        border-radius: inherit;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--btn-bg);
        background-image: linear-gradient(to bottom,var(--btn-gradient));
      }
      
      .btn:hover {
        transform: translateY(-5px);
        letter-spacing: 3px;
        box-shadow: rgba(0, 131, 253, 0.596) 0px 1px 80px 40px;
      }
      
      .btn:active {
        border-radius: 40px;
        transform: translateY(4px);
        transition: 0.1s;
        letter-spacing: 3px;
        box-shadow: rgb(0, 131, 253) 0px 1px 80px 40px;
      }
      
      .btn:active .btn-blur:before {
        --transition: 0.5s;
      }
      
      .btn--primary {
        --btn-bg: #111111;
        --btn-gradient-from: #111111;
        --btn-gradient-to: rgba(29, 6, 240, 0.5);
        --btn-text-color: #ffffff;
        --btn-shadow: #9b14c438;
      }
      
    `}
  </style>

<div className="heading">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae
        excepturi assumenda provident autem quas.
      </p>
    </div>
    <div className="containter">
      <section className="about">
        <div className="about-image">
          <img src="https://img.freepik.com/free-photo/portrait-business-woman-working-laptop_1303-9727.jpg" />
        </div>
        <div className="about-content ">
          <h2>Warm embrace in a cup</h2>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer
          </p>
          <button class="btn btn--primary">

<span class="btn-inner">
  <span class="btn-label">
    Read More
  </span>
</span>

</button>
        </div>
      </section>
    </div>
  
   </>
  )
}
