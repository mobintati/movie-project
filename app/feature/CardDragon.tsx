import React from 'react'
import { Star } from 'lucide-react';
import { Play } from 'lucide-react';
import { Plus } from 'lucide-react';

const CardDragon = () => {
    return (
        <div className='pl-7   ' >
            <div className='pt-8  flex '>
                <p className='bg-red-500 flex justify-center items-center rounded-sm text-white w-8 h-8'>16</p>
                <div className='h-5 w-px bg-white ml-3 mt-[6px]'></div>
                <p className='pl-3 text-white pt-1'>2022</p>
                <div className='h-5 w-px  bg-white ml-3 mt-[6px]'></div>
                <p className='pl-3 text-white pt-0.5'>seasons</p>
                <div className='h-5 w-px bg-white ml-3 mt-[6px]'></div>
                <div className='flex pt-1.5 pl-2 space-x-1'>
                    <Star className='fill-white' color='white' size={18} />
                    <Star className='fill-white' color='white' size={18} />
                    <Star className='fill-white' color='white' size={18} />
                    <Star className='fill-white' color='white' size={18} />
                    <Star className='fill-white' color='white' size={18} />             
                                                                                                    

                </div>
            </div>
            <div className='pt-10'>
                <h1 className='text-white text-4xl'>House of the Dragon</h1>
                <p className='w-100 pt-3 max-sm:flex max-sm:items-center max-sm:justify-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, consequatur. Distinctio porro dicta enim aliquid odit nam in alias. Nobis, voluptatem alias!</p>

            </div>
            <div className='pt-10 flex max-sm:flex-col justify-between '>
                <div className='flex pt-1.5  space-x-5'>
                    <p className='text-white'>information</p>
                     <p className='text-white'>trailer</p>
                      <p className='text-white'>reviews</p>
                </div>
                <div className='flex  items-center  max-sm:pt-5 space-x-3 max-md:pb-10
                '>
                    
                    <button className='bg-blue-400 text-white   w-23 h-9 flex rounded-sm justify-center items-center'><Play size={18} color='white' className='fill-white mr-0.5 pt-0.5' />Watch</button>
                    <button className='text-white flex pr-5'>  <Plus className='mr-1' />MY LIST</button>
                </div>
            </div>


        </div>
    )
}

export default CardDragon
