import React from "react";
import { useParams } from "react-router-dom";

export const L1C2Step = () => {
  const { uID } = useParams();
  return (
    <>
      <div class="md:mx-2 mx-4 lg:mb-16 mb-8">
        <nav aria-label="Progress">
          <ol class="flex">
            {uID === "0" ? (
              <>
                <li class="relative pr-4 sm:pr-8">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-yellow-500"></div>
                  </div>
                  <div class="relative w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full">
                    <span class="font-extrabold text-center text-indigo-900">
                      0
                    </span>
                  </div>
                </li>
                <li class="relative pr-4 sm:pr-8">
                  <div class="relative w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                    <span class="text-center text-indigo-900">1</span>
                  </div>
                </li>
              </>
            ) : uID === "1" ? (
              <>
                <li class="relative pr-4 sm:pr-8">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-yellow-500"></div>
                  </div>
                  <div class="relative w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full">
                    <span class="text-center text-indigo-900">0</span>
                  </div>
                </li>
                <li class="relative pr-4 sm:pr-8">
                  <div class="relative w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full">
                    <span class="font-extrabold text-center text-indigo-900">
                      1
                    </span>
                  </div>
                </li>
              </>
            ) : null}
          </ol>
        </nav>
      </div>
    </>
  );
};