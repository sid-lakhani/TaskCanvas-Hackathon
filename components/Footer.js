import React from 'react'

export default function Footer() {
    return (
        <div className='fixed bottom-0 w-full left-0 bg-inherit flex items-center justify-center p-1 border-t border-solid border-white'>
            <h2 className='text-base sm:text-lg select-none px-2 sm:px-3'>Organize, Prioritize, Achieve, Repeat</h2>
            <a href='https://github.com/sid-lakhani/TaskCanvas-Hackathon'>
                <i className="fa-brands fa-github text-lg sm:text-xl duration-300 hover:opacity-30 cursor-pointer px-2 sm:px-3 "></i>
            </a>
        </div>
    )
}