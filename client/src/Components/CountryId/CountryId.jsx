import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../actions/actions";
import Activity from "../Countries/ActivDetail";
import style from "./countryId.module.css";

const CountryId = () => {
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  console.log(countryDetail, "COUNTRY DETAIL");
};
