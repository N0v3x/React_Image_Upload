import React, { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState({
    file: null,
    imagePreviewUrl: ""
  });

  const showImage = e => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <input
        type="file"
        id="src"
        accept=".jpg,.png,.jpeg"
        onChange={e => showImage(e)}
      />
      <img src={image.imagePreviewUrl} />
      <h1>React Dev Server</h1>
    </>
  );
};

export default App;
