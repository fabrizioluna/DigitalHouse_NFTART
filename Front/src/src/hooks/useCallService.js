import { useEffect, useState } from 'react';

export const useCallService = (
  callback,
//   request?: any
) => {
  const [call, setCall] = useState(null);

  useEffect(() => {
    const callService = async () => {
      // Esto podria descomponer el de Products
      const { data } = await callback();

      //   Si la data es un array... entonces hace un map del callback del Adapter.
      setCall(data);
    };
    callService();
  }, []);

  return { call };
};