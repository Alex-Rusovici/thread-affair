import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';

export const HomeCarousel = () => {
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel !== null) {
      new Glide('.glide', {
        type: 'carousel',
      }).mount();
    }
  }, [carousel]);

  return (
    <div className="banner-main-inner">
      <div className="glide" ref={carousel}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <picture>
                <img src="/images/banners/banner-01.jpg" alt="Banner 01"></img>
              </picture>
            </li>
            <li className="glide__slide">
              <picture>
                <img src="/images/banners/banner-02.jpg" alt="Banner 02"></img>
              </picture>
            </li>
            <li className="glide__slide">
              <picture>
                <img src="/images/banners/banner-03.jpg" alt="Banner 03"></img>
              </picture>
            </li>
          </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left button"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right button"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
