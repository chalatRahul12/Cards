import React, { useState,useEffect} from 'react'


import { people } from '../../Utils/data'

import '../App.css'
import imgCard from '../assets/image.png'
import Badge from './Badge'
import Modal from './Modal'

function Card() {
    
    const [data, setData] = useState([])
    
    const [singlePerson, setSinglePerson] = useState([])
    
  
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        try {
            setData(people)
        }
        catch (err) {
            console.log(err)
        }
    },[])
    return (
        <>

            {
                data.length === 0 ?
                    <h1 className='title'>No data to show</h1>
                    :
                    <>
                        <h1 className='title'>Cards</h1>
                      
                        <section className='cards'>
                            {

                                people.map((person) => {
                                    const { id, email_id, age, name, role } = person

                                    return (

                                        <article className='card' key={id}>
                                            
                                            <h1>{name}</h1>
                                         
                                            <div className='role-container'>
                                                <Badge role={role} variant={'success'} size={'large'} />
                                                <button onClick={() => {
                                                    setSinglePerson(person)
                                                    setOpen(true)

                                                }}> More Info</button>

                                            </div>
                                         
                                        </article>

                                    )

                                })
                            }
                        </section>

                        <Modal person={singlePerson} closeModal={handleClose} isOpen={open} />
                        
                    </>
            }
        </>
        )
}

export default Card