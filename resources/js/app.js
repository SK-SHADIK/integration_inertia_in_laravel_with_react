import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react"; // Correct casing

createInertiaApp({
    resolve: name => import(`./Pages/${name}`), // Fixed the dot in front of Pages
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    }
});