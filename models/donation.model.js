module.exports = mongoose => {
    var donationSchema = mongoose.Schema({
      userId: Number,
      treeId: Number,
      donationDate: Date
    }, {
      timestamps: true
    })
  
    donationSchema.virtual('resource_id').get(function () {
      return this._id;
    });
  
    // Ensure virtual fields are serialised.
    donationSchema.set('toJSON', {
      virtuals: true
    });
    const Donation = mongoose.model("donation", donationSchema);
    return Donation;
  };