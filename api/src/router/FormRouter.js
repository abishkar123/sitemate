import express from 'express'
import { CreateFrom, deleteFrom, getFrom, updateform } from '../model/FormModel.js'

const router = express.Router()

router.post('/', async(req, res, next)=>{
    try {
        const {name, ...rest} = req.body
        const result = await CreateFrom(req.body)
        console.log(req.body)

        if(result?._id){
            return res.status(201).json({
                status: "success",
                message: "Successfuly form crated!",
                result
            })
        }

        res.status(401).json({
            status: "error",
            message: "you can create form",
            result
        })


        
    } catch (error) {
        next(error)
        
    }
})


router.get('/', async(req, res, next)=>{
    try {
      
        const lists = await getFrom()

        
            return res.status(201).json({
                status: "success",
                message: "Successfuly form crated!",
                lists
              })


        
    } catch (error) {
        next(error)
        
    }
})


router.delete('/', async(req, res, next)=>{
    try {
        const ids= req.body
        const deletecount = await deleteFrom(ids)

        deletecount
        ?  res.status(201).json({
            status: "success",
            message: "Successfuly delete!",
    
        })
        :res.status(401).json({
            status: "error",
            message: "you cannt delete form",
            result
        })

        
    } catch (error) {
        next(error)
        
    }
})


router.put('/', async(req, res, next)=>{
    try {
        const {_ids, ...rest}= req.body
        const  result = await updateform(_id, req.body)

        if(result?._id){
            return res.status(201).json({
                status: "success",
                message: "Successfuly update form",
        
            })
        }

        res.status(401).json({
            status: "error",
            message: "you cannot udpate form",
            result
        })

        
    } catch (error) {
        next(error)
        
    }
})



export default router;