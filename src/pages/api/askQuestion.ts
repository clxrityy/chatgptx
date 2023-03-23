import type { NextApiRequest, NextApiResponse } from 'next';
import query from '../../../lib/queryApi';
import admin from 'firebase-admin';
import { adminDb } from '../../../firebaseAdmin';

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt!" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid chat ID!" });
        return;
    }

    // ChatGPT Query
    const response = await query(prompt, chatId, model)

    const message: Message = {
        text: response || "ChatGPTx was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPTx',
            name: 'ChatGPTx',
            avatar: 'https://imgur.com/ZWIjDfX.png',
        },
    };

    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message);

    res.status(200).json({ answer: message.text });
}
