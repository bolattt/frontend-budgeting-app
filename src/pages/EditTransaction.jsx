import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditTransaction() {
  const navigate = useNavigate();
  const { index } = useParams();
  const { data, setData } = useFetch(API + "/" + index);

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .put(API + "/" + index, data)
      .then((data) => navigate(`/transactions/${index}`))
      .catch((error) => console.log(error));
  }

  return (
    <div className="new-transaction lg:w-1/3 md:w-3/5 sm:w-5/6  mx-auto pt-20 ">
      {data && (
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
      )}
    </div>
  );
}
