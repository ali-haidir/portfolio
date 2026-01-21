"use client";

import { useEffect } from "react";

export function PageScrollMode({ hideScrollbar }: { hideScrollbar?: boolean }) {
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        if (hideScrollbar) {
            html.classList.add("no-scrollbar");
            body.classList.add("no-scrollbar");
        }

        return () => {
            html.classList.remove("no-scrollbar");
            body.classList.remove("no-scrollbar");
        };
    }, [hideScrollbar]);

    return null;
}