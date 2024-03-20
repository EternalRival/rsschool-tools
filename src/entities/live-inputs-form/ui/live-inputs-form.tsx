import { Fragment } from 'react';

import { debounce } from '@/shared/lib/debounce';
import { StyledForm } from '@/shared/ui/styled-form';

import type { FC, FormEventHandler } from 'react';
import type { FormFieldProps } from '../model/form-field-props.schema';

type Props = {
  legendText: string;
  inputList: FormFieldProps[];
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const LiveInputsForm: FC<Props> = ({ legendText, inputList, handleSubmit }) => {
  const handleInput = debounce<FormEventHandler<HTMLInputElement>>(({ target }) => {
    if (target instanceof HTMLInputElement) {
      target.form?.requestSubmit();
    }
  }, 1000);

  return (
    <StyledForm
      legendText={legendText}
      handleSubmit={handleSubmit}
    >
      {inputList.map(({ className, label, name, value }) => (
        <Fragment key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            className={className}
            type="text"
            onInput={handleInput}
            defaultValue={value}
          />
        </Fragment>
      ))}
    </StyledForm>
  );
};