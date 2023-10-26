import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="col">
          <h4>MST news</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magni beatae saepe dolor aut repellat eum asperiores libero quas atque reprehenderit velit, minima impedit expedita corrupti laudantium recusandae eveniet adipisci.

          </p>
          <div className="socialLinks">
            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
          </div>

        </div>
        <div className="col">
          <h4>support</h4>
          <ul>
              <li><a href="">FAQ</a></li>
              <li><a href="">privacy policy</a></li>
              <li><a href="">help</a></li>
              <li><a href="">contact</a></li>
            </ul>
        </div>
        <div className="col">
        <h4>contact us</h4>
        <ul className='contact'>
          <li>
            <i className="fa-solid fa-phone"></i>
            <span>+212648968016</span>
          </li>
          <li >
            <i className="fa-solid fa-envelope"></i>
            <span>mstNews@gmail.com</span>
          </li>
        </ul>
          
        </div>
      </div>
      <div className="copyright">
        &copy; copyright 2023 MST, All rights reserved.
      </div>
    </div>
  )
}

export default Footer