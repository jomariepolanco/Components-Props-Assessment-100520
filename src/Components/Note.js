import React from 'react'


function Note(props) {
    // console.log(props.note)
    return <li>{props.note.content}</li>
}

export default Note;