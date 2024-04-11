import Image from "next/image";
import {imageButtonProps} from "@/app/@types/component";

export default function CImageButton({image, title, classList,imagePosition = 'front',onClick,titleHidden=false}: imageButtonProps) {
    return (
        <button
            className={'rounded flex justify-center items-center gap-1 ' + (classList)} onClick={onClick}>
            {imagePosition === 'front' && <Image src={image} alt={title}/>}
            {titleHidden ? <p className={"sr_only"}>{title}</p> : title}
            {imagePosition === 'back' && <Image src={image} alt={title}/>}
        </button>
    )
}