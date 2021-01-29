module.exports = mongoose => {
    var treeSchema = mongoose.Schema({
      username: String,
      email: String,
      password: String,
      sigle: String,
      value: Number,
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "role"
        }
      ],
    }, 
    { timestamps: true }
    )
  
    treeSchema.virtual('resource_id').get(function(){
      return this._id;
    });
  
    // Ensure virtual fields are serialised.
    treeSchema.set('toJSON', {
      virtuals: true
    });
    const Tree = mongoose.model("tree", treeSchema);
    return Tree;
  };