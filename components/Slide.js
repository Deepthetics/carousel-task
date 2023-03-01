const Slide = ({ slideNumber }) => {
  return (
    <div>
      <div className='slide'>
        <div className={`slide-image image-${slideNumber}`}>
          <a href='#'></a>
        </div>
        <div>
          <p className='product-name'>{`Product ${slideNumber}`}</p>
          <p className='product-category'>Category</p>
        </div>
      </div>
    </div>    
  )
}

export default Slide
