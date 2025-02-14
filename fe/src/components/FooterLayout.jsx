import { Footer } from "antd/es/layout/layout";
import React from "react";



const FooterLayout = () => {
    return (
        <Footer style={{ background: '#ff6600', padding: '40px', color: 'white', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
                <div>
                    <h2>CASAHOLA</h2>
                    <p>Book your trip in minutes, get full control for much longer.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Mobile</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Help/FAQ</p>
                    <p>Press</p>
                    <p>Affiliates</p>
                </div>
                <div>
                    <h3>More</h3>
                    <p>Airline Fees</p>
                    <p>Airline</p>
                    <p>Low fare tips</p>
                </div>
                <div>
                    <h3>Discover our app</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <img src="/google-play.png" alt="Google Play" style={{ width: '120px' }} />
                        <img src="/app-store.png" alt="App Store" style={{ width: '120px' }} />
                    </div>
                </div>
            </div>
            <p style={{ marginTop: '20px' }}>All rights reserved @casahola.co</p>
        </Footer>
    );
}

export default FooterLayout;