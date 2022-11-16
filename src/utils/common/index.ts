import fs from 'fs'


export function getImagePath(name: string, localPath: string){
    const path = './public/' + localPath
    const files = fs.readdirSync(path)
    const currentName = files.find(item => item.match(`${name}_.+`))
    return localPath + '/' + currentName
  }

export function duplicateImageAndRemoveSuffix(name: string, localPath: string){
    const source = './public/' + getImagePath(name, localPath)
    const target = source.replace(new RegExp(`(${name})(_\\d\+)(\\.)`), "$1$3")
    fs.copyFile(source, target, (err) => {
    if (err) throw err;
    });
}