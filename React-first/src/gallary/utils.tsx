import { avtarProps } from "./Avatar";

export function getImageurl({person, size = 's'}: avtarProps) {
    return (
         'https://i.imgur.com/' + 
         person.imageId +
         size +
         '.jpg'
     );
}
