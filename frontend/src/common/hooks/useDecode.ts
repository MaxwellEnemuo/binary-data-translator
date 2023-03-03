import axios from "axios";
import { useState } from "react";
import { ErrorResponse } from "../../types";
import { BASE_URL } from "../urls/external_urls";

export const useDecode = (binary: string) => {
  const [decodedData, setDecodedData] = useState("");
  const [error, setError] = useState<ErrorResponse | null>();

  const handleDecode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(BASE_URL, {
        binary,
      });
      setDecodedData(response.data.decodedString);
      setError(null);
    } catch (error) {
      setError(error as ErrorResponse);
      setDecodedData("");
    }
  };

  return { decodedData, error, handleDecode };
};
