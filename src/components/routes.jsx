import BaseLayout from "./Layout/BaseLayout";
import { Routes, Route } from "react-router";

const RoutesContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout>Homepage</BaseLayout>} />
            <Route path="/cartoons" element={<BaseLayout>Card</BaseLayout>} />
        </Routes>
    )
}

export default RoutesContainer;

