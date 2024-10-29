import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { useForm } from 'react-hook-form';
import { InputRadio } from '../input/InputRadio';

export const CustomNode = ({ data }: any) => {

    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-1 shadow-[0_0_5px_rgb(0_0_0_/_10%)] rounded-md border border-solid border-stone-400">
                <Handle
                    type="target"
                    position={Position.Top}
                    className="w-16 !bg-teal-500"
                />

                {data.children === true ? (
                    <div className='bg-slate-50 px-4 py-2'>
                        <div className='absolute -right-2.5 -top-2.5'><InputRadio column_name="radio" options="check" control={control} errors={errors} required={false} /></div>
                        <ul>
                            {data.item.map((table: any, index: any) => (
                                <li key={index}>{table}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="w-[100px] text-center bg-white px-4 py-2">
                        <div className='absolute -right-2.5 -top-2.5'><InputRadio column_name="radio" options="check" control={control} errors={errors} required={false} /></div>
                        <img src={data.imageUrl} alt={data.name} className="w-6/12 m-auto" />
                        <div className="text-md font-bold">{data.name}</div>
                    </div>
                )}

                <Handle
                    type="source"
                    position={Position.Bottom}
                    className="w-16 !bg-teal-500"
                />
            </div>
        </form>
    );
}
