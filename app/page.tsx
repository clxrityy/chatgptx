import React from 'react';
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';


function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center h-auto md:h-screen px-2 text-white'>
            <h1 className='text-5xl font-bold mb-20'>
                ChatGPTx
            </h1>
            <div className='flex space-x-2 text-center flex-col md:flex-row'>
                 {/* 1 */}
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <SunIcon className='h-8 w-8' />
                        <h2>
                            Examples
                        </h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>
                            &quot;Explain something to me&quot;
                        </p>
                        <p className='infoText'>
                            &quot;What is quantum mechanics?&quot;
                        </p>
                        <p className='infoText'>
                            &quot;Who is the richest person at the moment?&quot;
                        </p>
                    </div>
                </div>
                {/* 2 */}
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <BoltIcon className='h-8 w-8' />
                        <h2>
                            Capabilities
                        </h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>
                            Change the ChatGPT model
                        </p>
                        <p className='infoText'>
                            Messages are stored in Firebase&#39;s Firestore
                        </p>
                        <p className='infoText'>
                            Hot Toast notifications when ChatGPT is thinking!
                        </p>
                    </div>
                </div>
                {/* 3 */}
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <ExclamationTriangleIcon className='h-8 w-8' />
                        <h2>
                            Limitations
                        </h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>
                            May occasionally generate incorrect information
                        </p>
                        <p className='infoText'>
                            May occasionally produce harmful instructions or biased content
                        </p>
                        <p className='infoText'>
                            Limited knowledge on world events after 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;