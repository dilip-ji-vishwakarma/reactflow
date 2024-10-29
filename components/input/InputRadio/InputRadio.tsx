import React from 'react';
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';

type RadioProps = {
    column_name: string;
    options: string;
    required: boolean;
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
};

export const InputRadio: React.FC<RadioProps> = ({ column_name, options, control, errors, required }) => {
    return (
        <>
            <Controller
                name={column_name}
                control={control}
                defaultValue={""}
                rules={{ required: required }}
                render={({ field: { onChange, value } }) => (
                    <div>

                        <div className='mt-[12px]'>

                            <label className='inline-flex items-center mr-4'>
                                <input
                                    type="radio"
                                    value={options}
                                    checked={value === options}
                                    onChange={onChange}
                                    className="form-radio text-blue-500"
                                />
                            </label>

                        </div>
                    </div>
                )}
            />
            {errors[column_name] && (
                <div className='mt-[10px]'>
                    <span className="text-red-500 text-sm">Please select an option</span>
                </div>
            )}
        </>
    );
};
