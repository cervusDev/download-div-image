import React from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'

export const DownloadDivs = React.forwardRef(({ imageRef }, ref) => {
  const imgRef = React.useRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
    ref: imgRef,
  });

  React.useEffect(() => {
    console.log("image", image);
  }, [image]);

  const download = React.useCallback((image, { name = "img", extension = "jpg" } = {}) => {
    const element = document.createElement("a");
    element.href = image;
    element.download = createFileName(extension, name);
    element.click();
  },[]);

  React.useImperativeHandle(ref, () => ({
    downloadScreenshot: () => takeScreenShot(imgRef).then(res => download(res.image, { name: "download", extension: "jpg" }))
  }),[takeScreenShot, download]);

  return <div id={imageRef} ref={imgRef}>Example Div</div>;
});
