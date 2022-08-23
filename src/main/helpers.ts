import { rejects } from 'assert';
import fs from 'fs'

export function readFile(file: any) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    })

}


const createImage + (url: String ) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () => reject(err));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;

  })
}

export async function saveCroppedImage(filename, imageSrc, croppedAreaPixels) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')
}
