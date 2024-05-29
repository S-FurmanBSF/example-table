import { ChangeEvent } from 'react';
import { Input, Label, Wrapper } from './TextInput.styled.ts';

interface Props {
  value: string;
  onChange: (x: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return (
    <Wrapper>
      <Label htmlFor="search">
        Search by Task:
        <Input id="search" type="text" value={value} onChange={onChange} />
      </Label>
      <br />
    </Wrapper>
  );
};

export default TextInput;
