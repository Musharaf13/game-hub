import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../service_api";
import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
