import { Schema, model } from "mongoose";

const OrganizationSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  companyOrgNo: {
    type: String,
    required: false,
  },

  country: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
});

const OrganizationModel = new model("organizartion", OrganizationSchema);
export default OrganizationModel;
