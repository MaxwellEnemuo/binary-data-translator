import React, { useState } from "react";
import { useDecode } from "./common/hooks/useDecode";
import { InputField } from "./components/InputField/InputField";
import "./App.css";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  const [binary, setBinary] = useState("");
  const { decodedData, error, handleDecode } = useDecode(binary);

  return (
    <div className="App">
      <form onSubmit={handleDecode}>
        <label htmlFor="binary">Binary Data:</label>
        <InputField
          type="text"
          id="binary"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
        />
        <Button type="submit" value="Decode" />
        {error && <div>Error: {error.response?.data?.message[0]}</div>}
        {decodedData && <div>Decoded Data: {decodedData}</div>}
      </form>
    </div>
  );
};

export default App;
