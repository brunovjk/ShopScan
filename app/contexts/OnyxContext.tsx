import React, { useEffect, createContext, useContext } from "react";
import Onyx, { useOnyx } from "react-native-onyx";
import CONST from "../contexts/CONST";

type ListPhotoType = {
  id: number;
  uri: string;
};

const ONYXKEYS = { LIST_PHOTO: CONST.LIST_PHOTO };

type OnyxContextType = {
  photos: ListPhotoType[] | null;
  status: (typeof CONST.STATUS)[keyof typeof CONST.STATUS] | null;
};

const OnyxContext = createContext<OnyxContextType>({
  photos: null,
  status: null,
});

export const OnyxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    Onyx.init({ keys: ONYXKEYS });
  }, []);

  const [photosOnyx, statusOnyx] = useOnyx(ONYXKEYS.LIST_PHOTO);

  const photos = (photosOnyx as { value: ListPhotoType[] })?.value ?? null;
  const status =
    (statusOnyx as { status: (typeof CONST.STATUS)[keyof typeof CONST.STATUS] })
      ?.status ?? null;

  return (
    <OnyxContext.Provider value={{ photos, status }}>
      {children}
    </OnyxContext.Provider>
  );
};

export const useOnyxContext = () => useContext(OnyxContext);
