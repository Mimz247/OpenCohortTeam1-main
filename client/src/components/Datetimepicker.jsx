import { useState } from "react";
import axios from "axios";
import DateTimerPicker from "react-date-picker";
import { Link, useNavigate } from "react-router-dom";

export default function Datetimerticker() {

    const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const [text, setText] = useState("Empty");

	const onChange = (e, selectedDate) => {
		setDate(selectedDate);
		setShow(false);
	}
	
	const showMode = (currentMode) => {
		setShow(true);
	    setMode(currentMode);
	}
}