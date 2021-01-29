module.exports = mongoose => {
  var treeSchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    quantity: Number
  }, {
    timestamps: true
  })

  treeSchema.virtual('resource_id').get(function () {
    return this._id;
  });

  // Ensure virtual fields are serialised.
  treeSchema.set('toJSON', {
    virtuals: true
  });
  const Tree = mongoose.model("tree", treeSchema);
  return Tree;
};