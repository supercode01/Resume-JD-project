// src/pages/CoverLetter.js
import { useState } from "react";

export default function CoverLetter() {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  return (
    <section>
      <div className="mt-10 rounded-3xl bg-white ring-1 ring-gray-200 p-8 md:p-14 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT */}
          <div>
            <h1 className="pb-5 text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Perfect Cover Letter 
            </h1>
            <p className="mt-1 text-sm font-medium text-gray-500 tracking-wide">
              A strong cover letter can turn your application into an opportunity. With just your job description, our AI creates a personalized cover letter that highlights your skills and makes you stand out from the crowd. Get started now and land your dream job!
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold
                         bg-teal-600 text-white hover:bg-teal-700 focus:ring-2
                         focus:ring-offset-2 focus:ring-teal-600"
            >
              Get Start
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="/images/cover-letter-example-01.jpg" 
              alt="Cover letter preview"
              className="w-full max-w-md mx-auto rounded-xl shadow-xl hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
      

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-1/2 top-1/2 w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2
                          rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-semibold">Enter your job description</h2>

            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Example: Frontend Developer role; React, Tailwind, REST APIs…"
              className="mt-4 h-40 w-full resize-none rounded-xl border border-gray-300 p-3
                         focus:border-teal-600 focus:ring-2 focus:ring-teal-600/30 outline-none"
            />

            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                className="rounded-full px-4 py-2 border border-gray-300"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-full px-5 py-2 bg-teal-600 text-white font-semibold hover:bg-teal-700"
                onClick={() => {
                  console.log(desc); // yahan baad me AI call aayegi
                  setOpen(false);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
