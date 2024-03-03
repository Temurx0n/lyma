
import './App.css';
import logo from './assets/images/Site map.svg';
import item_img from './assets/images/3.png';
import mess from './assets/images/icon/1a (1).svg'
import mess1 from './assets/images/icon/1a (2).svg'
import mess2 from './assets/images/icon/3.svg'
import mess3 from './assets/images/icon/4.svg'
import mess4 from './assets/images/icon/5.svg'

function App() {

  return (

    <div className="container">
      <header className="header">
        <div className="menu_group">
          <a href="#" className="menu">SUPPLEMENT </a>
          <a href="#" className="menu">LASER</a>
          <a href="#" className="menu">REVIEWS</a>
          <a href="#" className="menu">JOURNAL</a>
          <a href="#" className="menu">ABOUT</a>
        </div>
        <img className='logo' src={logo} alt="" />
        <div className="menu2_group">
          <a href="" className="menu">HELP & SUPPORT</a>
          <a href="" className="menu">ACTIVATE</a>
          <a href="" className="menu">ACCOUNT</a>
          <button className="header_btn">BUY</button>
        </div>
      </header>
      <section className="box1">

        <h1 className="box1_h1">
          THE FUTURE OF WELLNESS.
        </h1>
        <p className="box1_p">The perfect balance of science, nature and technology. Prepare to look and feel your absolute best.</p>
        <button className="box1_btn">SUPPLEMENT</button>
        <button className="box1_btn2">LASER</button>
      </section><br />
      <section className="box2">
        <div className="box2_div">

          <h1 className="box2_h1">
            Supplement.
          </h1>
          <p className="box2_p">Nine powerful ingredients. <br />One ultimate formula. </p>
          <div className="box2_text">
            <h2 className="box2_h2">DISCOVER</h2>
            <h3 className="box2_h2">BUY</h3>
          </div>


        </div>
        <div className="box2_div2">
          <h1 className="box2_h1">
            Laser.
          </h1>
          <p className="box2_p">Ultimate skin regeneration.<br />A new dawn for beauty. </p>
          <div className="box2_text">
            <h2 className="box2_h2">DISCOVER</h2>
            <h3 className="box2_h2">BUY</h3>
          </div>
        </div>
      </section>
      <section className="box3"><br />
        <div className="box3_div">
          <h1 className="box3_h">THE QUEST FOR BETTER.</h1><br />
          <img src={item_img} alt="" />
          <p className="box3_p">
            At LYMA, we’re always searching for the perfect balance of science, nature and technology. Every LYMA product has been designed
            to work together. We know that when we discover the best, you’ll discover yours.</p>
        </div>
      </section>
      <section className="box4">

        <h1 className="box1_h1">
          Wellness innovation at its scientific best.
        </h1>
        <button className="box1_btn">SUPPLEMENT</button>
        <button className="box1_btn2">LASER</button>
      </section>
      <section className="box5">
        <div className="box5_text">
          <h2 className="box5_h">Meet our founder.</h2>
          <p className="box5_p">Lucy’s story is one you really need to read; it changed an industry forever.</p>
          <h4 className="box5_h4">READ MORE</h4>
        </div>
      </section>
      <footer className="footer">
        <div className="footer_left">
          <div className="footer_text_group">
            <h4 className='text_h4'>SUPPLEMENT</h4><br />
            <h5>Benefits</h5>
            <h5>Formula</h5>
            <h5>Immunity</h5>
            <h5>Journal</h5>
            <h5>Reviews</h5>
            <h5 className='text_buy'>Buy</h5>
          </div>
          <div className="footer_text_group">
            <h4 className='text_h4'>SUPPLEMENT</h4><br />
            <h5>LYMA Laser</h5>
            <h5>Active Mist</h5>
            <h5>Priming Serum</h5>
            <h5>Technology</h5>
            <h5>Results</h5>
            <h5>Journal</h5>
            <h5>Reviews</h5>
            <h5 className='text_buy'>Buy</h5>
          </div>
          <div className="footer_text_group">
            <h4 className='text_h4'>ABOUT</h4><br />
            <h5>About</h5>
            <h5>Journal</h5>
            <h5>FAQs</h5>
            <h5>Contact</h5>
            <h5>Terms</h5>
            <h5>Privacy</h5>
            <h5>Warranty</h5>

          </div>
          <div className="footer_text_group">
            <h4 className='text_h4'>ACCOUNT</h4><br />
            <h5>Activate</h5>
            <h5>My subscription</h5>
            <h5>Add extras</h5>
            <h5>My orders</h5>
            <h5>Account details</h5>
            <h5>Payment method</h5>
            <h5>Login details</h5>
          </div>
        </div>
        <div className="footer_right">
          <h4 className='text1_h4'>NEWSLETTER</h4>
          <h5 className='text_p'>Subscribe to our newsletter.</h5>
          <div className="right_a">
            <input type="text" className="text_input" placeholder='LYMA Newsletter' />
            <button className="text_btn">SIGN UP</button>
          </div><br /><br />
          <div className="footer_mess">
            <a href="https://www.youtube.com/"><img src={mess} alt="" /></a>
            <a href="https://ru.linkedin.com/"> <img src={mess1} alt="" /></a>
            <a href="https://www.facebook.com/campaign/landing.php?&campaign_id=11554070363&extra_1=s%7Cc%7C518929547027%7Ce%7Cfacebook%7C&placement=&creative=518929547027&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9075980%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZssFvasZhHIjQlwNGVYn_yy2LmPJb202gresyVYMFayJc3FtOdUP7hoC7cIQAvD_BwE"><img src={mess3} alt="" /></a>
            <a href="https://www.instagram.com/"><img src={mess4} alt="" /></a>
            <a href="https://www.pinterest.com/"><img src={mess2} alt="" /></a>
          </div>
          <h5 className='text_p1'>© LYMA Life Ltd. 2021</h5>
        </div>
      </footer>



      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    </div>
  );
}

export default App;
