export interface RemoveProps {
    open: boolean;
    remove: (formData: FormData) => void
    close: () => void;
  }