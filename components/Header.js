import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const headerItemProps = [
    { title: "HOME", icon: HomeIcon },
    { title: "TRENDING", icon: LightningBoltIcon },
    { title: "VERIFIED", icon: BadgeCheckIcon },
    { title: "COLLECTIONS", icon: CollectionIcon },
    { title: "ACCOUNT", icon: UserIcon },
    { title: "SEARCH", icon: SearchIcon },
  ];

  const displayItems = () => {
    return headerItemProps.map(({ title, icon }, index) => (
      <HeaderItem key={index} title={title} Icon={icon} />
    ));
  };
  return (
    <header className="flex flex-col sm:flex-row items-center m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-md">
        {displayItems()}
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        alt="hulu-logo"
        width={200}
        height={100}
      />
    </header>
  );
}
