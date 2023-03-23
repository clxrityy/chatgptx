/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
}

export default function Message({ message }: Props) {

    const isChatGPT = message.user.name === "ChatGPTx";



    return (
        <div className={`py-5 text-gray-300 ${isChatGPT && 'bg-[#3e444e]/80'}`}>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img src={message.user.avatar} alt="avatar" className="h-8 w-8" />
                <p className="pt-1 text-sm">
                    {message.text}
                </p>
            </div>
        </div>
    );
}
