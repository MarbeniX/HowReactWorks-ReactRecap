import { content } from "./data.js";
import Tabbed from "./components/Tabbed.jsx";

export default function App() {
    return (
        <div>
            <Tabbed content={content} />
        </div>
    );
}
