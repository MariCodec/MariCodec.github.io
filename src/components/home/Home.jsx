import "./home.scss";
import images from "./slider/dataSlider";
import Slider from "./slider/Slider";
import aboutImg from "./slider/about-img/brio.webp";
import { useState, useEffect } from "react";
const Home = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <Slider slides={images} />

      <main>
        <section className="about">
          <div
            className={
              scroll < 90 || scroll > 400 ? "about-content" : "content-active"
            }
          >
            <div className="about__text">
              <div
                className={scroll < 90 ? "about__text-title" : "title-visible"}
              >
                welkome to brio!
              </div>
              <div className="about__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                est debitis commodi veniam, quasi tempora eligendi alias eos
                impedit deserunt illum. Enim autem sequi iusto minus impedit sit
                facere eum? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Qui ipsa optio nulla, ad suscipit placeat, labore rerum
                ducimus maxime ab expedita dignissimos, ipsum quibusdam quia
                recusandae architecto dicta quaerat culpa.
              </div>
            </div>
            <div className="about-images">
              {/* !!!! */}
              {/* слайдер вертикальний  або зміну на скролі*/}
              <img className="image" src={aboutImg} alt="" />
            </div>
          </div>
        </section>
        <section>delivery</section>
      </main>
    </div>
  );
};

export default Home;
