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
            {Array(3)
              .fill('')
              .map((_, index) => {
                return (
                  <li className="glide__slide" key={index}>
                    <picture>
                      <img
                        src={`/images/banners/banner-0${index + 1}.jpg`}
                        alt={`Banner 0${index + 1}`}
                      ></img>
                    </picture>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
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
