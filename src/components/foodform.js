import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FoodForm = () => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [foodFields, setFoodFields] = useState([
    { foodName: "", quantity: "" },
  ]);
  const [unit, setUnit] = useState("");

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleFoodChange = (index, field, value) => {
    const updatedFoodFields = [...foodFields];
    updatedFoodFields[index][field] = value;
    setFoodFields(updatedFoodFields);
  };

  const handleAddMore = () => {
    setFoodFields([...foodFields, { foodName: "", quantity: "" }]);

    // Scroll to the bottom of the container after adding a new field
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data processing
    // Access form data from the state variables (name, street, city, postalCode, description, address, foodFields)
    console.log("Form submitted:", {
      name,
      street,
      city,
      postalCode,
      description,
      address,
      foodFields,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="p-1 col-xm-12 col-sm-10 col-md-8 col-lg-6">
              <h1 className="text-center my-4">Food Form</h1>
              <div className="overflow-auto" style={{ maxHeight: "70vh" }}>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postal Code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <hr className="my-4" />
                  <h3 className="text-center mb-3">Food Details</h3>
                  {foodFields.map((food, index) => (
                    <div key={index} className="mb-3 d-flex">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Food Name"
                        value={food.foodName}
                        onChange={(e) =>
                          handleFoodChange(index, "foodName", e.target.value)
                        }
                      />
                      <input
                        type="number"
                        className="form-control me-2"
                        placeholder="Quantity"
                        value={food.quantity}
                        onChange={(e) =>
                          handleFoodChange(index, "quantity", e.target.value)
                        }
                      />
                      <select value={unit} onChange={handleUnitChange} className="form-control">
                        <option value="">Select Unit</option>
                        <option value="kg">kg</option>
                        <option value="count">count</option>
                        <option value="litre">litre</option>
                      </select>
                    </div>
                  ))}
                  <div className="text-end mb-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddMore}
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add More
                    </button>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FoodForm;
