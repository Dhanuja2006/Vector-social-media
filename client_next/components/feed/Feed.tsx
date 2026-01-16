"use client";

import PostList from "./PostList";

export default function Feed() {
    return (
        <div className="h-screen overflow-y-auto hide-scrollbar w-full px-5 py-15 md:pl-15 md:py-25">
            <PostList/>
        </div>
    );
}
