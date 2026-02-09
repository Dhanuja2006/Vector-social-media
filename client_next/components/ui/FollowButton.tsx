import axios from "axios";
import { useState } from "react";

type FollowButtonProps = {
    userId: string;
    isFollowing: boolean;
    onFollowChange: (next: boolean) => void;
};

export default function FollowButton({ userId, isFollowing, onFollowChange }: FollowButtonProps) {

    const [following, setFollowing] = useState(isFollowing);
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

    const toggleFollow = async () => {
        try {
            const res = await axios.put(`${BACKEND_URL}/api/users/${userId}/follow`, {}, { withCredentials: true });
            const next = res.data.followed;
            setFollowing(next);
            onFollowChange(next);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button onClick={toggleFollow} className={`w-30 h-9 rounded-md cursor-pointer font-medium ${following ? "border text-gray-700" : "bg-blue-500 text-white"}`}>
            {following ? "Following" : "Follow"}
        </button>
    );
}
