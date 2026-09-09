import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import header from '../component/Header'
import { House } from 'lucide-react';
import { Download } from 'lucide-react';
import { HouseWifi } from 'lucide-react';
import { StarMinus } from 'lucide-react';


const MenuHam = () => {
    const itemsui: string[] = ["New", "Movie", "Series", "Cartoons"];
    const iconLeft: any[] = [<House />, <Download />, <HouseWifi />, <StarMinus />]
    return (
        <div className='lg:hidden'>
            <Sheet>
                <SheetTrigger className={' pl-20 text-gray-300'}>Open</SheetTrigger>
                <SheetContent side='left'>
                    <SheetHeader>
                        <div className='pl-5 '>
                            <ul className='flex-col space-y-7 text-black'>
                                {itemsui.map((i, index) => (
                                    <li className='cursor-pointer' key={index}>{i}</li>

                                )


                                )}
                            </ul>


                        </div>
                    </SheetHeader>
                    <div className='text-black  pt-26 space-y-7 pl-5'>
                        {iconLeft.map((i, index) => (
                            <div key={index}>
                                {i}
                            </div>
                        )
                        )}
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MenuHam
