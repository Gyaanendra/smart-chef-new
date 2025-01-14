import React, { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Mail, Phone, MapPin } from "lucide-react";

interface Tab {
  id: "profile" | "activity" | "settings";
  label: string;
}

type ActiveTabType = Tab["id"];

// Define proper types for the Clerk user object
interface ClerkUser {
  id: string;
  fullName: string | null;
  username: string | null;
  imageUrl: string;
  primaryEmailAddress?: {
    emailAddress: string;
  };
  primaryPhoneNumber?: {
    phoneNumber: string;
  };
  createdAt: string;
  updatedAt: string;
}

const UserDashboard: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("profile");

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const clerkUser = user as unknown as ClerkUser;

  const tabs: Tab[] = [
    { id: "profile", label: "Profile" },
    { id: "activity", label: "Activity" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={clerkUser.imageUrl}
              alt={clerkUser.fullName ?? "User Avatar"}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-20 px-8 pb-8">
          {/* User Info Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {clerkUser.fullName ?? "Anonymous User"}
              </h1>
              <p className="text-gray-600 text-lg">
                @{clerkUser.username ?? "username"}
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Sign Out
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>
                    {clerkUser.primaryEmailAddress?.emailAddress ?? "No email"}
                  </span>
                </div>
                {clerkUser.primaryPhoneNumber && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{clerkUser.primaryPhoneNumber.phoneNumber}</span>
                  </div>
                )}
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Location not set</span>
                </div>
              </div>
            </div>

            {/* Account Statistics */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Account Statistics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Member Since</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {clerkUser.createdAt
                      ? new Date(clerkUser.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Last Updated</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {clerkUser.updatedAt
                      ? new Date(clerkUser.updatedAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                About
              </h2>
              <p className="text-gray-600">No bio provided</p>
            </div>

            {/* Profile Completion */}
            <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Profile Completion
              </h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${calculateProfileCompletion(clerkUser)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Your profile is {calculateProfileCompletion(clerkUser)}%
                complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate profile completion percentage
const calculateProfileCompletion = (user: ClerkUser): number => {
  const requiredFields = [
    user.fullName,
    user.username,
    user.primaryEmailAddress,
    user.primaryPhoneNumber,
  ];

  const completedFields = requiredFields.filter((field) => field).length;
  return Math.round((completedFields / requiredFields.length) * 100);
};

export default UserDashboard;
