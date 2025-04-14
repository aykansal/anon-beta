import { createContext, Dispatch, SetStateAction } from "react";

interface PreviewContextInterface {
  preview: boolean;
  setPreview: Dispatch<SetStateAction<boolean>>;
}

export const PreviewContext = createContext<PreviewContextInterface>({
  preview: false,
  setPreview: () => {},
});
