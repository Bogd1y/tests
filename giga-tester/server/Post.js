import mongoose from "mongoose";

const Post = new mongoose.Schema(
    {
        "name": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "products": {
          "type": [
            "Mixed"
          ]
        }
    }
)

export default mongoose.model('Post', Post)