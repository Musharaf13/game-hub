import { useEffect, useState } from "react";
import apiClient from "../service_api";
import { CanceledError } from "axios";
import useData from "./useData";

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
}

interface FetchData {
  count: number;
  results: Game[];
}

const useGames = (value: string | null) =>
  useData<Game>("/games", { params: { genres: value?.toLowerCase() } }, [
    value,
  ]);

export default useGames;
