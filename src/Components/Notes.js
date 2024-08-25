import './animate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Notes ({noteArray,setNoteArray})
{
    
    const [addNoteControl,setAddNoteControl]=useState(1)
    const [newIndex,setNewIndex]=useState(0)
    const [editBtn,setEditBtn]=useState(0)
    const [titleGet,setTitleGet]=useState("");
    const [descriptionGet,setDescriptionGet]=useState("");
  

function addNote(){
    let noteObject={title:titleGet,description:descriptionGet,id: Math.random().toString(36).substr(2, 9)};
  
    setTitleGet("")
    setDescriptionGet("")
    setEditBtn(0)
    console.log(noteObject.id)
    
   let localVar = JSON.parse(localStorage.getItem('newObject'))
   let storageArray ;
   if (localVar)
   {
       storageArray=[...localVar,noteObject ]
   }
   else{
       storageArray=[noteObject ]
   }
    localStorage.setItem('newObject',JSON.stringify(storageArray))
    setNoteArray(JSON.parse(localStorage.getItem('newObject')))
}
function deleteNote(index){
    let localVar = JSON.parse(localStorage.getItem('newObject'))
   let storageArray=[...localVar]
   storageArray.splice(index,1)
   localStorage.setItem('newObject',JSON.stringify(storageArray))
    setNoteArray(JSON.parse(localStorage.getItem('newObject')))
}
function editNote(id){
    let newEditNote=[...noteArray] 
   let editObject = newEditNote.filter(val=>val.id===id)
    console.log(editObject)
    setNewIndex(id)
   setTitleGet(editObject[0].title)
    setDescriptionGet(editObject[0].description)
    setEditBtn(1)
    setAddNoteControl(0)
    
    
}
function saveEdit()
{
    let localVar = JSON.parse(localStorage.getItem('newObject'))
      let  editIndex = localVar.findIndex(val=>val.id===newIndex)
        localVar[editIndex].title=titleGet
        localVar[editIndex].description=descriptionGet
      localStorage.setItem('newObject',JSON.stringify(localVar))
    setNoteArray(JSON.parse(localStorage.getItem('newObject')))
    setTitleGet("")
    setDescriptionGet("")
    setEditBtn(0)
    setAddNoteControl(1)
    
}
    return(
        <div>
        <h1>Write Note</h1>
        <form>
<input type="text" placeholder="title" value={titleGet} onChange={(e)=>setTitleGet(e.target.value)}/><br />
<input type="text" placeholder="description" className="topMargin" value={descriptionGet} onChange={(e)=>setDescriptionGet(e.target.value)}/>
        </form>
        <Button variant="success" className="topMargin" onClick={()=>addNote()} disabled={addNoteControl===0?true:titleGet&&descriptionGet?false:true} >Add Note</Button>
        <Button className="topMargin" value={editBtn} onClick={()=>saveEdit()} disabled={editBtn===0?true:titleGet&&descriptionGet?false:true}>Save Edit</Button>
        <hr />
        {noteArray?.map((item,index)=>(
            <Card key={index} >
      
      <Card.Body className="animate">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Button variant="secondary" onClick={()=>editNote(item.id)}>Edit Note</Button>
        <Button variant="danger" onClick={()=>deleteNote(index)}>Delete Note</Button>
      </Card.Body>
    </Card>    
        )

        )}
       
        </div>
    )
}
export default Notes; 