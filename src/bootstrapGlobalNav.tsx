import ReactDOM from "react-dom/client";
import {Suspense, lazy} from "react";
import "./bootstrapGlobalNav.css";
import {CustomLink} from "./types.ts";

const GlobalNav = lazy(() => import('./GlobalNav'));

/**
 * Package function that serves as the entrypoint to bootstrap the dynamic
 * global navigation in an application.
 */
export function bootstrapGlobalNav(customLinks: CustomLink[] = []) {
    return ReactDOM
        .createRoot(document.getElementById('BootstrapGlobalNav')!)
        .render(
            <Suspense fallback={<div className="fallback" />}>
                <GlobalNav customLinks={customLinks} />
            </Suspense>
        );
}