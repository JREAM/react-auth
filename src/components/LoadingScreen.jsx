function LoadingScreen() {

  // This will RENDER within the APP before the COMPONENT so
  // it will show the APP layout but not the ROUTE COMPONENT layout.
  return (

    <div className="row">
      <div className="silver column column-50 column-offset-25">
        <div className="txt-center">
          <b>LOADING</b>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
