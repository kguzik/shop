import React from 'react';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer(props){
  return (
    <footer className="footer">
      <p>{props.info}</p>
      <div>
        <Link href="https://facebook.com" target="_blank" rel="noopener" variant="body2">
          <FacebookIcon/>
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener" variant="body2">
          <InstagramIcon/>
        </Link>
      </div>
    </footer>
  )
}

export default Footer;