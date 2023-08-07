import React from "react";
import "./ExpItem.scss";

const ExpItem = ({ company, job, date, url, desc, techno }) => {
  return (
    <>
      <ol>
        <li className="mb-12">
          <div className="">
            <div className="item_date font-primary text-dark_blue opacity-80 dark:text-light_blue dark:hover:text-dark_blue z-10 mb-2 mt-1 text-md font-semibold uppercase tracking-wide sm:col-span-2">
              {date}
            </div>
            <div className="z-10 col-span-6">
              <h3 className="item_job font-primary text-dark_blue dark:text-grey dark:hover:text-green leading-snug">
                <div>{job}</div>
                <a
                  className="inline-flex items-baseline leading-tight"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="job title"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:block"></span>
                  <span className="inline-block">
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </h3>
              <div className="item_desc mt-2 leading-normal font-primary text-dark_blue dark:text-grey">
                {desc}
              </div>
              <ul
                className="mt-2 flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {techno.map((tech, index) => (
                  <li key={index}>
                    <div className="flex items-center rounded-full bg-light_blue px-3 py-1 font-primary font-bold leading-5 text-dark_blue">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </>
  );
};
export default ExpItem;
