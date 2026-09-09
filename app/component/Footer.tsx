import React from 'react'

const footer = () => {
    const footerlist = ["about using", "vlog", "contact", "report",]
    return (
        <div >
            <div className='flex justify-center pt-10'>
                <p className='text-white text-2xl '>AGENCY</p>
            </div>
            <div className='flex space-x-10 justify-center pt-5 '>
                {footerlist.map((i, index) => (
                    <ul key={index} className='flex'>
                        <li className='text-white '>{i}</li>
                        

                    </ul>                                                        

                ))}
                
            </div>

        </div>
    )
}

export default footer
