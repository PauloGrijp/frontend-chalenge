import Loader from "react-loader-spinner";

import './loading.scss'

function Loading() {
  return (
    <div className="loading">
      <Loader
        type="Oval"
        color="#eba41736"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default Loading;
