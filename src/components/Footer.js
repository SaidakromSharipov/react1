import React from 'react';

function Footer(props) {
   const d = new Date();
   return (
      <div className="footer">
         <p>Created  By IT-Center Kasbi {d.getFullYear()}</p>
      </div>
   );
}

export default Footer;