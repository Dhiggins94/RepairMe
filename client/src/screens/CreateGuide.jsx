import { useState } from "react";
import { useParams } from "react-router";
import { postRepairGuide } from "../services/repairGuide";

export default function CreateGuide(props) {
  const [ setNewGuide] = useState(null);

  const [electronicId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    title: "",
    electronic_id: "",
    steps: "",
  });
  const { name, image_url, title, steps } = formData;
  const { handleCreate, electronics } = props;
  const { id } = useParams();

  console.log(electronics);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGuide = await postRepairGuide(id, electronicId);
    setNewGuide(newGuide);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <form onSubmit={handleSubmit}>
        <select
          className="dropdown"
          name="electronic_id"
          defaultValue="default"
          onChange={handleChange}
        >
          <option disabled value="default">
            select electronic
          </option>
          {electronics?.map((electronic) => (
            <option value={electronic?.id} key={electronic?.id}>
              {electronic?.name}
            </option>
          ))}
        </select>
      </form>
      <h3>Create Repair Guide</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image_url"
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Steps:
        <input type="text" name="steps" value={steps} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
