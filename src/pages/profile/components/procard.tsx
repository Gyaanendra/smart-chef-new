import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

const UserCard: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 max-w-md shadow-md">
      <div className="mr-4">
        <img
          src={user.imageUrl}
          alt={user.fullName || "User Avatar"}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-2">
          {user.fullName || "Anonymous User"}
        </h2>
        <p className="text-gray-500 text-sm mb-1">
          @{user.username || "username"}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          {user.primaryEmailAddress?.emailAddress || "No email"}
        </p>
        {user.primaryPhoneNumber && (
          <p className="text-gray-500 text-sm mb-2">
            {user.primaryPhoneNumber.phoneNumber}
          </p>
        )}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserCard;
