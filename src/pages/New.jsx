import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label, TextInput, Button, Toast } from "flowbite-react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function New() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .post(API, data)
      .then((data) => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => setError(error));
  }

  return (
    <div className="new-transaction w-10/12 lg:w-1/3 md:w-3/5 sm:w-5/6  mx-auto pt-16  ">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="date" value="Date" />
          </div>
          <TextInput
            id="date"
            type="date"
            placeholder="name@flowbite.com"
            required={true}
            value={data.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            required={true}
            placeholder="coffee"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="amount" value="Amount" />
          </div>
          <TextInput
            id="amount"
            type="number"
            placeholder="50"
            required={true}
            value={data.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="from" value="From" />
          </div>
          <TextInput
            id="from"
            type="text"
            placeholder="Starbucks"
            required={true}
            value={data.from}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="category" value="Category" />
          </div>
          <TextInput
            id="category"
            type="text"
            placeholder="food"
            required={true}
            value={data.category}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>

      {error && <div>Something went wrong!</div>}
      {success && (
        <div className="flex flex-col gap-4 absolute top-5 right-5">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              {/* <HiCheck className="h-5 w-5" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal">
              Item created successfully.
            </div>

            <Toast.Toggle />
          </Toast>
        </div>
      )}
    </div>
  );
}
