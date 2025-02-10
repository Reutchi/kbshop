import React from 'react'

interface socialEnjoyProps{
    description:string,
    link:string,
}
const SocialEnjoy: React.FC = ({description,link}:socialEnjoyProps) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className="text-white relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <a href={link}>
                    <span>{description}</span>
                </a>
            </div>
        </div>
    )
}
export default SocialEnjoy
