import './App.css';
import { handlePinchToZoom } from './pinch-to-zoom-helper';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="frontSection">
          <div>Front view</div>
          <div className="previewImage">
            <img
              src="https://templatelab.com/wp-content/uploads/2017/08/proof-of-funds-letter-template-09.jpg"
              alt="document-front"
              id="frontImage"
              onLoad={handlePinchToZoom}
            />
            <div id="frontImageOpacityLayer" className="opacityLayerLight" />
          </div>
        </div>
        <div className="backSection">
          <div>Back view</div>
          <div className="previewImage">
            <img
              src="https://s3.amazonaws.com/static-wiseup-blog.gazetadopovo.com.br/wp-content/uploads/2020/03/05180307/Ronaldinho-688x400.jpg"
              alt="document-back"
              id="backImage"
              onLoad={handlePinchToZoom}
            />
            <div id="backImageOpacityLayer" className="opacityLayerDark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
