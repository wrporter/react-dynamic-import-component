import {useEffect} from "react";
import "./App.css";
import {bootstrapGlobalNav} from "./bootstrapGlobalNav";

/**
 * 1. We should enforce a peer dependency on React if we do not have a vanilla
 * option or do not want to provide one. This will prevent us from loading
 * potentially two versions of React on the page, which will cause React to
 * crash.
 * 2. We should consider using a CDN to host the global navigation component.
 * 3. What should we do with caching?
 *  - We could use a 10-minute cache. This gives us good performance, but
 *  difficulty validating changes right away right after deployment.
 *  - If we have API access, we can purge the cache after deployment. We would
 *  need to check on rate limits for this API.
 *  - We can provide a version.txt file on the CDN. First request the
 *  version.txt contents, then request the global nav with a versioned URL for
 *  cache busting. This option is less performant because it requires an
 *  additional request.
 */
export function App() {
    useEffect(() => {
        bootstrapGlobalNav([
            {
                href: "#custom-link-1",
                text: "Custom Link 1"
            },
            {
                href: "#custom-link-2",
                text: "Custom Link 2"
            }
        ]);
    }, []);

    return (
        <>
            <div id="BootstrapGlobalNav"/>

            <p>This is static content in the app.</p>
        </>
    );
}
