export default function getCropedImage(url: string) {
  let target = "media/";

  let index = url.indexOf(target) + target.length;
  // console.log(url.slice(0, index) + target + url.slice(index));
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
