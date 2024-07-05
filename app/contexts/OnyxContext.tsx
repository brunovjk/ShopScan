import React, { useEffect, createContext, useContext } from "react";
import Onyx, { useOnyx } from "react-native-onyx";

type ListPhotoType = {
  id: number;
  uri: string;
};

const ONYXKEYS = { LIST_PHOTO: "list_photo" };

type OnyxContextType = {
  photos: ListPhotoType[] | null;
  status: "loading" | "loaded" | null;
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

  const [_photos, _status] = useOnyx(ONYXKEYS.LIST_PHOTO);

  const photos = (_photos as { value: ListPhotoType[] })?.value ?? null;
  const status = (_status as { status: "loading" | "loaded" })?.status ?? null;

  return (
    <OnyxContext.Provider value={{ photos, status }}>
      {children}
    </OnyxContext.Provider>
  );
};

export const useOnyxContext = () => useContext(OnyxContext);
