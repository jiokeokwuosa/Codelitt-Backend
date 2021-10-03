import mongoose from "mongoose";

const TagListSchema = new mongoose.Schema(
  {
    tagId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag",
    }, 
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }     
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const TagList = mongoose.model("tagList", TagListSchema);

export default TagList;
