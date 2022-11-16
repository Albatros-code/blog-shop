import fs from 'fs'
import axios from 'axios'

const downloadImage = (url: string, imagepath: string, imageName: string) => {
  const dotExtension = url.substring(url.lastIndexOf('.'), url.length)
  const saveTo = (imagepath.endsWith('/') ? imagepath : imagepath + '/') + imageName + dotExtension

  if (!fs.existsSync(imagepath)) {
    fs.mkdirSync(imagepath, { recursive: true })
  }

  return {
    fileName: imageName + dotExtension,
    localPath: saveTo.replace('./public',''),
    promise: axios({
      url,
      responseType: 'stream'
    }).then(
      async response =>
        await new Promise<string>((resolve, reject) => {
          response.data
            .pipe(fs.createWriteStream(saveTo))
            .on('finish', () => { resolve(imageName + dotExtension) })
            .on('error', (e: any) => reject(e))
        })
    )
    .catch(e => Promise.reject(e))
  }
}

export default downloadImage
