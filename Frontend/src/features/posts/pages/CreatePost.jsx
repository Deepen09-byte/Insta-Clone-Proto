import React from 'react'
import "../style/createpost.scss"
import { useState, useRef } from 'react'
import {usePost} from '../hook/usePost.js'
import { useNavigate } from 'react-router'

const CreatePost = () => {


    const [caption, setcaption] = useState("")
    const postImageInputRef = useRef(null)

    const {handleCreatePost , loading} = usePost()
    const navigate = useNavigate()

    async function handleSubmit (e) {
        e.preventDefault()

        const file = postImageInputRef.current.files[0]

       await handleCreatePost(file , caption)

       navigate('/')
    }

    if(loading){
        return (
            <main>
                <h1>Creating Post...</h1>
            </main>
        )
    }

  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create Post</h1>
                
            <form onSubmit = {handleSubmit}>

                <label className='post-image-label' htmlFor='postImage'>Select Image</label>
                <input
                ref={postImageInputRef} hidden type="file" name='postImage' id='postImage' />
                <input 
                value = {caption}
                onChange = {(e)=>{setcaption(e.target.value)}}type="text" name='caption' id='caption' placeholder='Enter Caption'/>
                <button className='button primary-button'children>Create Post</button>

            </form>
        </div>

    </main>
  )
}

export default CreatePost
