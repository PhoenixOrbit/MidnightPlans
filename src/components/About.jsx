export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
        <div className="about-inner">

          {/* "About Us" heading — sits OUTSIDE the frame, white */}
          <h2 id="about-heading" className="about-heading">About Us</h2>

          {/* Lighter purple frame — same colour as the Services frame */}
          <div className="about-frame">

            {/* Bio text inside the frame */}
            <div className="about-bio">
              <p>Hi, I'm Samira, the creator of Midnight Plans.</p>
              <p>
                I specialize in elegant balloon decor and styled celebrations
                for birthdays, baby showers, Persian events, and special moments.
              </p>
              <p>Let's plan something beautiful together.</p>
              <p>
                For bookings, custom quotes, or more information, feel free to
                reach out by email, phone, or Instagram DM.
              </p>
            </div>

            {/*
              Samira photo — overflows top, bottom, and right of the frame.
              ✏️ Image file: /public/images/samira.png
            */}
            <img
              src="/images/samira.png"
              alt="Samira, founder of Midnight Plans Ottawa balloon decoration"
              className="about-img"
            />

          </div>
        </div>
      </section>
  );
}
