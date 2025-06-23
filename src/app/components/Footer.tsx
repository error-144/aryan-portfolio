

import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; Aryan&apos;s Portfolio {year ?? ""}, Design By{" "}
        <a
          href="#"
          className="text-spotify-green font-semibold underline"
          target="_blank"
        >
          Aryan
        </a>
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-5">
        Built with NextJS, Tailwind, and Aceternity UI. Check out the source
        code{" "}
        <a
          target="_blank"
          href="https://github.com/error-144/portfolio"
          className="text-spotify-green font-semibold underline"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
