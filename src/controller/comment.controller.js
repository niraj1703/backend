import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {assyncHandler} from "../utils/assyncHandler.js"

const getVideoComments = assyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

})

const addComment = assyncHandler(async (req, res) => {
    // TODO: add a comment to a video
})

const updateComment = assyncHandler(async (req, res) => {
    // TODO: update a comment
})

const deleteComment = assyncHandler(async (req, res) => {
    // TODO: delete a comment
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }