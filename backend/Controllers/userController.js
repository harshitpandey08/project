import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {

        const updatedUser= await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true, message: "User has been updated successfully", data:updatedUser});

    } catch (error) {
        res.status(500).json({success:false, message: "Failed to update" });
    }
}



export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {

       await User.findByIdAndDelete(id,);
        res.status(200).json({success:true, message: "User has been deleted successfully", data:updatedUser});

    } catch (error) {
        res.status(500).json({success:false, message: "Failed to delete" });
    }
}




export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {

        const user= await User.findById(id,).select("-password");
        res.status(200).json({success:true, message: "User found", data:user});

    } catch (error) {
        res.status(404).json({success:false, message: "No user Found" });
    }
}



export const getAllUser = async (req, res) => {
   
    try {

        const users = await User.find({}).select("-password");
        res.status(200).json({success:true, message: "Users found", data:users});

    } catch (error) {
        res.status(404).json({success:false, message: "Not Found" });
    }
};

export const getUserProfile = async(req,res)=>{
    const userId = req.userId;
  
    try{
      const userId = await User.findById(userId);
  
      if(!user){
        return res.status(404).json({success:false,message:'User not found'});
      }
      const {password, ...rest} = user._doc;
  
      res.status(200).json({success:true,message:'profile info is getting',data:{...rest},
    });
    } catch(err){
      res.status(500).json({success:false,message:'Something went wrong,cannot get'});
    }
  };


  export const getMyAppointments = async(req,res)=>{
    try {
  
      //step -1 : retrive appointment from booking for specific user.
      const bookings = await Booking.find({user:req.userId})
  
      //step -2 : extract doctor id from appo book.
      const doctorIds = bookings.map(el=>el.doctor.id)
  
  
      //step -3 : retrive doctor using doctor id
      const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')
  
      res.status(200).json({success:true,message:"Appointments are getting",
      data: doctors,
    })
  
    } catch (err) {
      res.status(500).json({success:false,message:'Something went wrong,cannot get'});
      
    }
  };
  
