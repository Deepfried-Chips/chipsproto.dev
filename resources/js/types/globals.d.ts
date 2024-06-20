import { AxiosInstance } from "axios";
import markdownit from "markdown-it";
import { route as ziggyRoute } from "ziggy-js";

declare global {
    interface Window {
        axios: AxiosInstance;
        md: markdownit
    }

    var route: typeof ziggyRoute;
}
