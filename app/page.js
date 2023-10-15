'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [note, setNote] = useState({ title: "", desc: "", date: "" });

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const [month, day] = formattedDate.split(' ');
  
    return { month, day };
  };
  
  const addNote = () => {
    const currentDate = formatDate(new Date());
    let newNote = { title: note.title, desc: note.desc, date: currentDate };
  
    let notes = localStorage.getItem("notes");
  
    if (notes) {
      let notesJson = JSON.parse(notes);
  
      if (notesJson) {
        if (notesJson.some(value => value.title === note.title)) {
          alert("Note with this title already exists");
        } else { 
          // Push the new note to the array
          notesJson.push(newNote);
  
          // Update localStorage
          localStorage.setItem("notes", JSON.stringify(notesJson));
  
          alert("Note has been added");
  
          // Reset the note state
          setNote({ title: "", desc: "", date: "" });
        }
      }
    } else {
      // Create an array with the new note
      localStorage.setItem("notes", JSON.stringify([newNote]));
      alert("Note has been added");
      // Reset the note state
      setNote({ title: "", desc: "", date: "" });
    }
  };
  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="text-gray-600 body-font relative">
          <div className="w-full lg:w-4/5 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Take a Note</h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
              <input type="title" value={note.title} onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })} id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Description</label>
              <textarea id="desc" value={note.desc} onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })} name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button onClick={addNote} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Add</button>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
