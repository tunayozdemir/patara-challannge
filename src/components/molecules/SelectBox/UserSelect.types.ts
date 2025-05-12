import { StaticImageData } from "next/image";

export interface SelectItemType {
  value: string;
  label: string;
}

export interface UserSelectProps {
  userImage: StaticImageData | string;
  username: string;
  onValueChange: (value: string) => void;
  items: SelectItemType[];
}
