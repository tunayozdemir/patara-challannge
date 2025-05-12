import { FC } from "react";
import Image from "next/image";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { UserSelectProps } from "./UserSelect.types"

const SelectBox: FC<UserSelectProps> = ({ userImage, username, onValueChange, items }) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[170px] h-[40px] rounded-xl border border-gray-700 bg-[#1F1F1F] text-white px-2 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image width={32} height={32} src={userImage} alt="User" />
          <span className="text-sm">{username}</span>
        </div>
      </SelectTrigger>

      <SelectContent className="bg-black rounded-xl w-[170px] text-white">
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default SelectBox