'use client';
import useSWR from 'swr';
import Select from 'react-select';
import { useState } from 'react';
import { CogIcon } from '@heroicons/react/24/solid';

const fetchModels = () => fetch('/api/getModels').then(res => res.json())

export default function ModelSelection() {

    const { data: models, isLoading } = useSWR('models', fetchModels);
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    });

    const [selected, setSelected] = useState(false);

    return (
        <div className='mt-2'>
            {!selected && (
                <button
                    onClick={() => setSelected(true)}
                    className='rounded-md mt-2 bg-[#8290e6] hover:bg-[#5966c0] ease-out duration-150 text-white text-center flex flex-row items-center justify-center space-x-1 px-1 py-1'
                >
                    <CogIcon className='text-white h-4 w-4' />
                    <p className='hidden md:block'>
                        Model Settings
                    </p>
                </button>
            )}
            {selected && (
                <Select
                
                className='mt-2'
                options={models?.modelOptions}
                defaultValue={model}
                placeholder={model}
                isSearchable
                isLoading={isLoading}
                menuPosition='fixed'
                classNames={{
                    control: (state) => state.isFocused ? 'border-[#8290e6]' : 'border-gray-600'
                }}
                onChange={(e) => setModel(e.value)}
            />
            )}
        </div>
    );
}
