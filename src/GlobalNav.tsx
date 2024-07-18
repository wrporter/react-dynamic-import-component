import "./GlobalNav.css";
import {CustomLink} from "./types.ts";

/**
 * The actual global navigation component.
 */
export default function GlobalNav({customLinks = []}: { customLinks: CustomLink[] }) {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <a href="#home">Home</a>
                </li>

                {
                    customLinks.map(({href, text}) => (
                        <li key={href} className="nav-list-item">
                            <a href={href}>{text}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}