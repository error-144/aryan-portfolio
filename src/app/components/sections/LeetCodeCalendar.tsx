// Description: This component displays a LeetCode contributions calendar using the leetcode-calendar package.
import React, { useEffect, useState } from "react";
import LeetCodeCalendar from "leetcode-calendar";

const LeetCodeContributions: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex py-2 px-3 max-lg:col-span-1 max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
      id="contribution"
    >
      {loading ? (
        <div className="rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-spotify-green rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-spotify-green rounded col-span-2"></div>
                  <div className="h-2 bg-spotify-green rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-spotify-green rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full items-center content-center justify-center justify-items-center">
          <LeetCodeCalendar
            username="codeXrabbit" // Change to your LeetCode username
            style={{ width: "100%" }}
            theme={{
              dark: [
                "#161b22", // background
                "#0e4429", // least
                "#006d32", // low
                "#26a641", // medium
                "#39d353"  // most
              ]
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LeetCodeContributions;