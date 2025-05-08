import { getImageurl } from "./utils";


export interface avtarProps {
  person: {
    name: string,
    imageId: string
  };
  size?: number | string;
};
export default function({person, size}:avtarProps) {
    return (
        <img 
          className="avtar"
          src={getImageurl({person})}
          alt={person.name}
          width={size}
          height={size}
        />
    );
}