import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href="https://drive.google.com/file/d/1SvcBAQ-FuQ_ut9vxQ_AlHk52vf0qn-W9/view?usp=drive_link"
      target="_blank"
    >
      <button
        type="button"
        className="flex items-center text-md px-4 py-3 rounded-full bg-spotify-green  font-semibold hover:bg-spotify-dark-green gap-2"
      >
        {name}
        <IoCloudDownloadOutline className="text-xl" />
      </button>
    </a>
  );
}
