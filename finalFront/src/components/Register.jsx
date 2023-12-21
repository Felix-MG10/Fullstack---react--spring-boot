import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const handleRegister = async () => {
    /* console.log(profileImage)
    const data = { name, address, dob, profileImage };
    */

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("dob", dob);
    formData.append("image", profileImage);
    try {
      const response = await fetch("http://localhost:8080/saveData", {
        method: "POST",

        //body: JSON.stringify(data),
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      } else {
        console.error(
          "Erreur lors de la requête codeError:",
          response.status,
          response.statusText
        );
      }
      setName("");
      setAddress("");
      setDob("");
      setProfileImage("");
    } catch (error) {
      console.error("Erreur lors de la requête catch:", error.message);
    }
  };

  const handleDateChange = (e) => {
    setDob(e.target.value);
  };

  const stylePaper = {
    padding: "20px",
    margin: "20px auto",
    width: "500px",
    height: "90vh",
  };

  const h1Style = {
    color: "#1976D2",
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={stylePaper}>
        <Grid align="center" className="mb-5">
          <h1 className="text-xl mb-3" style={h1Style}>
            Add Student in Backend
          </h1>
          <hr className="border-blue-500 mx-auto" />
        </Grid>
        <form
          className="grid space-y-5"
          method="POST"
          encType="multipart/form-data"
        >
          {/* Name */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Address */}
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Date */}
          <TextField
            id="date"
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={dob}
            onChange={handleDateChange}
          />

          {/* Image */}
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              onChange={(e) => setProfileImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:file:bg-blue-500 dark:hover:file:bg-blue-400 hover:cursor-pointer"
            />
          </label>

          <Button variant="contained" onClick={handleRegister}>
            Submit
          </Button>

         <div className="text-right mt-2">
          <Link
            to={`/students`}
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            
          >
            Student List
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
