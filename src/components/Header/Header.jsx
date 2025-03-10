import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col items-center max-md:px-5 max-md:flex-row max-md:justify-between'>
            <h1 className='text-5xl font-bold my-10 max-md:text-3xl max-md:font-extrabold'>Mural's News</h1>
            <div className='max-md:block hidden'>burguer</div>
            <nav className='w-[75vw] border-y-1 py-1 px-5 max-md:hidden'>
                <ul className='flex flex-row justify-between'>
                    <li><a href="" className='font-medium text-sm'>INVESTIGATIONS</a></li>
                    <li><a href="" className='font-medium text-sm'>OPINION</a></li>
                    <li><a href="" className='font-medium text-sm'>ART & CULTURE</a></li>
                    <li><a href="" className='font-medium text-sm'>BUSINESS</a></li>
                    <li><a href="" className='font-medium text-sm'>CLIMATE</a></li>
                    <li><a href="" className='font-medium text-sm'>MAGAZINES</a></li>
                    <li><a href="" className='font-medium text-sm'>MAGAZINES</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header