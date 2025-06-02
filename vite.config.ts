
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                careers: resolve(__dirname, "careers.html"),
                about: resolve(__dirname, "about.html"),
                 login: resolve(__dirname, "login.html"),
                security: resolve(__dirname, "security.html"),
                singup: resolve(__dirname, "singup.html")
            },
        },
    },
});