import React, { useState } from 'react';
import Compressor from 'compressorjs';
import { saveAs } from 'file-saver';

function ImageCompressor() {
  const [compressedImage, setCompressedImage] = useState();

  const compressedImageHadler = (e) => {
    const image = e.target.files[0];
    // console.log('before: ', image);
    const res = new Compressor(image, {
      quality: 0.8,
      height: 300,
      width: 600,
      resize: 'cover',
      success: (res) => {
        setCompressedImage(URL.createObjectURL(res));
        // console.log('After ', res);
      },
    });
  };

  const downloadImage = () => {
    if (!compressedImage) {
      return;
    }
    saveAs(compressedImage, 'image.jpg');
  };

  // console.log(compressedImage);

  return (
    <>
      <div style={{ marginBotton: '30px' }}>
        <input type='file' onChange={compressedImageHadler} />
      </div>
      <div>
        <img
          style={{ border: '1px solid black', marignTop: '30px' }}
          src={compressedImage}
        />
      </div>

      <button onClick={downloadImage}>Download</button>
    </>
  );
}

export default ImageCompressor;
