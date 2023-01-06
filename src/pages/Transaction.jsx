import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button } from "flowbite-react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Transaction() {
  const { index } = useParams();
  const navigate = useNavigate();
  const { data, error } = useFetch(API + "/" + index);

  function handleDelete() {
    axios
      .delete(API + "/" + index)
      .then((data) => navigate("/"))
      .catch((error) => console.log(error));
  }

  console.log(data);
  return (
    <div className="transaction lg:w-3/5 md:w-4/5 sm:w-10/12 mx-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {data && (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.date}
                </th>
                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">{data.category}</td>
                <td className="px-6 py-4">{data.from}</td>

                <td className="px-6 py-4">
                  {data.amount < 0
                    ? "-$" + data.amount.toString().slice(1)
                    : "$" + data.amount}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-3 mt-5 mx-auto  justify-center ">
        <div>
          <Link to="/">
            <Button size="lg" gradientDuoTone="purpleToBlue">
              Back
            </Button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <Button size="lg" gradientDuoTone="cyanToBlue">
              Edit
            </Button>
          </Link>
        </div>
        <div>
          <Button
            size="lg"
            gradientDuoTone="greenToBlue"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
      {error && <div>Something went wrong!</div>}
    </div>
  );
}
