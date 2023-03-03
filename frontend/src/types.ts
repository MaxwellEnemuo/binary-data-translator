export interface InputFieldProps {
  type: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  type: string;
  value: string;
}

export interface ErrorResponse {
  response: {
    data: {
      message: string[];
    };
  };
}
