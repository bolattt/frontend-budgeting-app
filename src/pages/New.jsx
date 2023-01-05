import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function New() {
  const navigate = useNavigate();
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
      .then((data) => navigate("/"))
      .catch((error) => setError(error));
  }

  return (
    <div className="new-transaction lg:w-1/3 md:w-3/5 sm:w-5/6  mx-auto">
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
    </div>
  );
}
