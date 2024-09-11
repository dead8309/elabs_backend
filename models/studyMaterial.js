const mongoose=require('mongoose');

const studyMaterialSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    }, // Can be replace by the by default id generated by mongoDB.
    title:{
        type:String,
        required:true
    },
    eventId:{
        type:mongoose.Types.ObjectId,
        ref:'eventModel',
        required:true
    },
    fileUrl:{
        type:String,
        required:true
    },

    uploadedAt:{
        type:String,
        required:true,
        default:Date.now()

    },
   
});

export const studyMaterialModel=mongoose.model('StudyMaterial',studyMaterialSchema);