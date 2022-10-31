import fs from 'fs'
import axios from 'axios'

/* ============================================================
  Function: Download Image
============================================================ */

const download_image = (url: string, image_path: string) =>
  axios({
    url,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        console.log(process.cwd())
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => {resolve(null)})
          .on('error', (e: any) => reject(e));
      }),
  );

  export default download_image