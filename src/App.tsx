import './App.css';
import { handlePinchToZoom } from './pinch-to-zoom-helper';

function App() {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const theme = parameters.get('theme');

  let classname = "container";
  if (theme && theme === "1") {
    classname = "container darkContainer";
  }

  return (
    <div className="App">
      <div className={classname}>
        <div>
          <input type={"file"} />
        </div>
        <div className="frontSection">
          <div>Front view</div>
          <div className="previewImage">
            <img
              src="https://templatelab.com/wp-content/uploads/2017/08/proof-of-funds-letter-template-09.jpg"
              alt="document-front"
              id="frontImage"
              onLoad={handlePinchToZoom}
            />
            <div id="frontImageLayer" className="opacityLayer" />
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
            <div id="backImageLayer" className="opacityLayer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
