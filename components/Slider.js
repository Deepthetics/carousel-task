import dynamic from 'next/dynamic'
import 'tiny-slider/dist/tiny-slider.css'
import Slide from './Slide'

const Slider = () => {
  const TNSCarousel = dynamic(() => import('tiny-slider-react'), {
    ssr: false
  })

  const sliderSettings = {
    container: '.slider',
    controlsContainer: '#controls',
    prevButton: '.prev',
    nextButton: '.next',
    'speed': 800,
    'nav': false,
    rewind: true,
    responsive: {
      1600: {
        'items': 4,
        'gutter': 20,
        'slideBy': 4
      },
      1080: {
        'items': 3,
        'gutter': 20,
        'slideBy': 3
      },
      720: {
        'items': 2,
        'gutter': 20,
        'slideBy': 2
      },
      480: {
        'items': 1,
        'gutter': 20,
        'slideBy': 1
      }
    }
  }

  const slideNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className='container'>
      <div className='subcontainer'>
        <div className='slider-wrapper'>
          <div className='controller'>
            <div>
              <h2>Best of adidas</h2>
            </div>
            <div id='controls'>
              <button className='prev'><i id='left-angle' className='fa-sharp fa-solid fa-angle-left'></i></button>
              <button className='next'><i id='right-angle' className='fa-sharp fa-solid fa-angle-right'></i></button>
            </div>
          </div>
          <br />
          <TNSCarousel className='slider' settings={sliderSettings}>
            {slideNumbers.map((slideNumber) => (
              <Slide key={slideNumber} slideNumber={slideNumber} />
            ))}
          </TNSCarousel>
        </div>
      </div>
    </div>
  )
}

export default Slider
