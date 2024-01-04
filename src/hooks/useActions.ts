import { allActions } from "@/store/actions";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch";

export const useActions = () => bindActionCreators(allActions, useAppDispatch())
