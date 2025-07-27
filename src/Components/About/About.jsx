import "./About.css";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to our platform — a bridge between local vendors and certified food providers.
                Our goal is to simplify and speed up the process of discovering, connecting, and transacting within the local food supply ecosystem.
            </p>

            <h2>What We Do</h2>
            <p>
                We help <strong>vendors</strong> list their needs and <strong>providers</strong> showcase their certified food products.
                By connecting both sides efficiently, we reduce the time and effort needed to complete safe and reliable food transactions.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
                <li>🔗 Seamless Vendor–Provider matching</li>
                <li>📋 Easy onboarding for both parties</li>
                <li>🛡️ Verified FSSAI license handling for providers</li>
                <li>⚡ Fast, secure, and efficient communication</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
                To empower small businesses, promote transparency in the food supply chain, and ensure food safety compliance — all through technology.
            </p>
        </div>
    );
};

export default About;
