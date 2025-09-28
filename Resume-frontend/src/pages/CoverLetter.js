import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CoverLetter() {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!desc.trim()) {
      alert("Please enter a Job Description!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("job_desc", desc);

      const res = await fetch("http://localhost:5000/cover-letter", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        // Save to sessionStorage so refresh keeps result
        try {
          sessionStorage.setItem("cover_letter", data.cover_letter);
        } catch (e) {
          console.error("SessionStorage error:", e);
        }

        // Navigate to result page with state
        navigate("/result_coverLetter", { state: { cover_letter: data.cover_letter } });
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please check your backend.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <section>
      <div
        className="px-8 py-8 pt-24 md:p-14 rounded-3xl 
             bg-gray-100 dark:bg-gray-800 dark:text-white
             bg-gradient-to-r from-green-100 via-purple-100 to-blue-100 
             dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
             shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT */}
          <div className="mt-20 pl-10 self-start">
            <h1
              className="pb-5 text-4xl md:text-5xl font-serif font-bold 
                           text-slate-900 dark:text-slate-100 leading-tight"
            >
              Perfect Cover Letter
            </h1>
            <p
              className="mt-1 text-sm font-medium 
                          text-gray-600 dark:text-gray-300 tracking-wide"
            >
              A strong cover letter can turn your application into an
              opportunity. With just your job description, our AI creates a
              personalized cover letter that highlights your skills and makes
              you stand out from the crowd. Get started now and land your dream
              job!
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-8 inline-flex items-center justify-center rounded-full 
                         px-6 py-3 text-base font-semibold
                         bg-teal-600 text-white hover:bg-teal-700 
                         focus:ring-2 focus:ring-offset-2 
                         focus:ring-teal-600 dark:focus:ring-offset-gray-900"
            >
              Get Start
            </button>
          </div>

          {/* RIGHT */}
          <div className="pt-[30px] relative">
            <img
              src="/images/cover-letter-example-01.jpg"
              alt="Cover letter preview"
              className="w-full max-w-sm mx-auto rounded-xl shadow-xl hover:shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute left-1/2 top-1/2 w-[min(90vw,640px)] 
                          -translate-x-1/2 -translate-y-1/2
                          rounded-2xl bg-white dark:bg-gray-800 
                          p-6 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Enter your job description
            </h2>

            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Example: Frontend Developer role; React, Tailwind, REST APIs…"
              className="mt-4 h-40 w-full resize-none rounded-xl 
                         border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 
                         text-gray-800 dark:text-gray-100
                         p-3 focus:border-teal-600 
                         focus:ring-2 focus:ring-teal-600/30 
                         outline-none"
            />

            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                className="rounded-full px-4 py-2 border 
                           border-gray-300 dark:border-gray-600
                           text-gray-700 dark:text-gray-200"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-full px-5 py-2 
                           bg-teal-600 text-white font-semibold 
                           hover:bg-teal-700 disabled:opacity-50"
                onClick={handleGenerate}
                disabled={loading}
              >
                {loading ? "Generating..." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}