import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  street: { type: String, minlength: [10, "Enter valid street address"] },
  postalCode: {
    type: String,
    minlength: [6, "Postal code is not in correct form"],
    maxlength: [6, "Cannot exceed 6 characters"]
  },
  city: String,
  province: String,
  country: String
});
const serviceSchema = mongoose.Schema({
  name: { type: String, required: true },
  Address: { type: addressSchema, required: true },
  Website: String,
  Business_Hours: [
    {
      Weekday: { type: String, minlength: 6, maxlength: 8, required: true },
      Time: { type: String, minlength: 3, maxlength: 4, required: true }
    }
  ],
  Services: [
    {
      type: String,
      required: true
    }
  ],
  Amenities: [
    {
      type: String,
      required: true,
      default: []
    }
  ],
  Languages: [
    {
      type: String,
      required: true,
      default: []
    }
  ]
});

const Services = mongoose.model("Services", serviceSchema);

export default Services;
//XMAS50
//BLACKFRIDAY50
//male fantasy
