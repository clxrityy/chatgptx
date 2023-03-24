'use client';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getModels').then(res => res.json())

export default function ModelSelection() {

    const { data: models, isLoading } = useSWR('models', fetchModels);
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

    return (
        <div className='mt-2'>
            <Select
                className='mt-2'
                options={models?.modelOptions}
                defaultValue={model}
                placeholder={model}
                isSearchable
                isLoading={isLoading}
                menuPosition='fixed'
                classNames={{
                    control: (state) => "bg-[#5e6386] border-[#434654]"
                }}
                onChange={(e) => setModel(e.value)}
            />
        </div>
    );
}
