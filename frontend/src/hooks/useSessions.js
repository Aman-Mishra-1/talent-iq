import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: (data) => sessionApi.createSession(data), // ✅
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) =>
      toast.error(error.response?.data?.message || "Failed to create room"),
  });
};

export const useActiveSessions = () => {
  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: () => sessionApi.getActiveSessions(), // ✅
  });
};

export const useMyRecentSessions = () => {
  return useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: () => sessionApi.getMyRecentSessions(), // ✅
  });
};

export const useJoinSession = () => {
  return useMutation({
    mutationKey: ["joinSession"],
    mutationFn: (id) => sessionApi.joinSession(id), // ✅
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) =>
      toast.error(error.response?.data?.message || "Failed to join session"),
  });
};

export const useEndSession = () => {
  return useMutation({
    mutationKey: ["endSession"],
    mutationFn: (id) => sessionApi.endSession(id), // ✅
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) =>
      toast.error(error.response?.data?.message || "Failed to end session"),
  });
};
