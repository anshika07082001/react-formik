import React, { useState } from "react";

const UseMinimimState = (initialState: any) => {
  const [minimumState, setMinimumState] = useState();
  return [minimumState, setMinimumState];
};

export default UseMinimimState;
