import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="bka-details">
        <a className="bka-link" href="http://www.britishkendoassociation.com" target="_blank" rel="noopener noreferrer">Member of the British Kendo Association<img src="/img/bka_logo3.png" alt="BKA Logo" className="bka-logo"/></a>
      </div>
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} Bolton Kendo Club
      </div>
    </div>
  )
}
export default Footer;
