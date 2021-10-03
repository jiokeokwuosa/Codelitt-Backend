import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () {
	return this.toString();
};

const UserSchema = new mongoose.Schema(
  {   
    fullName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum:['employee','contractor']
    },
    duration : {
      type: Number    
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

export default User;
