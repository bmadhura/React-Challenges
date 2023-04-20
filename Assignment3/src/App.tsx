import { useState } from 'react';
import Styles from './App.module.scss';

const App = () => {
  const [imageList, updateImageList] = useState<{ id: number, link: string, isVisible: boolean }[]>([
    { id: 0, link: 'https://images.unsplash.com/photo-1516825513084-7a3397fcd108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', isVisible: true },
    { id: 1, link: 'https://images.unsplash.com/photo-1681673211977-2d3274d07ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', isVisible: true },
    { id: 2, link: 'https://images.unsplash.com/photo-1681823325167-6d8e4bf137f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', isVisible: true },
    { id: 3, link: 'https://images.unsplash.com/photo-1611222566295-885a2c99153a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', isVisible: true },
  ]);

  const [currentImageIndex, updateImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex >= imageList.length - 1) { return } else {
      if (imageList[currentImageIndex + 1].isVisible) {
        updateImageIndex(currentImageIndex + 1);
      }
    }
  }

  const previousImage = () => {
    if (currentImageIndex <= 0) { return } else {
      if (imageList[currentImageIndex - 1].isVisible) {
        updateImageIndex(currentImageIndex - 1);
      }
    }
  }

  const hideImage = (id: number) => {
    const imageListClone = [...imageList];
    imageListClone.filter(img => {
      if (img.id == id) {
        img.isVisible = false;
      }
    });

    imageListClone.filter(img => img.isVisible == true);
    if (currentImageIndex === imageListClone.length - 1) {
      updateImageIndex(0);
    }
    updateImageList(imageListClone);
  }

  return (
    <div className={Styles.page}>
      <div className={Styles.buttonContainer}>
        <button className={Styles.button} onClick={previousImage}>back</button>
      </div>
      <div className={Styles.imagesContainer}>
        <button className={[Styles.button, Styles.hide].join(" ")} onClick={() => hideImage(currentImageIndex)}>Hide</button>
        {imageList[currentImageIndex].isVisible ? <img className={Styles.image} src={imageList[currentImageIndex].link} alt="" /> : <img className={Styles.image} src={imageList[currentImageIndex + 1].link} alt="" />}
      </div>
      <div className={Styles.buttonContainer}>
        <button className={Styles.button} onClick={nextImage}>next</button>
      </div>
    </div>
  )
}

export default App;