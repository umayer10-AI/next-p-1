"use client"
import Link from 'next/link';
import React from 'react';

const ZeroLength = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-900 text-white p-6 rounded-2xl">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-yellow-400">No Data Found</h2>
          <p className="text-gray-400 mt-3">
            There is nothing to show here right now. Try adding something or go back.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/">
              <button className="px-5 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600 transition">
                Go Home
              </button>
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
            >
              Reload
            </button>
          </div>
        </div>
      </div>
    );
};

export default ZeroLength;