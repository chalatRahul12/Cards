import React from 'react'
import img from '../assets/image.png'



function Modal({ person, closeModal, isOpen }) {



    if (!isOpen) return null;
   
    return (
        <div onClick={closeModal} className='modal'>
      
            {
                person &&
                <article key={person.id} >

                    <img src={img} className='img' />
                    <div className='details-modal'>
                        <h3 className='title'>   <span className='heading'>Name:</span> {person.name}</h3>
                        <p className='text'> <span className='heading'>Age:</span> {person.age}</p>
                        <p className='text'> <span className='heading'>Email:</span> {person.email_id}</p>
                        <p className='text'> <span className='heading'>Role:</span> {person.role}</p>
                    </div>
                    <button className='margin' onClick={closeModal}>Close</button>

                </article>
            }
                    
                        
                      
            </div>
        )
}

export default Modal