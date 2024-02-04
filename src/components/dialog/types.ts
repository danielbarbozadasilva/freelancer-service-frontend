import { ReactNode } from "react";

export interface DialogModalProps {
    open: boolean;
    remove?: () => void;
    close: () => void;
    title?: string;
    children?: ReactNode;
}