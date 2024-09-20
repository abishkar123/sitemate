import FormSchema from "./FormSchema.js"

export const CreateFrom = (obj) =>{
    return FormSchema(obj).save()
}
export const getFrom = () =>{
    return FormSchema.find()
}

export const updateform = (_id, obj) =>{
    return FormSchema.findByIdAndUpdate(_id, obj, {new:true})
}
export const deleteFrom = (idsArg) =>{
    return FormSchema.deleteMany({
        _id: {$in:idsArg},

    }).exec()
}