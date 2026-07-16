import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <Heart size={14} style={{ color: '#ef4444', display: 'inline', verticalAlign: 'middle' }} /> by Ahmad Ansari | Built with React & Love
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
        © 2026 Local Testing. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
