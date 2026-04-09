const Footer = () => {
    return(
        <section className="footerSection">
            <div className="footer">
                <div className="footerdiv1">
                    <h1><span>Yesiki</span> <br /> Foods</h1>
                    <p>Fresh meals, fast delivery — straight to your door in Lagos.</p>
                </div>
                <div className="footerservice">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/menu">Our Menu</a></li>
                        <li><a href="">Bulk Orders</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footersocials">
                    <h2>Reach Us</h2>
                    <ul>
                        <li><a href="https://wa.me/YOURNUMBER?text=Hello%20YesikiFoods!%20I%27d%20like%20to%20place%20an%20order" target="_blank" rel="noreferrer">WhatsApp</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <p className="footerCopy">© 2025 YesikiFoods. All rights reserved.</p>
        </section>
    )
}

export default Footer