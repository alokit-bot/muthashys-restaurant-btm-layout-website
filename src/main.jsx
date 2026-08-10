import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Phone, Star, Clock, Users, ShoppingBag, Utensils, Leaf, Quote, Navigation, ChefHat } from 'lucide-react';
import './styles.css';

const phoneHref = 'tel:+918042274488';
const phoneText = '+91 80 4227 4488';
const mapsHref = 'https://www.google.com/maps/search/?api=1&query=Muthashy%27s%20Restaurant%20BTM%20Layout%20Bengaluru';
const address = '3, 1st Floor, Brindavan Complex, 1st E Cross Road, 20th Main Rd, near Gangotri Bar And Restaurant, Old Madiwala, BTM 1st Stage, Bengaluru, Karnataka 560029';

const stats = [
  ['4.1★', 'Google rating'],
  ['6,700+', 'Reviews & counting'],
  ['3', 'Cuisines, one kitchen'],
];

const gallery = [
  ['Kerala meals, served the traditional way', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=85'],
  ['Fragrant, freshly-layered biryani', 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=85'],
  ['Wok-tossed Indo-Chinese favourites', 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=85'],
  ['Crisp dosas straight off the griddle', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85'],
  ['Hot vadas for the evening chai crowd', 'https://images.pexels.com/photos/13243817/pexels-photo-13243817.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  ['Slow-simmered curries, nadan style', 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=1200&q=85'],
];

const menu = {
  'Kerala Specials': {
    note: "Comfort classics from God's own country",
    items: [
      ['Appam & Kadala / Veg Stew', 'Soft lace-edged appams with mildly spiced coconut gravy.', '₹120'],
      ['Kerala Parotta (2 pc) & Curry', 'Flaky layered parottas with chicken, veg or egg curry.', '₹150'],
      ['Kerala Fish Curry Meals', 'Rice, fish curry, thoran, rasam and pickle on a full plate.', '₹220'],
      ['Nadan Chicken Curry', 'Country-style chicken simmered in roasted coconut masala.', '₹210'],
      ['Egg Roast', 'Boiled eggs tossed in slow-cooked onion-tomato masala.', '₹130'],
      ['Kerala Special Meals', 'Rice with rotating curries, thoran, sambar and rasam.', '₹180'],
    ],
  },
  'South Indian': {
    note: 'Reliable tiffin, meals and everyday comfort plates',
    items: [
      ['Veg Meals', 'Rice, sambar, rasam, poriyal, curd and pickle.', '₹150'],
      ['Masala Dosa', 'Crisp dosa with potato masala, chutney and sambar.', '₹95'],
      ['Idli / Vada Combo', 'Steamed idlis, hot vada, chutney and sambar.', '₹80'],
      ['Curd Rice', 'Cooling curd rice finished with tempering and pickle.', '₹90'],
      ['South Indian Biryani', 'Fragrant rice with veg, egg or chicken options.', '₹170'],
      ['Ghee Roast Dosa', 'Paper-thin dosa with a generous ghee finish.', '₹110'],
    ],
  },
  'Chinese': {
    note: 'Familiar Indo-Chinese plates for the whole table',
    items: [
      ['Veg Fried Rice', 'Wok-tossed rice with vegetables and spring onion.', '₹140'],
      ['Chicken Fried Rice', 'Classic street-style chicken fried rice.', '₹180'],
      ['Schezwan Noodles', 'Noodles tossed in a spicy red chilli sauce.', '₹160'],
      ['Gobi Manchurian', 'Crisp cauliflower in a tangy Indo-Chinese glaze.', '₹130'],
      ['Chilli Chicken', 'Chicken, capsicum and onion tossed on high heat.', '₹220'],
      ['Hot & Sour Soup', 'Peppery soup with vegetables or chicken.', '₹100'],
    ],
  },
  'Beverages & Quick Bites': {
    note: 'Easy add-ons for lunch, dinner and takeaway',
    items: [
      ['Filter Coffee', 'South Indian coffee, hot and strong.', '₹35'],
      ['Fresh Lime Soda', 'Sweet, salted or mixed.', '₹70'],
      ['Masala Chai', 'Hot tea with spices and milk.', '₹30'],
      ['Chicken Kebab', 'Crisp, spicy starter for sharing.', '₹190'],
      ['Paneer Chilli', 'Paneer tossed with chilli, onion and capsicum.', '₹180'],
      ['Fruit Juice', 'Seasonal fresh juice options.', '₹80'],
    ],
  },
};

const reasons = [
  [Star, '4.1★ from 6,700+ reviews', "One of BTM's most-reviewed restaurants, with a trust signal you can taste."],
  [MapPin, 'Easy to find', 'Brindavan Complex on 20th Main Road, near Gangotri Bar & Restaurant.'],
  [Users, 'Family-friendly seating', 'Comfortable dine-in room for families, regulars and office groups alike.'],
  [ShoppingBag, 'Takeaway-friendly', 'Call ahead and pick up favourites for lunch, dinner or the way home.'],
  [Utensils, 'Three cuisines, one kitchen', 'Kerala, South Indian and Indo-Chinese, so everyone finds their dish.'],
  [Clock, 'Open lunch to dinner', 'Daily around 12:00 PM to 10:30 PM. Call to confirm current hours.'],
];

const quotes = [
  ['A dependable BTM spot when you want a proper South Indian meal without overthinking it.', 'Regular diner', 'BTM 1st Stage'],
  ['Good for family lunch, quick takeaway, and comfort-food cravings.', 'Local family', 'Old Madiwala'],
  ['The Kerala-style dishes and Chinese options make it easy for everyone at the table.', 'Office group', 'Weekday lunch'],
  ['Easy to find on 20th Main Road and convenient for Old Madiwala and BTM 1st Stage.', 'First-time visitor', '20th Main Road'],
];

function App() {
  return (
    <div className="site" id="top">
      <header className="nav">
        <a href="#top" className="brand" aria-label="Muthashy's Restaurant home">
          <span className="brand-mark">M</span>
          <span><strong>Muthashy's</strong><small>Kerala · South Indian · Chinese</small></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#why">Why Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="nav-actions">
          <a href={mapsHref} className="btn ghost"><Navigation size={16}/> Directions</a>
          <a href={phoneHref} className="btn"><Phone size={16}/> Call</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><Leaf size={16}/> 4.1 · 6,700+ Google reviews</p>
            <h1>BTM's trusted Kerala, South Indian & Chinese family restaurant.</h1>
            <p className="lead">A busy neighbourhood dining room in Old Madiwala, serving comfort food for family lunches, office meals and easy takeaway from Brindavan Complex.</p>
            <div className="hero-ctas">
              <a href={phoneHref} className="btn big"><Phone size={18}/> Call to Order / Reserve</a>
              <a href={mapsHref} className="btn big ghost"><MapPin size={18}/> Get Directions</a>
            </div>
            <div className="hero-facts">
              <span><Clock size={16}/> Open daily · 12:00 PM – 10:30 PM</span>
              <span><MapPin size={16}/> BTM Layout, Bengaluru</span>
            </div>
          </div>
          <div className="hero-card">
            <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1400&q=85" alt="South Indian meal served on a banana leaf" />
            <div className="floating-badge top"><strong>4.1★</strong><span>Google rating</span></div>
            <div className="floating-badge bottom"><strong>6,700+</strong><span>reviews & counting</span></div>
          </div>
        </section>

        <section className="story section">
          <div className="story-card">
            <p className="eyebrow">Our story</p>
            <h2>A neighbourhood table in Brindavan Complex.</h2>
            <p>Tucked on the 1st floor of Brindavan Complex on 20th Main Road, Muthashy's has grown into a dependable BTM favourite. The kitchen brings together Kerala and South Indian comfort food people grew up on, from appam and stew to parotta and curry, dosas and full meals, alongside the Indo-Chinese plates the whole table loves.</p>
            <p>Whether it is a family lunch, a quick office meal or a takeaway on the way home, the experience stays warm, generous and easy, the way a good local restaurant should be.</p>
          </div>
          <div className="stats-grid">
            {stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="section menu" id="menu">
          <div className="section-head">
            <p className="eyebrow"><ChefHat size={16}/> Popular picks</p>
            <h2>Sample favourites from the kitchen.</h2>
            <p>A taste of what locals order. Prices are indicative in ₹, and availability may vary by day.</p>
          </div>
          <div className="menu-grid">
            {Object.entries(menu).map(([category, data]) => (
              <article className="menu-card" key={category}>
                <div className="menu-card-head">
                  <h3>{category}</h3>
                  <p>{data.note}</p>
                </div>
                <div className="menu-items">
                  {data.items.map(([name, desc, price]) => (
                    <div className="menu-item" key={name}>
                      <div><strong>{name}</strong><span>{desc}</span></div>
                      <em>{price}</em>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <a className="btn menu-call" href={phoneHref}><Phone size={18}/> Call to order · {phoneText}</a>
        </section>

        <section className="why" id="why">
          <div className="section-head inverted">
            <p className="eyebrow">Why locals choose us</p>
            <h2>A proven local place, made easy.</h2>
          </div>
          <div className="reason-grid">
            {reasons.map(([Icon, title, body]) => (
              <article className="reason" key={title}>
                <Icon size={24}/>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section-head">
            <p className="eyebrow">From our kitchen</p>
            <h2>A little taste of the table.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map(([caption, img]) => (
              <figure key={caption}>
                <img src={img} alt={caption} loading="lazy" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="testimonials section">
          <div className="section-head">
            <p className="eyebrow">What locals say</p>
            <h2>Loved across BTM & Old Madiwala.</h2>
            <p>4.1 · 6,700+ Google reviews</p>
          </div>
          <div className="quote-grid">
            {quotes.map(([quote, author, location]) => (
              <article className="quote-card" key={quote}>
                <Quote size={28}/>
                <p>“{quote}”</p>
                <strong>{author}</strong>
                <span>{location}</span>
              </article>
            ))}
          </div>
          <p className="quote-note">Quotes reflect common local sentiment and are illustrative, not exact verbatim reviews.</p>
        </section>

        <section className="visit" id="visit">
          <div>
            <p className="eyebrow">Visit / Contact</p>
            <h2>Come in, call ahead, or grab takeaway.</h2>
            <p>Landmark: Brindavan Complex, 20th Main Road, near Gangotri Bar & Restaurant, Old Madiwala.</p>
          </div>
          <div className="contact-card">
            <a href={mapsHref}><MapPin size={22}/><span><strong>Address</strong>{address}</span></a>
            <a href={phoneHref}><Phone size={22}/><span><strong>Call us</strong>{phoneText}</span></a>
            <div><Clock size={22}/><span><strong>Hours</strong>Open daily, around 12:00 PM – 10:30 PM</span></div>
            <a href={mapsHref} className="btn wide"><Navigation size={18}/> Get Directions on Google Maps</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="brand-mark">M</span>
          <h3>Muthashy's Restaurant</h3>
          <p>BTM's trusted Kerala, South Indian & Chinese family restaurant. Comfort food, generous plates, easy takeaway.</p>
          <small>★ 4.1 · 6,700+ reviews</small>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#menu">Menu</a><a href="#why">Why Us</a><a href="#gallery">Gallery</a><a href="#visit">Visit</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={phoneHref}>{phoneText}</a>
          <a href={mapsHref}>{address}</a>
          <span>Open daily · 12:00 PM – 10:30 PM</span>
        </div>
      </footer>

      <div className="mobile-sticky">
        <a href={phoneHref}><Phone size={18}/> Call Now</a>
        <a href={mapsHref}><MapPin size={18}/> Map</a>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
