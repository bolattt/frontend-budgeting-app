import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

// const API = process.env.REACT_APP_LOCALHOST;
const API = process.env.REACT_APP_API_URL;
export default function Home() {
  const { data, error, loading } = useFetch(API);

  console.log(data);

  return (
    <div className="home mt-5 p-5">
      <h1 className="text-3xl text-right mr-20 mb-10 dark:text-white">
        Balance: ${data ? data.reduce((a, b) => a + b.amount, 0) : 0}{" "}
      </h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((t, i) => (
                <tr
                  className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {t.date}
                  </th>
                  <td
                    className="px-6 py-4 underline decoration-solid
"
                  >
                    <Link to={`/transactions/${i}`}>{t.name}</Link>
                  </td>
                  <td className="px-6 py-4">{t.category}</td>
                  <td className="px-6 py-4">{t.from}</td>

                  <td className="px-6 py-4">
                    {t.amount < 0
                      ? "-$" + t.amount.toString().slice(1)
                      : "$" + t.amount}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {error && <div>Something went wrong!</div>}
      </div>
      {loading && (
        <div className=" absolute text-center flex flex-col items-center justify-center h-full w-full top-0">
          <Spinner aria-label="Large spinner example" size="lg" />
        </div>
      )}
    </div>
  );
}
